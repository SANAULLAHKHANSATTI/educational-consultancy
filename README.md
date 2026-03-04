# MBBS in China 2026 Admissions Website

A modern, professional, and conversion-focused educational consultancy website for promoting MBBS admissions in China for the 2026 intake.

## 🚀 Deployment Guide

This project is built with **React 19**, **Vite**, and **Tailwind CSS**. It is optimized for fast performance and easy hosting.

### Option 1: Deploy to Vercel (Recommended)

1.  **Push to GitHub:**
    *   Initialize a git repo: `git init`
    *   Add files: `git add .`
    *   Commit: `git commit -m "Initial commit"`
    *   Push to a new repository on your GitHub account.
2.  **Connect to Vercel:**
    *   Go to [vercel.com](https://vercel.com).
    *   Click **"Add New"** > **"Project"**.
    *   Import your GitHub repository.
    *   Vercel will automatically detect Vite. Click **"Deploy"**.
3.  **Custom Domain:**
    *   Once deployed, go to **Settings > Domains** to add your own domain (e.g., `www.yourconsultancy.pk`).

### Option 2: Deploy to Netlify

1.  **Drag & Drop:**
    *   Run `npm run build` in your terminal.
    *   This will create a `dist` folder.
    *   Drag the `dist` folder into the [Netlify Drop](https://app.netlify.com/drop) area.
2.  **GitHub Integration:**
    *   Similar to Vercel, you can connect your GitHub repo for automatic deployments whenever you push code.

### Option 3: GitHub Pages

1.  Install the gh-pages package: `npm install gh-pages --save-dev`
2.  Add `homepage` to `package.json`: `"homepage": "https://yourusername.github.io/your-repo-name"`
3.  Add scripts:
    *   `"predeploy": "npm run build"`
    *   `"deploy": "gh-pages -d dist"`
4.  Run `npm run deploy`.

## 🛠️ Tech Stack

*   **Frontend:** React 19
*   **Styling:** Tailwind CSS 4
*   **Icons:** Lucide React
*   **Animations:** Motion (Framer Motion)
*   **Build Tool:** Vite

## 📁 Project Structure

*   `src/App.tsx`: Main website content and sections.
*   `src/index.css`: Global styles and Tailwind configuration.
*   `public/`: Static assets (images, favicon).

## 📞 Support

For any issues or updates, contact your development team.
