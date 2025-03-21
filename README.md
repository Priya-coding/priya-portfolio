# Priya Rani's  - Portfolio

## Live Demo
Your portfolio is hosted on **Vercel** and automatically deploys on every push to `main`.

🔗 **Live Site:** [https://priya-portfolio.vercel.app](https://priya-portfolio.vercel.app)

---

##  Project Overview
This is a **modern, responsive portfolio website** built with **Next.js**, **Tailwind CSS**, and **Vercel** deployment. The site showcases **skills, experience, certifications, and projects** with an interactive and clean UI.

---

## Tech Stack
- **Frontend:** Next.js, React, Tailwind CSS
- **Deployment:** Vercel (CI/CD enabled)
- **Version Control:** GitHub
- **Icons & Animations:** Framer Motion, React Icons

---

## 📂 Project Structure
```bash
├── components/       # Reusable UI components (Hero, AboutMe, Skills, Certifications, WorkExperience)
├── pages/            # Main pages (Index.tsx, About.tsx, Projects.tsx, Skills.tsx, Cert.tsx)
├── public/images/    # Static assets (Icons, Profile Photo, Certifications, Logos)
├── styles/           # Global styles (Tailwind CSS)
├── .github/          # GitHub Actions (if configured for CI/CD)
└── README.md         # Project Documentation (this file)
```

---

## Features
**Dynamic Skills Section** - Grid-based layout with icons & tooltips
**Interactive Work Experience** - Timeline view with hover animations
**Certifications Section** - Chevron-style list with hover effects
**Automatic Deployment** - Merges to `main` auto-deploy to Vercel
**Modern UI** - Dark mode, smooth animations, and fully responsive

---

## Installation & Local Setup
Clone the repository and install dependencies:
```sh
git clone https://github.com/your-username/your-portfolio.git
cd priya-portfolio
npm install
```
Run the development server:
```sh
npm run dev
```
Visit **`http://localhost:3000`** to preview the site.

---

## Deployment to Vercel (Auto Deploy on Merge to Main)

### **Install Vercel CLI**
```sh
npm install -g vercel
```
### **Login to Vercel**
```sh
vercel login
```
Follow the authentication steps.

### **Connect to Vercel & Deploy**
Navigate to the project folder and run:
```sh
vercel
```
Select:
- "**Link to existing project**" if already created in Vercel.
- Otherwise, create a **new project**.

### **Enable GitHub Auto-Deploy**
1. Go to **Vercel Dashboard → Your Project → Settings → Git**.
2. Connect your **GitHub repo** (if not already linked).
3. Set **Production Branch** to `main`.
4. Enable **"Automatically deploy on push"**.

### **Push Changes & Auto Deploy**
Commit and push your code:
```sh
git add .
git commit -m "Updated portfolio"
git push origin main
```
Vercel will detect the change and deploy automatically.

---

## License
This project is open-source and free to use.

**Developed by:** Priya Rani 
