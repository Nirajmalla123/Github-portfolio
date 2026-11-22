import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Send, 
  Check, 
  Copy, 
  Sparkles, 
  MessageSquare,
  ArrowRight
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/resumeData';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // In production, can hook to Formspree, EmailJS, or mailto
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoUrl;
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 6000);
  };

  return (
    <section id="contact" className="py-20 relative border-t border-slate-200/80 dark:border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-500/10 text-accent-500 text-xs font-mono font-medium mb-3 border border-accent-500/20">
            <Sparkles size={13} />
            <span>COMMUNICATION CHANNELS</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white">
            Let's <span className="text-accent-500">Connect</span>
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-2xl text-sm sm:text-base">
            Open for AI/ML engineering roles, graduate research collaborations, software development positions, and technical discussions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border glow-card-hover">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-accent-500/10 text-accent-500 border border-accent-500/20">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 block">Direct Email</span>
                    <a 
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white hover:text-accent-500 transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(personalInfo.email, 'email')}
                  aria-label="Copy Email"
                  className="p-2 rounded-lg bg-slate-100 dark:bg-dark-surface hover:bg-slate-200 dark:hover:bg-dark-cardHover text-slate-600 dark:text-slate-300 transition-colors"
                  title="Copy email address"
                >
                  {copiedEmail ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} />}
                </button>
              </div>
            </div>

            {/* Phone Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border glow-card-hover">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-accent-500/10 text-accent-500 border border-accent-500/20">
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 block">Phone / Mobile</span>
                    <a 
                      href={`tel:${personalInfo.phone}`}
                      className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white hover:text-accent-500 transition-colors font-mono"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(personalInfo.phone, 'phone')}
                  aria-label="Copy Phone Number"
                  className="p-2 rounded-lg bg-slate-100 dark:bg-dark-surface hover:bg-slate-200 dark:hover:bg-dark-cardHover text-slate-600 dark:text-slate-300 transition-colors"
                  title="Copy phone number"
                >
                  {copiedPhone ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} />}
                </button>
              </div>
            </div>

            {/* Location Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border glow-card-hover">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-accent-500/10 text-accent-500 border border-accent-500/20">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 block">Current Location</span>
                  <span className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white">
                    {personalInfo.location}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-dark-muted block mt-0.5">
                    (Mid-West University, Surkhet)
                  </span>
                </div>
              </div>
            </div>

            {/* Online Presence & Profiles */}
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-dark-surface border border-slate-200 dark:border-dark-border">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-3">
                Profiles & Repositories
              </span>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={personalInfo.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-3 rounded-xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border hover:border-accent-500/40 text-xs font-semibold text-slate-800 dark:text-slate-200 transition-colors"
                >
                  <LinkedinIcon size={16} className="text-accent-500 shrink-0" />
                  <span className="truncate">LinkedIn</span>
                </a>

                <a
                  href={personalInfo.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-3 rounded-xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border hover:border-accent-500/40 text-xs font-semibold text-slate-800 dark:text-slate-200 transition-colors"
                >
                  <GithubIcon size={16} className="text-accent-500 shrink-0" />
                  <span className="truncate">GitHub</span>
                </a>

                <a
                  href={personalInfo.portfolio.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="col-span-2 flex items-center justify-between p-3 rounded-xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border hover:border-accent-500/40 text-xs font-semibold text-slate-800 dark:text-slate-200 transition-colors"
                >
                  <div className="flex items-center gap-2 truncate">
                    <Globe size={16} className="text-accent-500 shrink-0" />
                    <span className="truncate font-mono">{personalInfo.portfolio.display}</span>
                  </div>
                  <ArrowRight size={14} className="text-accent-500" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Quick Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border shadow-card-light dark:shadow-card-dark">
              <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <MessageSquare size={19} className="text-accent-500" />
                <span>Send a Direct Message</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-6">
                Fill in the details below to initiate direct contact or send an inquiry.
              </p>

              {formSubmitted ? (
                <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-center animate-fade-in">
                  <Check size={32} className="mx-auto mb-2" />
                  <h4 className="font-display font-bold text-lg">Thank You!</h4>
                  <p className="text-xs sm:text-sm mt-1">
                    Your message draft has been initiated. I will respond to your inquiry shortly!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Henderson"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-dark-surface border border-slate-200 dark:border-dark-border text-slate-900 dark:text-white text-sm focus:outline-none focus:border-accent-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. alex@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-dark-surface border border-slate-200 dark:border-dark-border text-slate-900 dark:text-white text-sm focus:outline-none focus:border-accent-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Subject / Role
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. AI/ML Engineering Opportunity"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-dark-surface border border-slate-200 dark:border-dark-border text-slate-900 dark:text-white text-sm focus:outline-none focus:border-accent-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Your Message *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your message or inquiry here..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-dark-surface border border-slate-200 dark:border-dark-border text-slate-900 dark:text-white text-sm focus:outline-none focus:border-accent-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-accent-500 hover:bg-accent-600 text-white font-semibold text-sm shadow-glow-red-sm hover:shadow-glow-red transition-all duration-200"
                  >
                    <Send size={15} />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
