import { ArrowUp, Mail } from 'lucide-react';
import { personalData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-slate-200/80 py-12 px-4 sm:px-6 relative z-10 text-xs text-slate-500 font-mono">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Identity */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-mono font-bold text-xs text-white shadow-xs">
            HK
          </div>
          <div>
            <div className="text-sm font-bold text-slate-900 font-sans">
              {personalData.name}
            </div>
            <p className="text-[11px] text-slate-500">
              Software Engineer &bull; AI/ML Developer &bull; Bengaluru, India
            </p>
          </div>
        </div>

        {/* Tech Stack Note */}
        <div className="text-center text-slate-500">
          <span>Engineered with React, Vite, and Tailwind CSS.</span>
          <div className="text-[10px] text-slate-400 mt-0.5">
            Verified B.Tech (AI &amp; ML) Credentials &bull; &copy; {new Date().getFullYear()}
          </div>
        </div>

        {/* Actions: Socials & Back to Top */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <a
              href={personalData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-colors border border-slate-200/80"
              aria-label="GitHub"
            >
              <GithubIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href={personalData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-indigo-600 transition-colors border border-slate-200/80"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href={`mailto:${personalData.email}`}
              className="p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-indigo-600 transition-colors border border-slate-200/80"
              aria-label="Email"
            >
              <Mail className="w-3.5 h-3.5" />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-indigo-600 border border-slate-200/80 transition-all font-semibold shadow-2xs hover:scale-105 active:scale-95"
            aria-label="Scroll to top of page"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
