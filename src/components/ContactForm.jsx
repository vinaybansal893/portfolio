import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, RefreshCw, Mail } from 'lucide-react';
import Button from './Button';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [mailtoUrl, setMailtoUrl] = useState('');

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter a message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Generate mailto link
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Vinay,\n\n${formData.message}\n\nFrom: ${formData.name}\nEmail: ${formData.email}`
    );
    const link = `mailto:vinaybansal893@gmail.com?subject=${subject}&body=${body}`;
    setMailtoUrl(link);
    setSubmitted(true);

    // Trigger user's mail client safely
    window.location.href = link;
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', message: '' });
    setErrors({});
    setSubmitted(false);
    setMailtoUrl('');
  };

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8 backdrop-blur-sm relative">
      {/* Subtle border glow */}
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-sky-500/20 to-transparent" />

      {submitted ? (
        <div className="text-center py-8">
          <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-7 h-7" />
          </div>

          <h3 className="text-xl font-bold text-white mb-2">
            Message Prepared!
          </h3>

          <p className="text-sm text-slate-300 max-w-md mx-auto mb-4 leading-relaxed">
            Your default email app should open automatically with your pre-filled draft to{' '}
            <span className="text-sky-300 font-mono">vinaybansal893@gmail.com</span>.
          </p>

          <p className="text-xs text-slate-400 max-w-sm mx-auto mb-6">
            (This is a direct client-side email connection — no unverified backend or third-party servers required.)
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {mailtoUrl && (
              <Button
                variant="primary"
                size="sm"
                href={mailtoUrl}
                icon={Mail}
              >
                Re-open Email App
              </Button>
            )}
            <Button
              variant="secondary"
              size="sm"
              onClick={handleReset}
              icon={RefreshCw}
            >
              Send Another Note
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <div className="space-y-4">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-mono uppercase text-slate-400 mb-1.5 font-medium"
              >
                Your Name <span className="text-sky-400">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Alex Sharma"
                className={`w-full rounded-lg bg-slate-800/60 border ${
                  errors.name ? 'border-rose-500/80 focus:border-rose-500' : 'border-slate-700/80 focus:border-sky-500'
                } px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors`}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && (
                <p id="name-error" className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errors.name}</span>
                </p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-mono uppercase text-slate-400 mb-1.5 font-medium"
              >
                Your Email <span className="text-sky-400">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. alex@example.com"
                className={`w-full rounded-lg bg-slate-800/60 border ${
                  errors.email ? 'border-rose-500/80 focus:border-rose-500' : 'border-slate-700/80 focus:border-sky-500'
                } px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors`}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <p id="email-error" className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errors.email}</span>
                </p>
              )}
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block text-xs font-mono uppercase text-slate-400 mb-1.5 font-medium"
              >
                Message <span className="text-sky-400">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your note, idea or collaboration thought..."
                className={`w-full rounded-lg bg-slate-800/60 border ${
                  errors.message ? 'border-rose-500/80 focus:border-rose-500' : 'border-slate-700/80 focus:border-sky-500'
                } px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors resize-none`}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              {errors.message && (
                <p id="message-error" className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errors.message}</span>
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <Button
                type="submit"
                variant="primary"
                size="md"
                className="w-full"
                icon={Send}
              >
                Send Message via Mail
              </Button>
            </div>

            <p className="text-[11px] text-slate-500 text-center font-mono mt-2">
              Opens directly in your mail application with a pre-filled draft.
            </p>
          </div>
        </form>
      )}
    </div>
  );
}
