# Hima Sajeesh Kumar — Personal Portfolio Website

> **Software Engineer | AI/ML Developer**  
> B.Tech in Computer Science and Engineering (AI & ML), JAIN (Deemed-to-be University) — CGPA: 8.35/10  
> Live Platform: [futuretwin-ai-1.onrender.com](https://futuretwin-ai-1.onrender.com/)  
> GitHub: [github.com/Himasajeeshkumar](https://github.com/Himasajeeshkumar) | LinkedIn: [linkedin.com/in/himasajeeshkumar](https://www.linkedin.com/in/himasajeeshkumar/)

---

## 🚀 Overview

A production-ready personal developer portfolio built from scratch with **React 19 + Vite**, **Tailwind CSS**, and **Framer Motion**. Designed as a high-end, futuristic digital engineering workspace combining an interactive code and architecture environment with recruiter-friendly presentation.

### Key Highlights
- **Dual-Track Career Focus**: Built-in resume selector offering both **Software Engineering** and **AI/ML Engineering** paths.
- **Interactive Code & Architecture Panel**: Live multi-tab code editor with deterministic simulation for Sentence Transformers, FAISS semantic search, and Bahdanau attention.
- **Centralized Data Source**: All personal information, projects, skills, education, and resume paths are managed in a single file (`src/data/portfolioData.js`).
- **Resilient Media Architecture**: Automatic fallback system—if screenshots are missing, custom SVG/CSS architectural diagrams render seamlessly with zero broken icons.
- **Accessible & Responsive**: Keyboard navigable, touch-friendly, dark-mode optimized, and respects `prefers-reduced-motion`.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 3.4](https://tailwindcss.com/) with custom dark tokens & glassmorphism
- **Icons**: [Lucide React](https://lucide.dev/) + Custom SVG Vector Components
- **Animations**: CSS3 hardware-accelerated transforms & Canvas Confetti
- **Deployment**: Optimized for [Vercel](https://vercel.com/) and [GitHub Pages](https://pages.github.com/)

---

## 📁 Project Directory Structure

```text
portfolio/
├── public/
│   ├── favicon.svg                          # Custom monogram SVG favicon
│   ├── images/
│   │   ├── hima.png                         # Verified profile photograph
│   │   ├── profile.png                      # Secondary profile alias
│   │   ├── futuretwin-home.png              # Optional project screenshot
│   │   ├── ai-code-assistant.png            # Optional project screenshot
│   │   └── visual-sequence-decoder.png      # Optional project screenshot
│   └── resumes/
│       ├── software-engineer-resume.pdf     # Software Engineering PDF resume
│       └── aiml-engineer-resume.pdf         # AI/ML Engineering PDF resume
├── src/
│   ├── components/
│   │   ├── About.jsx                        # Bio, education, and engineering pillars
│   │   ├── Contact.jsx                      # Working mailto, copy email, socials
│   │   ├── CustomCursor.jsx                 # Smooth cursor dot, glow, & trails
│   │   ├── ExperienceTimeline.jsx           # Internships, B.Tech degree, certifications
│   │   ├── Footer.jsx                       # Closing credentials & back-to-top
│   │   ├── Hero.jsx                         # Opening headline, CTAs & code panel
│   │   ├── InteractiveCodePanel.jsx         # Code editor & simulated pipeline runner
│   │   ├── Navbar.jsx                       # Floating glass dock with mobile menu
│   │   ├── ProjectCard.jsx                  # Project card with architecture expander
│   │   ├── ProjectGallery.jsx               # Categorized project showcase
│   │   ├── ProjectIllustration.jsx          # SVG/CSS architectural fallback diagrams
│   │   ├── ResumeModal.jsx                  # Dual-track modal with confetti trigger
│   │   ├── ScrollProgress.jsx               # Gradient top scroll bar
│   │   └── SocialIcons.jsx                  # Pixel-perfect SVG vector icons
│   ├── data/
│   │   └── portfolioData.js                 # Centralized configuration file
│   ├── App.jsx                              # Root application container
│   ├── index.css                            # Base styles, glassmorphism, utilities
│   └── main.jsx                             # React DOM entry point
├── index.html                               # SEO metadata, Open Graph, Google fonts
├── package.json                             # Dependencies & build scripts
├── tailwind.config.js                       # Color tokens, fonts, and animations
└── vite.config.js                           # Vite bundler configuration
```

---

## ⚡ Quick Start

### 1. Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### 2. Installation
```bash
# Clone the repository
git clone https://github.com/Himasajeeshkumar/portfolio.git

# Navigate into the project folder
cd portfolio

# Install dependencies
npm install
```

### 3. Local Development
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Production Build
```bash
npm run build
```
The optimized static build will be generated in the `dist/` directory.

To preview the production bundle locally:
```bash
npm run preview
```

---

## ⚙️ Customization & Asset Management

### 1. Editing Personal Details, Projects, and Skills
All portfolio content is centralized in **`src/data/portfolioData.js`**. You can update:
- Headline, bio, and contact information
- Projects: Add new projects, update GitHub URLs, live URLs, and technical highlights
- Skills: Add new languages, libraries, or developer tools
- Experience & Certifications: Update roles, dates, and achievements

### 2. Adding / Updating Photographs
- Place your primary portrait photograph at **`public/images/hima.png`**.
- The component automatically displays the photo with an elegant circuit-styled frame.
- If the file is missing or renamed, a decorative SVG monogram badge is displayed with no broken image icon.

### 3. Adding Project Screenshots
When you have real screenshots from running applications, place them in:
- `public/images/futuretwin-home.png`
- `public/images/futuretwin-analysis.png`
- `public/images/ai-code-assistant.png`
- `public/images/visual-sequence-decoder.png`

*Note: If no image file is found, the built-in SVG architectural illustration will automatically display.*

### 4. Updating PDF Resumes
Both resumes are pre-configured to download from the `public/resumes/` folder:
- **Software Engineering Resume**: `public/resumes/software-engineer-resume.pdf`
- **AI/ML Engineering Resume**: `public/resumes/aiml-engineer-resume.pdf`

Simply replace these files with your latest PDFs and the download buttons will serve them immediately.

---

## 🌐 Deployment Instructions

### Deploy to GitHub
1. Initialize git in the repository:
   ```bash
   git init
   git add .
   git commit -m "feat: initial release of Hima Sajeesh Kumar portfolio"
   ```
2. Link your remote GitHub repository:
   ```bash
   git branch -M main
   git remote add origin https://github.com/Himasajeeshkumar/portfolio.git
   git push -u origin main
   ```

### Deploy to Vercel (Recommended)
1. Go to [vercel.com](https://vercel.com/) and log in with your GitHub account.
2. Click **Add New Project** and select your `portfolio` repository.
3. Vercel will automatically detect **Vite**:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Click **Deploy**. Your portfolio will be live with free global CDN and automatic HTTPS!

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
