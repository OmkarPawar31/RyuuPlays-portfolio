const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function cleanText(value, maximumLength) {
  return typeof value === 'string' ? value.trim().slice(0, maximumLength) : '';
}

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    return response.status(405).json({ error: 'Method not allowed.' });
  }

  const name = cleanText(request.body?.name, 120);
  const company = cleanText(request.body?.company, 160);
  const email = cleanText(request.body?.email, 254).toLowerCase();
  const message = cleanText(request.body?.message, 5000);

  if (!name || !company || !emailPattern.test(email) || !message) {
    return response.status(400).json({ error: 'Please complete all required fields.' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_RECIPIENT || 'ryuuonyxyt@gmail.com';

  if (!apiKey || !from) {
    console.error('Email delivery is not configured.');
    return response.status(500).json({ error: 'Unable to send the inquiry.' });
  }

  try {
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `New RyuPlays enquiry from ${name}`,
        text: [
          `Name: ${name}`,
          `Company: ${company}`,
          `Email: ${email}`,
          '',
          'Message:',
          message,
        ].join('\n'),
      }),
    });

    if (!emailResponse.ok) {
      console.error('Email provider rejected the inquiry.', await emailResponse.text());
      return response.status(502).json({ error: 'Unable to send the inquiry.' });
    }

    return response.status(201).json({ success: true });
  } catch (error) {
    console.error('Unable to send inquiry email.', error);
    return response.status(500).json({ error: 'Unable to send the inquiry.' });
  }
}
