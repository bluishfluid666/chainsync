# ChainSync Website

A professional, modern website for ChainSync—an enterprise AI security company. The site showcases the company's solutions, technology, mission, and provides contact information.

## 🌟 Features

- **Responsive Design**: Mobile-first design that works on all devices
- **Modern UI**: Clean, professional interface with gradient accents and smooth interactions
- **Multi-Page**: Five main pages covering all essential information
- **Fast Performance**: Built with React and Vite for optimal speed
- **SEO-Ready**: Semantic HTML structure for search engine optimization
- **Accessibility**: WCAG compliant with proper contrast and keyboard navigation

## 📄 Pages

1. **Home** - Value proposition, key features, and call-to-action
2. **Solutions** - Detailed overview of Model Protection, Data Guardrails, and Compliance & Risk Monitoring
3. **Technology** - System architecture, core components, and technical highlights
4. **About** - Company mission, values, story, and differentiators
5. **Contact** - Contact form, company information, and FAQ

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- pnpm 10+

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The website will be available at `http://localhost:3000`

## 🏗️ Build & Deploy

### Build for Production

```bash
pnpm build
```

This creates a production-ready build in the `dist/public` directory.

### Deploy to GitHub Pages

See [GITHUB_PAGES_DEPLOYMENT.md](./GITHUB_PAGES_DEPLOYMENT.md) for detailed deployment instructions.

Quick steps:
1. Create a GitHub repository
2. Push your code to GitHub
3. Enable GitHub Pages in repository settings
4. Your site will be live at `https://username.github.io/chainsync-website`

## 📁 Project Structure

```
chainsync-website/
├── client/
│   ├── public/              # Static assets
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   ├── pages/           # Page components
│   │   │   ├── Home.tsx
│   │   │   ├── Solutions.tsx
│   │   │   ├── Technology.tsx
│   │   │   ├── About.tsx
│   │   │   └── Contact.tsx
│   │   ├── App.tsx          # Main app component with routing
│   │   ├── main.tsx         # React entry point
│   │   └── index.css        # Global styles
│   └── index.html           # HTML template
├── vite.config.ts           # Vite configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
├── package.json             # Dependencies and scripts
└── README.md                # This file
```

## 🎨 Customization

### Colors & Theme

Edit `client/src/index.css` to customize the color palette. The site uses CSS variables for theming:

```css
:root {
  --primary: var(--color-blue-700);
  --accent: oklch(0.967 0.001 286.375);
  /* ... more variables */
}
```

### Content

Update content directly in the page components:
- `client/src/pages/Home.tsx` - Homepage content
- `client/src/pages/Solutions.tsx` - Solutions details
- `client/src/pages/Technology.tsx` - Technology information
- `client/src/pages/About.tsx` - Company information
- `client/src/pages/Contact.tsx` - Contact information

### Fonts

Fonts are imported in `client/src/index.css`. Currently using Inter from Google Fonts. To change:

```css
@import url('https://fonts.googleapis.com/css2?family=YOUR_FONT:wght@400;500;600;700;800&display=swap');
```

## 🔧 Available Scripts

```bash
# Development
pnpm dev          # Start dev server
pnpm preview      # Preview production build

# Production
pnpm build        # Build for production
pnpm start        # Start production server

# Code Quality
pnpm check        # TypeScript type checking
pnpm format       # Format code with Prettier
```

## 📱 Responsive Breakpoints

The site is optimized for:
- Mobile: 320px - 640px
- Tablet: 641px - 1024px
- Desktop: 1025px+

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Color contrast compliance
- Focus indicators on interactive elements

## 🔐 Security

- No external tracking or analytics
- All data stays on the client
- Contact form is client-side (integrate with backend for production)
- Regular dependency updates

## 📝 License

MIT License - feel free to use this template for your projects

## 🤝 Support

For issues or questions about the website:
- Email: hello@chainsync.ai
- LinkedIn: [ChainSync](https://linkedin.com)
- GitHub: [ChainSync](https://github.com)

## 🚀 Next Steps

1. Customize the content with your company information
2. Add your logo to `client/public/`
3. Update social media links in the Footer component
4. Integrate the contact form with a backend service
5. Deploy to GitHub Pages following the deployment guide
6. Set up a custom domain (optional)

---

Built with ❤️ using React, Vite, and Tailwind CSS

