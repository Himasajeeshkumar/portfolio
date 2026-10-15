import { useState } from 'react';
import { Mail, Copy, Check, ExternalLink, Send, Sparkles, MapPin, Phone } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './SocialIcons';
import { personalData } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative bg-[#07080c] overflow-hidden">
      {/* Visual atmospheric accents */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-gradient-to-t from-brand-cyan/10 via-brand-indigo/10 to-transparent blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/2 right-10 w-72 h-72 bg-brand-violet/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        {/* Header Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-mono mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Let&apos;s Build Together</span>
        </div>

        {/* Main Invitation Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Ready to Collaborate on <br className="hidden sm:inline" />
          <span className="text-gradient-cyan">Software &amp; AI Systems?</span>
        </h2>

        <p className="text-sm sm:text-base text-slate-300 mt-4 max-w-xl mx-auto leading-relaxed">
          I am actively seeking <strong className="text-white font-semibold">Software Engineering</strong> and <strong className="text-white font-semibold">AI/ML</strong> internship opportunities and entry-level technical roles. Whether you have an open position, a project discussion, or would like to review my code, I&apos;d love to connect.
        </p>

        {/* Contact Action Card */}
        <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-[#0d101a]/90 backdrop-blur-xl border border-white/10 shadow-2xl space-y-6 max-w-2xl mx-auto">
          {/* Email Primary Pill */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-[#131625] border border-white/10">
            <div className="flex items-center gap-3 text-left">
              <div className="p-3 rounded-xl bg-brand-cyan/15 text-brand-cyan border border-brand-cyan/30">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                  Direct Email
                </span>
                <a
                  href={`mailto:${personalData.email}`}
                  className="text-sm sm:text-base font-semibold text-white hover:text-brand-cyan transition-colors"
                >
                  {personalData.email}
                </a>
              </div>
            </div>

            {/* Action Buttons: Copy & Mailto */}
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={handleCopyEmail}
                className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 text-xs font-mono transition-all"
                aria-label="Copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${personalData.email}?subject=Opportunity%20Discussion%20with%20Hima%20Sajeesh%20Kumar`}
                className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-brand-cyan hover:bg-cyan-300 text-[#090a0f] text-xs font-bold transition-all shadow-md shadow-brand-cyan/20 hover:scale-105 active:scale-95"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Open Mail</span>
              </a>
            </div>
          </div>

          {/* Location & Response Note */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-400 font-mono text-left pt-2">
            <div className="p-3 rounded-xl bg-[#111422] border border-white/5 flex items-center gap-2.5">
              <MapPin className="w-4 h-4 text-brand-blue" />
              <span>Bengaluru, Karnataka, India</span>
            </div>
            <div className="p-3 rounded-xl bg-[#111422] border border-white/5 flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Typical Response Time: &lt; 24 Hours</span>
            </div>
          </div>

          {/* Verified Social Profiles Strip */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={personalData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#131625] hover:bg-[#181d2f] text-slate-200 hover:text-brand-blue border border-white/10 hover:border-brand-blue/40 text-xs font-medium transition-all hover:scale-105"
            >
              <LinkedinIcon className="w-4 h-4 text-brand-blue" />
              <span>LinkedIn Profile</span>
              <ExternalLink className="w-3 h-3 text-slate-500" />
            </a>

            <a
              href={personalData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#131625] hover:bg-[#181d2f] text-slate-200 hover:text-white border border-white/10 hover:border-white/30 text-xs font-medium transition-all hover:scale-105"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub Repositories</span>
              <ExternalLink className="w-3 h-3 text-slate-500" />
            </a>

            {personalData.socials.leetcode && (
              <a
                href={personalData.socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#131625] hover:bg-[#181d2f] text-slate-200 hover:text-amber-400 border border-white/10 hover:border-amber-400/40 text-xs font-medium transition-all hover:scale-105"
              >
                <LeetCodeIcon className="w-4 h-4 text-amber-400" />
                <span>LeetCode</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
