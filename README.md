# Medical Website

A modern, responsive medical website built with **Vite**, **React**, and **Tailwind CSS v4**.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Vite](https://img.shields.io/badge/Vite-7.3.5-646CFF.svg)

## 🚀 Features

- **⚡ Lightning Fast:** Built with Vite for instant server start and hot module replacement.
- **🎨 Modern UI:** Styled with Tailwind CSS v4 for a sleek, responsive design.
- **🌙 Dark Mode:** Pre-configured theme support for light and dark modes.
- **📱 Fully Responsive:** Optimized for mobile, tablet, and desktop screens.

## 🛠️ Tech Stack

- **Framework:** React
- **Build Tool:** Vite
- **Styling:** Tailwind CSS (v4)
- **Language:** TypeScript

## 📋 Prerequisites

Before running this project, ensure you have installed:

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm (comes with Node.js)

## 🏃 Getting Started

Follow these steps to run the project locally:

### 1. Clone the repository

```bash
git clone https://github.com/inspiringdev/Medical.git
cd Medical
```

### 2. Install dependencies

Install the required npm packages:

```bash
npm install
```

*Note: This installs `autoprefixer` and other necessary dependencies.*

### 3. Start the development server

Run the following command to start the local server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

## 🏗️ Build for Production

To create an optimized production build:

```bash
npm run build
```

The built files will be generated in the `dist` directory.

## 📁 Project Structure

```text
medical/
├── public/           # Static assets (images, fonts)
├── src/              # Source code
│   ├── components/   # Reusable React components
│   ├── index.css     # Global styles & Tailwind imports
│   └── main.tsx      # Application entry point
├── index.html        # HTML template
├── vite.config.ts    # Vite configuration
└── package.json      # Project dependencies
```

## 🐛 Troubleshooting

### Issue: "Cannot find module 'autoprefixer'"
**Solution:** Install the missing dependency:
```bash
npm install -D autoprefixer
```

### Issue: "Failed to load PostCSS config"
**Solution:** Ensure `postcss.config.cjs` exists and `autoprefixer` is installed.

## 📄 License

This project is licensed under the MIT License.

---

**Made with ❤️ by InspiringDev**
