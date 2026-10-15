import { useState } from 'react';
import { Mail, Copy, Check, ExternalLink, Send, Sparkles, MapPin } from 'lucide-react';
import { personalData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './SocialIcons';
import MagneticButton from './MagneticButton';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative bg-[#fafbfc] overflow-hidden">
      {/* Visual atmospheric accents */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-gradient-to-t from-indigo-100/60 via-purple-100/40 to-transparent blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/2 right-10 w-72 h-72 bg-sky-100/50 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        {/* Header Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-mono mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Let&apos;s Build Together</span>
        </div>

        {/* Main Invitation Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Ready to Collaborate on <br className="hidden sm:inline" />
          <span className="text-gradient-accent">Software &amp; AI Systems?</span>
        </h2>

        <p className="text-base sm:text-lg text-slate-600 mt-4 max-w-xl mx-auto leading-relaxed font-normal">
          I am actively seeking <strong className="text-slate-900 font-semibold">Software Engineering</strong> and <strong className="text-slate-900 font-semibold">AI/ML</strong> internship opportunities and entry-level technical roles. Whether you have an open position or project discussion, I&apos;d love to connect.
        </p>

        {/* Contact Action Card */}
        <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xl shadow-slate-200/50 space-y-6 max-w-2xl mx-auto">
          {/* Email Primary Pill */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/70">
            <div className="flex items-center gap-3.5 text-left">
              <div className="p-3 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100 shadow-xs">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block font-bold">
                  Direct Email
                </span>
                <a
                  href={`mailto:${personalData.email}`}
                  className="text-sm sm:text-base font-semibold text-slate-900 hover:text-indigo-600 transition-colors"
                >
                  {personalData.email}
                </a>
              </div>
            </div>

            {/* Action Buttons: Copy & Mailto with Magnetic Physics */}
            <div className="flex items-center gap-2.5 w-full sm:w-auto">
              <MagneticButton
                onClick={handleCopyEmail}
                cursorText="Copy"
                className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-200 text-xs font-mono shadow-xs gap-1.5"
                ariaLabel="Copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </MagneticButton>

              <MagneticButton
                href={`mailto:${personalData.email}?subject=Opportunity%20Discussion%20with%20Hima%20Sajeesh%20Kumar`}
                cursorText="Mail"
                className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shadow-md shadow-indigo-600/20 gap-1.5 active:scale-95"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Open Mail</span>
              </MagneticButton>
            </div>
          </div>

          {/* Location & Response Note */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-500 font-mono text-left pt-2">
            <div className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/60 flex items-center gap-2.5">
              <MapPin className="w-4 h-4 text-indigo-600" />
              <span>Bengaluru, Karnataka, India</span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/60 flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Typical Response Time: &lt; 24 Hours</span>
            </div>
          </div>

          {/* Verified Social Profiles Strip */}
          <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-center gap-3.5">
            <a
              href={personalData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-indigo-600 border border-slate-200/80 text-xs font-medium transition-all shadow-xs"
            >
              <LinkedinIcon className="w-4 h-4 text-indigo-600" />
              <span>LinkedIn Profile</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>

            <a
              href={personalData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-200/80 text-xs font-medium transition-all shadow-xs"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub Repositories</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>

            {personalData.socials.leetcode && (
              <a
                href={personalData.socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-amber-600 border border-slate-200/80 text-xs font-medium transition-all shadow-xs"
              >
                <LeetCodeIcon className="w-4 h-4 text-amber-500" />
                <span>LeetCode</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
