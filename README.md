# Portfolio Project

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern and beautiful UI design
- 📱 Fully responsive layout
- 🌙 Dark mode support
- ⚡ Fast and optimized with Next.js
- 🎭 Smooth animations with Framer Motion
- ♿ Accessible and SEO-friendly

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/
│   ├── Navigation.tsx  # Navigation bar
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Skills.tsx      # Skills section
│   ├── Projects.tsx    # Projects section
│   └── Contact.tsx     # Contact section
└── public/             # Static assets
```

## Customization

1. Update your personal information in each component
2. Add your projects in `components/Projects.tsx`
3. Update your skills in `components/Skills.tsx`
4. Add your social media links in `components/Contact.tsx`
5. Customize colors in `tailwind.config.ts`

## Build for Production

```bash
npm run build
npm start
```

## Deploy

You can deploy this portfolio to Vercel, Netlify, or any other hosting platform that supports Next.js.

## License

MIT

