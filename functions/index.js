const { onRequest } = require('firebase-functions/v2/https');
const { logger } = require('firebase-functions');
const { initializeApp } = require('firebase-admin/app');
const { FieldValue, getFirestore } = require('firebase-admin/firestore');

initializeApp();

const db = getFirestore();
const recipient = 'ryuuonyxyt@gmail.com';
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function cleanText(value, maximumLength) {
  return typeof value === 'string' ? value.trim().slice(0, maximumLength) : '';
}

exports.submitInquiry = onRequest({ region: 'asia-south1' }, async (request, response) => {
  if (request.method !== 'POST') {
    response.set('Allow', 'POST');
    response.status(405).json({ error: 'Method not allowed.' });
    return;
  }

  const name = cleanText(request.body?.name, 120);
  const company = cleanText(request.body?.company, 160);
  const email = cleanText(request.body?.email, 254).toLowerCase();
  const message = cleanText(request.body?.message, 5000);

  if (!name || !company || !emailPattern.test(email) || !message) {
    response.status(400).json({ error: 'Please complete all required fields.' });
    return;
  }

  try {
    const inquiry = {
      name,
      company,
      email,
      message,
      createdAt: FieldValue.serverTimestamp(),
    };
    const inquiryReference = await db.collection('inquiries').add(inquiry);

    await db.collection('mail').add({
      to: [recipient],
      message: {
        subject: `New RyuPlays enquiry from ${name}`,
        text: [
          `Name: ${name}`,
          `Company: ${company}`,
          `Email: ${email}`,
          '',
          'Message:',
          message,
          '',
          `Inquiry ID: ${inquiryReference.id}`,
        ].join('\n'),
      },
    });

    response.status(201).json({ success: true });
  } catch (error) {
    logger.error('Unable to submit inquiry', error);
    response.status(500).json({ error: 'Unable to submit inquiry.' });
  }
});
