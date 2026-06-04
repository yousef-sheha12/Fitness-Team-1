# EliteSync - Fitness Training Platform

A modern fitness training platform built with React 19, featuring trainer discovery, session booking, and user profile management.

## Tech Stack

- **Framework:** React 19 with Vite 7
- **State Management:** Zustand + TanStack React Query
- **Routing:** React Router DOM v7
- **Styling:** Tailwind CSS v4 + shadcn/ui
- **Forms:** react-hook-form + Zod
- **Payments:** Stripe
- **HTTP:** Axios

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check code formatting |

## Project Structure

```
src/
├── components/       # UI Components
│   ├── Auth/         # Authentication components
│   ├── booking/      # Booking & payment components
│   ├── common/       # Shared components (Button, Logo, Sidebar, etc.)
│   ├── contact/      # Contact page components
│   ├── home/         # Homepage sections
│   ├── layout/       # Layout components (AuthLayout, ProfileLayout)
│   ├── trainer-profile/  # Trainer profile components
│   ├── TrainingPages/    # Trainer browsing & search
│   └── ui/           # shadcn/ui primitives
├── hooks/            # Custom React hooks
├── layouts/          # Page layouts (MainLayout)
├── lib/              # Utilities
│   ├── api/          # API client & modules
│   ├── constants/    # Constants & static data
│   ├── store/        # Zustand stores
│   └── utils/        # Helper functions
├── pages/            # Route pages
├── routes/           # Router configuration
└── store/            # Global stores (auth)
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `VITE_API_URL` | Backend API base URL |

## Features

- User authentication (email/password + Google OAuth)
- Browse and search trainers by specialization
- Trainer profiles with reviews and packages
- Session booking with multiple payment methods (Stripe, PayPal, Vodafone Cash)
- User profile with progress tracking
- Contact form and FAQ
