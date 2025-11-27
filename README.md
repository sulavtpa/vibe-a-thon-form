# Vibe-a-thon 🎮✨

A tech-themed, chibi-style registration form website for the Vibe-a-thon bootcamp event. Built with Next.js, shadcn/ui, and Supabase.

![Vibe-a-thon](https://img.shields.io/badge/Vibe--a--thon-Tech%20Bootcamp-2B9A9A?style=for-the-badge)

## 🎨 Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Vibe Red | `#A7372D` | Accents, CTAs |
| Dark Red | `#802B24` | Hover states |
| Teal | `#2B9A9A` | Primary brand color |
| Cream | `#F6EBD7` | Background |
| Orange | `#D85E41` | Highlights |
| Maroon | `#5E1C17` | Dark accents |
| Mint | `#8ED9D2` | Secondary color |
| Blush | `#E3B7A7` | Soft accents |
| Dark | `#2C2C2C` | Text |
| Light | `#EFE8DE` | Subtle backgrounds |

## 🚀 Features

- **3-Section Multi-Step Form**
  - Section 1: Personal information & event details
  - Section 2: Tools & expertise assessment
  - Section 3: Analytical & thinking questions

- **Chibi-Style Tech Theme**
  - Animated floating elements
  - Cute mascot placeholders (add your own!)
  - Circuit pattern backgrounds

- **Accessibility First**
  - Screen reader support
  - ARIA labels & descriptions
  - Keyboard navigation
  - Skip links

- **Modern Tech Stack**
  - Next.js 16 with App Router
  - Tailwind CSS 4
  - shadcn/ui components
  - Supabase for database

## 📦 Installation

1. **Clone and install dependencies:**
   ```bash
   cd vibe-a-thon
   npm install
   ```

2. **Set up Supabase:**
   - Create a new project at [supabase.com](https://supabase.com)
   - Go to SQL Editor and run the schema from `supabase/schema.sql`
   - Copy your project URL and anon key

3. **Configure environment variables:**
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` with your Supabase credentials:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000)**

## 🖼️ Adding Mascots

Place your chibi mascot images in the `public/` folder:
- `mascot-1.png` - Top left mascot
- `mascot-2.png` - Top right mascot
- `mascot-3.png` - Bottom left mascot
- `mascot-4.png` - Bottom right mascot

Then update the `ChibiMascot` components in `app/page.tsx` with the image paths.

## 🌐 Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and import your repository
3. Add environment variables in Vercel:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## 📁 Project Structure

```
vibe-a-thon/
├── app/
│   ├── globals.css       # Global styles & color palette
│   ├── layout.tsx        # Root layout with metadata
│   └── page.tsx          # Main registration page
├── components/
│   ├── ui/               # shadcn/ui components
│   ├── form-sections/    # Multi-step form sections
│   ├── chibi-mascot.tsx  # Mascot & decorations
│   ├── progress-steps.tsx # Step progress indicator
│   └── registration-form.tsx # Main form logic
├── lib/
│   ├── supabase.ts       # Supabase client & types
│   └── utils.ts          # Utility functions
└── supabase/
    └── schema.sql        # Database schema
```

## 🔧 Development

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## 📋 Form Validation

The form includes comprehensive validation:
- Required field checking
- Email format validation
- Phone number validation
- Minimum character counts for text areas
- Real-time error display with ARIA announcements

## ♿ Accessibility Features

- Skip links for keyboard navigation
- ARIA labels and descriptions
- Role and live region announcements
- Focus management between steps
- Color contrast compliance
- Screen reader friendly form structure

## 📄 License

MIT License - feel free to use this for your own events!

---

Made with ❤️ for the Vibe-a-thon community
