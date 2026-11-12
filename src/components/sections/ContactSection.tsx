import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Copy, Github, Linkedin } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';
import { fadeUpVariant, viewportConfig } from '../../lib/animations';
import { MagneticButton } from '../ui/MagneticButton';

export const ContactSection: React.FC = () => {
  const { language } = useLanguage();
  const { contact, profile } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Fallback if clipboard is unavailable
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      formState.subject || `Portfolio Contact from ${formState.firstName} ${formState.lastName}`
    );
    const body = encodeURIComponent(
      `${formState.message}\n\n---\n${formState.firstName} ${formState.lastName} (${formState.email})`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const tickerContent = `${profile.email}  •  ${profile.phone}  •  `;

  return (
    <section id="contact" className="pt-16 pb-24 border-t border-white/10">
      {/* 10.1 Contact Ticker */}
      <div
        onClick={handleCopyEmail}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') handleCopyEmail();
        }}
        title={contact.copyHint[language]}
        className="w-full overflow-hidden py-7 border-b border-white/10 mb-16 cursor-pointer group"
      >
        <div className="animate-marquee-slow items-center">
          {[0, 1, 2, 3].map((idx) => (
            <span
              key={idx}
              className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold text-white group-hover:text-accent-lime transition-colors px-4 whitespace-nowrap"
            >
              {tickerContent}
            </span>
          ))}
        </div>
      </div>

      {/* 10.2 Contact Form */}
      <div className="max-w-5xl mx-auto px-5 md:px-8">
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="space-y-10"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-accent-lime block mb-3">
                {contact.tag[language]}
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white max-w-2xl">
                {contact.title[language]}
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-3 self-start md:self-auto">
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                title="GitHub"
                className="w-11 h-11 rounded-full bg-[#18181C] border border-white/15 hover:border-accent-lime hover:text-accent-lime text-white flex items-center justify-center transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
                className="w-11 h-11 rounded-full bg-[#18181C] border border-white/15 hover:border-accent-lime hover:text-accent-lime text-white flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#18181C] border border-white/15 hover:border-accent-lime text-sm font-mono text-white transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-accent-lime" />
                    <span className="text-accent-lime">{contact.copiedFeedback[language]}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-accent-lime" />
                    <span>{profile.email}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                type="text"
                required
                placeholder={contact.form.firstName[language]}
                value={formState.firstName}
                onChange={(e) => setFormState({ ...formState, firstName: e.target.value })}
                className="w-full bg-[#141417] border border-white/10 focus:border-accent-lime focus:outline-none rounded-xl px-5 py-4 text-white placeholder:text-zinc-500 transition-colors"
              />
              <input
                type="text"
                required
                placeholder={contact.form.lastName[language]}
                value={formState.lastName}
                onChange={(e) => setFormState({ ...formState, lastName: e.target.value })}
                className="w-full bg-[#141417] border border-white/10 focus:border-accent-lime focus:outline-none rounded-xl px-5 py-4 text-white placeholder:text-zinc-500 transition-colors"
              />
              <input
                type="email"
                required
                placeholder={contact.form.email[language]}
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                className="w-full bg-[#141417] border border-white/10 focus:border-accent-lime focus:outline-none rounded-xl px-5 py-4 text-white placeholder:text-zinc-500 transition-colors"
              />
              <input
                type="text"
                placeholder={contact.form.subject[language]}
                value={formState.subject}
                onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                className="w-full bg-[#141417] border border-white/10 focus:border-accent-lime focus:outline-none rounded-xl px-5 py-4 text-white placeholder:text-zinc-500 transition-colors"
              />
            </div>

            <textarea
              rows={5}
              required
              placeholder={contact.form.message[language]}
              value={formState.message}
              onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              className="w-full bg-[#141417] border border-white/10 focus:border-accent-lime focus:outline-none rounded-xl px-5 py-4 text-white placeholder:text-zinc-500 transition-colors resize-y"
            />

            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <MagneticButton type="submit" variant="primary">
                {contact.form.submit[language]}
              </MagneticButton>

              {submitted && (
                <p className="text-sm text-accent-lime font-medium max-w-md">
                  {contact.form.success[language]}
                </p>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
