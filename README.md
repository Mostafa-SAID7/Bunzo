<div align="center">

# 🍳 Bunzo - Modern Recipe Platform

### Discover, Share, and Create Amazing Recipes

[![Live Demo](https://img.shields.io/badge/demo-live-success?style=for-the-badge&logo=vercel)](https://bunzo-vert.vercel.app)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.3-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev)
[![Tailwind](https://img.shields.io/badge/Tailwind-4.1-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)](LICENSE)

[🌐 Live Demo](#) • [📖 Documentation](./docs) • [🐛 Report Bug](https://github.com/Mostafa-SAID7/Bunzo/issues) • [✨ Request Feature](https://github.com/Mostafa-SAID7/Bunzo/issues)

</div>

---

## 🎯 About Bunzo

Bunzo is a modern food recipe platform that brings together food enthusiasts, home cooks, and culinary experts. Built with cutting-edge web technologies, it offers a seamless experience for discovering, sharing, and managing recipes and cooking blogs.

### ✨ Key Features

- 🍳 **Recipe Discovery** - Browse recipes with beautiful imagery and detailed instructions
- 📝 **Blog Platform** - Read and share cooking tips, techniques, and culinary stories
- 🔍 **Smart Search** - Filter recipes by category, cooking time, and favorites
- 👨‍💼 **Admin Dashboard** - Full CRUD operations for recipes and blogs
- 📱 **Mobile Responsive** - Perfect experience on all devices
- 🎨 **Beautiful Animations** - Smooth scroll animations with AOS
- ⚡ **Lightning Fast** - Optimized performance with Vite
- 📝 **Rich Text Editor** - Draft.js powered blog editor with WYSIWYG
- 🎠 **Interactive Sliders** - Swiper.js for engaging content presentation

---

## 🛠️ Technologies Used

<div align="center">

| Category | Technologies |
|----------|-------------|
| **Frontend** | React 18, TypeScript 5.7, Vite 6.3 |
| **Styling** | Tailwind CSS 4.1, Headless UI |
| **Routing** | React Router v7 |
| **Editor** | Draft.js, React Draft WYSIWYG |
| **Animation** | AOS (Animate On Scroll) |
| **Carousel** | Swiper.js 11 |
| **Icons** | Heroicons |
| **Backend** | FastAPI (Python) |
| **Database** | SQLite |
| **Deployment** | Vercel |

</div>

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ and npm - [Install with nvm](https://github.com/nvm-sh/nvm)
- **Git** - [Download here](https://git-scm.com/)
- **Python** 3.9+ (for backend) - [Download here](https://www.python.org/)

### Quick Start

```bash
# Clone the repository
git clone https://github.com/Mostafa-SAID7/Bunzo.git

# Navigate to project
cd Bunzo

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` to see the app running!

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build optimized production bundle |
| `npm run lint` | Run ESLint for code quality |
| `npm run preview` | Preview production build locally |

---

## 🎨 Features

### User Features
- 🔍 Browse and search recipes by category, time, and difficulty
- 📖 Read detailed recipe instructions with ingredients list
- 📝 Explore cooking blogs and culinary articles
- ⭐ Mark recipes as favorites
- 📱 Responsive design for all devices
- 🎬 Smooth scroll animations

### Admin Features
- ➕ Add new recipes with images and details
- ✏️ Edit existing recipes and blogs
- 🗑️ Delete recipes and blogs
- 📝 Rich text editor for blog content
- 🔐 Role-based access control
- 📊 Content management dashboard

### Technical Features
- ⚡ **Lightning Fast** - Vite for instant HMR and optimized builds
- 🎯 **Type Safe** - Full TypeScript coverage
- 🎨 **Modern UI** - Tailwind CSS with Headless UI components
- 🔄 **Client-Side Routing** - React Router v7
- 📝 **Rich Text Editing** - Draft.js with WYSIWYG editor
- 🎠 **Interactive Carousels** - Swiper.js integration
- 🎭 **Smooth Animations** - AOS scroll animations
- 🌐 **API Integration** - FastAPI backend with SQLite

---

## 📁 Project Structure

```
Bunzo/
├── src/
│   ├── assets/          # Images, icons, and static files
│   ├── components/      # Reusable React components
│   ├── hooks/           # Custom React hooks
│   ├── pages/           # Page components (Home, RecipeDetail, Blog, Admin)
│   ├── styles/          # Global CSS and Tailwind styles
│   ├── utils/           # Utility functions and TypeScript types
│   ├── GlobalContext.tsx # Global state management
│   ├── App.tsx          # Main app component
│   └── main.tsx         # Application entry point
├── public/              # Static assets
├── docs/                # Documentation
├── .github/             # GitHub workflows and configuration
├── package.json         # Dependencies and scripts
├── vite.config.ts       # Vite configuration
├── tsconfig.json        # TypeScript configuration
└── vercel.json          # Vercel deployment configuration
```

---

## 🔒 Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_BASE_URL=https://bunzo-backend.vercel.app
```

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Mostafa-SAID7/Bunzo)

1. Click the button above
2. Sign in to Vercel
3. Deploy with one click

### Manual Deployment

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. 🍴 **Fork the repository**
2. 🌿 **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. 💾 **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. 📤 **Push to the branch** (`git push origin feature/amazing-feature`)
5. 🎉 **Open a Pull Request**

Please read our [Contributing Guidelines](./docs/CONTRIBUTING.md) for details.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🌟 Show Your Support

If you find this project useful, please consider:

- ⭐ **Starring the repository**
- 🍴 **Forking it for your own projects**
- 📢 **Sharing it with others**
- 🐛 **Reporting bugs or suggesting features**

---

## 📞 Contact & Links

- **Repository**: [github.com/Mostafa-SAID7/Bunzo](https://github.com/Mostafa-SAID7/Bunzo)
- **Issues**: [Report a bug or request a feature](https://github.com/Mostafa-SAID7/Bunzo/issues)
- **Author**: [Mostafa-SAID7](https://github.com/Mostafa-SAID7)

---

## 🙏 Acknowledgments

- [React](https://react.dev) - UI library
- [Vite](https://vitejs.dev) - Build tool
- [Tailwind CSS](https://tailwindcss.com) - Styling
- [Draft.js](https://draftjs.org) - Rich text editor
- [Swiper](https://swiperjs.com) - Carousel
- [AOS](https://michalsnik.github.io/aos/) - Animations
- [Vercel](https://vercel.com) - Hosting

---

<div align="center">

**Made with ❤️ by [Mostafa-SAID7](https://github.com/Mostafa-SAID7)**

⭐ Star this repo if you find it useful!

</div>
