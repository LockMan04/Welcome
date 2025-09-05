# 🚀 THANH TOAN - AI Specialist Portfolio

<div align="center">
  <img src="./public/logo.png" alt="Portfolio Logo" width="100" height="100">
  
  **Modern, Responsive Portfolio Website**
  
  [![Build Status](https://github.com/LockMan04/Welcome/actions/workflows/deploy.yml/badge.svg)](https://github.com/LockMan04/Welcome/actions)
  [![GitHub Pages](https://img.shields.io/badge/Deployed%20on-GitHub%20Pages-blue)](https://lockman04.github.io/Welcome/)
  [![React](https://img.shields.io/badge/React-19.1.1-61DAFB?logo=react)](https://reactjs.org/)
  [![Vite](https://img.shields.io/badge/Vite-7.1.3-646CFF?logo=vite)](https://vitejs.dev/)
  [![TailwindCSS](https://img.shields.io/badge/Tailwind-4.1.12-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
</div>

## 📋 Table of Contents
- [🎯 About](#-about)
- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [🚀 Quick Start](#-quick-start)
- [📱 Responsive Design](#-responsive-design)
- [🌐 Deployment](#-deployment)
- [📁 Project Structure](#-project-structure)
- [🔧 Configuration](#-configuration)
- [📬 Contact](#-contact)
- [📄 License](#-license)

## 🎯 About

A modern, responsive portfolio website showcasing my journey as an AI specialist. Built with cutting-edge technologies to provide an exceptional user experience across all devices.

**Live Demo**: [https://lockman04.github.io/Welcome/](https://lockman04.github.io/Welcome/)

## ✨ Features

### 🎨 **Design & UX**
- ✅ **Modern UI/UX** with clean, minimalist design
- ✅ **Fully Responsive** - Mobile-first approach
- ✅ **Dark/Light Theme** support
- ✅ **Smooth Animations** powered by Framer Motion
- ✅ **Interactive Elements** with hover effects

### 🌍 **Internationalization**
- ✅ **Bilingual Support** (English/Vietnamese)
- ✅ **Dynamic Language Switching**
- ✅ **Context-based Translations**

### 📱 **User Experience**
- ✅ **Loading Screen** with progress indicator
- ✅ **Smooth Scrolling** navigation
- ✅ **Mobile-Optimized** interface
- ✅ **Fast Loading** times
- ✅ **SEO Optimized**

### 🚀 **Technical Features**
- ✅ **Dynamic CV Download** (Language-specific)
- ✅ **Contact Integration** (Email + GitHub)
- ✅ **Project Showcase** with detailed descriptions
- ✅ **Skills Visualization**
- ✅ **Auto-deployment** via GitHub Actions

## 🛠️ Tech Stack

### **Frontend**
- **React 19.1.1** - Latest React with modern hooks
- **Vite 7.1.3** - Ultra-fast build tool and dev server
- **TailwindCSS 4.1.12** - Utility-first CSS framework
- **Framer Motion 12.23.12** - Advanced animation library

### **Development**
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

### **Deployment**
- **GitHub Actions** - CI/CD pipeline
- **GitHub Pages** - Static site hosting
- **gh-pages** - Deployment automation

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Git**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/LockMan04/Welcome.git
   cd Welcome
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open browser**
   Navigate to `http://localhost:5173`

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run deploy` | Deploy to GitHub Pages |

## 📱 Responsive Design

### **Breakpoints**
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

### **Mobile Optimizations**
- Responsive navigation with mobile menu
- Touch-friendly interactive elements
- Optimized font sizes and spacing
- Mobile-specific animations
- Reduced motion for better performance

## 🌐 Deployment

### **Automatic Deployment**
The project uses GitHub Actions for automatic deployment:

1. **Push to main branch**
2. **GitHub Actions builds the project**
3. **Deploys to GitHub Pages automatically**

### **Manual Deployment**
```bash
npm run build
npm run deploy
```

### **Environment Configuration**
- **Development**: `http://localhost:5173`
- **Production**: `https://lockman04.github.io/Welcome/`

## 📁 Project Structure

```
Welcome/
├── 📁 public/                 # Static assets
│   ├── 🖼️ images/            # Project images
│   ├── 📄 LaThanhToan-CV-VI.pdf
│   ├── 📄 LaThanhToan-CV-EN.pdf
│   └── 🎨 logo.png
├── 📁 src/
│   ├── 📁 components/         # React components
│   │   ├── 🧩 Navbar.jsx     # Navigation
│   │   ├── 🏠 Hero.jsx       # Hero section
│   │   ├── 👤 About.jsx      # About section
│   │   ├── 💼 Projects.jsx   # Projects showcase
│   │   ├── 📮 Contact.jsx    # Contact section
│   │   └── 🎴 ProjectCard.jsx# Project cards
│   ├── 📁 contexts/           # React contexts
│   │   └── 🌐 LanguageContext.jsx
│   ├── 🎨 index.css          # Global styles
│   ├── ⚛️ App.jsx            # Main app component
│   └── 🚀 main.jsx           # Entry point
├── 📁 .github/workflows/     # GitHub Actions
├── ⚙️ vite.config.js         # Vite configuration
├── 🎨 tailwind.config.js     # Tailwind configuration
├── 📦 package.json           # Dependencies
└── 📖 README.md              # Documentation
```

## 🔧 Configuration

### **Vite Configuration**
```javascript
// vite.config.js
export default defineConfig({
  plugins: [react()],
  base: '/Welcome/',  // GitHub Pages base path
})
```

### **Tailwind Configuration**
```javascript
// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // Custom configurations
    },
  },
}
```

## 📬 Contact

### **Professional Contact**
- **Email**: [lathanhtoan01@gmail.com](mailto:lathanhtoan01@gmail.com)
- **GitHub**: [LockMan04](https://github.com/LockMan04)
- **Portfolio**: [Live Demo](https://lockman04.github.io/Welcome/)

### **Project Inquiries**
For questions about this project or collaboration opportunities, feel free to reach out via email or GitHub.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">
  <p>Built with ❤️ by <strong>Thanh Toan</strong></p>
  <p>🚀 <em>Aspiring AI Specialist</em> 🚀</p>
  
  **[⭐ Star this repo](https://github.com/LockMan04/Welcome)** if you found it helpful!
</div>
