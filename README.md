# Data Science & ML Portfolio

A modern, responsive portfolio website showcasing data science projects and technical articles. Built with React, TypeScript, and Supabase, featuring a dynamic admin dashboard for content management.

## 🌟 Features

- **Dynamic Project Gallery**: Interactive showcase of data science and ML projects
- **Technical Blog**: Rich text content with TinyMCE editor integration
- **Admin Dashboard**: Secure content management system
- **Dark Theme**: Modern UI with purple accents
- **Responsive Design**: Mobile-first approach
- **Performance Optimized**: Code splitting, lazy loading, and asset compression
- **SEO Ready**: Meta tags and optimized content structure

## 🛠️ Tech Stack

### Core Technologies
- TypeScript
- React 18
- Vite
- Supabase

### Key Libraries
- Framer Motion (animations)
- React Query (data fetching)
- React Hook Form (form handling)
- TinyMCE (rich text editing)
- DOMPurify (content sanitization)
- Tailwind CSS (styling)

### Development & Build Tools
- ESLint
- PostCSS
- Terser
- Compression (Brotli & Gzip)

## 📦 Project Structure

```plain text
portfolio/
├── src/
│   ├── components/     # Reusable UI components
│   │   ├── admin/     # Admin dashboard components
│   │   ├── articles/  # Article-related components
│   │   └── projects/  # Project-related components
│   ├── hooks/         # Custom React hooks
│   ├── lib/          # Core utilities and configurations
│   ├── pages/        # Page components
│   ├── types/        # TypeScript definitions
│   └── utils/        # Helper functions
├── public/           # Static assets
└── supabase/         # Database migrations and configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v20.x or higher)
- npm (v9.x or higher)

### Environment Variables
Create a `.env` file with:
```env
VITE_ADMIN_EMAIL=admin@example.com
VITE_ADMIN_PASSWORD=your-secure-password
```

### Installation

```bash
# Clone the repository
git clone https://github.com/CollinsNyatundo/V9.git

# Navigate to project directory
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` to view the application.

## 🔧 Configuration

The project uses several configuration files:

- `vite.config.ts` - Vite build configuration
- `tailwind.config.js` - Tailwind CSS customization
- `vercel.json` - Vercel deployment configuration
- `.env` - Environment variables (create from .env.example)

## 🚀 Deployment

### Vercel Deployment
1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 20.x
3. Environment Variables:
   - Add all required environment variables in Vercel's dashboard
   - Ensure variables are set for all environments (Production, Preview, Development)

### Manual Deployment
```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## ⚡ Performance Optimizations

- Code splitting via dynamic imports
- Image lazy loading and optimization
- Asset compression (Brotli & Gzip)
- Efficient state management with React Query
- Optimized bundle chunking
- Rich text content sanitization

## 🔒 Security Features

- DOMPurify for HTML sanitization
- Secure content management with Supabase RLS
- Protected admin routes
- Content security policies
- XSS protection

## 🧪 Code Quality

- TypeScript for type safety
- ESLint for code linting
- Proper error handling
- Comprehensive component documentation
- Consistent code formatting

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- React ecosystem
- Tailwind CSS community
- Supabase team
- Vercel platform
- TinyMCE team

---

Built with ❤️ by [Collins Nyagaka](https://github.com/CollinsNyatundo)