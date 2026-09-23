import React, { useState } from 'react';
import { CHANNEL_INFO } from '../data/videos';
import { MailIcon, CopyIcon, CheckIcon } from './Icons';
import { ThreeDContactIcon } from './ThreeDIcons';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    workEmail: '',
    projectScope: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CHANNEL_INFO.contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setFormError('');

    try {
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.fullName,
          company: formData.companyName,
          email: formData.workEmail,
          message: formData.projectScope,
        }),
      });

      if (!response.ok) throw new Error('Unable to submit the inquiry.');
      setSubmitting(false);
      setSubmitted(true);
    } catch {
      setSubmitting(false);
      setFormError('Your inquiry could not be sent. Please email us directly instead.');
    }
  };

  return (
    <section id="contact" className="section-wrapper" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-kicker">Collaborations</span>
          <h2 className="section-title">Business Inquiries</h2>
          <p className="section-description">
            Sponsorships, brand integrations, and review requests.
          </p>
        </div>

        {/* 2-Column Split: Direct Contact & Form */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.4fr)',
            gap: '24px',
            alignItems: 'start',
          }}
          className="contact-split-grid"
        >
          {/* Left Column: Direct Info */}
          <div className="reveal-left" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div className="card-panel" style={{ padding: '28px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
                <span className="badge-tag badge-tag-accent">
                  Direct Contact
                </span>
                <ThreeDContactIcon size={44} />
              </div>

              <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>
                Partnerships Desk
              </h3>

              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '20px' }}>
                Send inquiries for collaborations, sponsorship integrations, event invitations, or game keys directly to the partnerships inbox.
              </p>

              {/* Copyable Email Box */}
              <div
                style={{
                  padding: '12px 14px',
                  backgroundColor: 'var(--bg-primary)',
                  border: '1px solid var(--border-strong)',
                  borderRadius: 'var(--radius-sharp)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '10px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', minWidth: 0 }}>
                  <MailIcon size={16} />
                  <span
                    style={{
                      fontSize: '0.85rem',
                      fontFamily: 'monospace',
                      color: 'var(--text-primary)',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {CHANNEL_INFO.contactEmail}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="btn btn-secondary btn-sm"
                  style={{ padding: '4px 10px', fontSize: '0.75rem', flexShrink: 0 }}
                  title="Copy email"
                >
                  {copied ? <CheckIcon size={12} /> : <CopyIcon size={12} />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="card-panel reveal-right" style={{ padding: '30px' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '6px' }}>
              Send Inquiry
            </h3>
            <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', marginBottom: '22px' }}>
              Fill in the parameters below to get in touch with our team.
            </p>

            {submitted ? (
              <div
                style={{
                  padding: '28px',
                  backgroundColor: 'var(--bg-primary)',
                  border: '1px solid var(--border-strong)',
                  borderRadius: 'var(--radius-sharp)',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    backgroundColor: 'var(--accent-red-subtle)',
                    color: 'var(--accent-red)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 12px auto',
                    borderRadius: 'var(--radius-sharp)',
                    border: '1px solid rgba(217, 56, 41, 0.3)',
                  }}
                >
                  <CheckIcon size={20} />
                </div>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '6px' }}>Inquiry Sent</h4>
                <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '20px' }}>
                  Thank you. We will reply to <strong>{formData.workEmail || 'your email'}</strong> promptly.
                </p>
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      fullName: '',
                      companyName: '',
                      workEmail: '',
                      projectScope: '',
                    });
                  }}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '14px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, marginBottom: '4px', color: 'var(--text-secondary)' }}>
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Alex Vance"
                      style={{
                        width: '100%',
                        padding: '8px 12px',
                        backgroundColor: 'var(--bg-primary)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: 'var(--radius-sharp)',
                        color: 'var(--text-primary)',
                        fontSize: '0.8125rem',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, marginBottom: '4px', color: 'var(--text-secondary)' }}>
                      Brand / Studio *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="e.g. Publisher / Agency"
                      style={{
                        width: '100%',
                        padding: '8px 12px',
                        backgroundColor: 'var(--bg-primary)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: 'var(--radius-sharp)',
                        color: 'var(--text-primary)',
                        fontSize: '0.8125rem',
                        outline: 'none',
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, marginBottom: '4px', color: 'var(--text-secondary)' }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.workEmail}
                    onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                    placeholder="name@company.com"
                    style={{
                      width: '100%',
                      padding: '8px 12px',
                      backgroundColor: 'var(--bg-primary)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-sharp)',
                      color: 'var(--text-primary)',
                      fontSize: '0.8125rem',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, marginBottom: '4px', color: 'var(--text-secondary)' }}>
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.projectScope}
                    onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                    placeholder="Campaign details, game title, or collaboration scope..."
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      backgroundColor: 'var(--bg-primary)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-sharp)',
                      color: 'var(--text-primary)',
                      fontSize: '0.8125rem',
                      outline: 'none',
                      resize: 'vertical',
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn btn-primary"
                  style={{ width: '100%', marginTop: '4px' }}
                >
                  <MailIcon size={16} />
                  <span>{submitting ? 'Sending...' : 'Submit Inquiry'}</span>
                </button>
                {formError && (
                  <p role="alert" style={{ color: 'var(--accent-red)', fontSize: '0.8125rem' }}>
                    {formError}
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-split-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
