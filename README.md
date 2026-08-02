# Sales Dashboard

An interactive sales analytics dashboard built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **Recharts**. The dashboard visualizes annual sales data for 2022, 2023, and 2024 using mock data modeled after Kaggle's popular Superstore Sales dataset.

## Features

### Core Requirements

- **Atomic Design Architecture** — Components are organized into three layers:
  - `components/atoms/` — Smallest building blocks (StatCard, YearSelector, ChartTypeToggle, SectionTitle)
  - `components/molecules/` — Combinations of atoms (DashboardHeader, DashboardStats, ThresholdFilter)
  - `components/organisms/` — Complex, feature-level components (BarChart, LineChart, PieChart, SalesChart, TopProductsTable)
- **Mock Sales Data** — Deterministic mock data for 2022, 2023, and 2024, including monthly sales, category breakdowns, regional performance, and top products. Data is generated with a seeded random generator so it stays consistent across renders.
- **Multiple Chart Types** — Each chart panel has toggle buttons to switch between **Bar**, **Line**, and **Pie** chart views using Recharts.
- **Dashboard Page** — A dedicated `/dashboard` route that assembles all components into a full analytics view. The home page (`/`) serves as a landing screen with a link to the dashboard.

### Enhancements

- **Custom Sales Threshold Filter** — An input field in the dashboard header lets users set a minimum sales threshold. All charts and the top products table update to only show data at or above the threshold.
- **API-Ready Architecture** — The data layer is abstracted in `lib/mock-data.ts`, making it straightforward to swap mock data with real API calls. The `salesData` object can be replaced with a fetch from a backend or external API.
- **Year Selector** — Toggle between 2022, 2023, and 2024 to view sales performance for each year.
- **Responsive Design** — The dashboard is fully responsive, from mobile to desktop, with a grid layout that adapts to screen size.

## Tech Stack

| Technology | Version |
|---|---|
| Next.js | 15.5.22 |
| React | 19.2.8 |
| TypeScript | 5.x |
| Tailwind CSS | 3.x |
| Recharts | 3.x |
| shadcn/ui | (Radix-based components) |
| Lucide React | (icons) |

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with Inter font
│   ├── page.tsx            # Landing page with link to dashboard
│   ├── globals.css         # Tailwind + CSS variables (theme)
│   └── dashboard/
│       └── page.tsx        # Main dashboard page (assembles all components)
├── components/
│   ├── atoms/              # Atomic design: atoms
│   │   ├── StatCard.tsx
│   │   ├── SectionTitle.tsx
│   │   ├── YearSelector.tsx
│   │   └── ChartTypeToggle.tsx
│   ├── molecules/          # Atomic design: molecules
│   │   ├── DashboardHeader.tsx
│   │   ├── DashboardStats.tsx
│   │   └── ThresholdFilter.tsx
│   ├── organisms/          # Atomic design: organisms
│   │   ├── BarChart.tsx
│   │   ├── LineChart.tsx
│   │   ├── PieChart.tsx
│   │   ├── SalesChart.tsx
│   │   └── TopProductsTable.tsx
│   └── ui/                 # shadcn/ui base components
├── lib/
│   ├── mock-data.ts        # Mock sales data generator (2022-2024)
│   ├── types.ts            # TypeScript type definitions
│   └── utils.ts            # cn() utility for class merging
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm (or yarn/pnpm)

### Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/<your-username>/sales-dashboard.git
   cd sales-dashboard
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open the app**

   Navigate to [http://localhost:3000](http://localhost:3000). Click "View Dashboard" to go to the analytics dashboard at `/dashboard`.

### Build for Production

```bash
npm run build
npm start
```

## What I Did

1. **Upgraded to Next.js 15** — Migrated the project from Next.js 13.5 to Next.js 15.5 with React 19, fixing type compatibility issues with Recharts v3.

2. **Applied Atomic Design Principles** — Structured all custom components into atoms, molecules, and organisms. Each component has a single responsibility and is composed into larger structures.

3. **Created Mock Sales Data** — Built a deterministic data generator in `lib/mock-data.ts` that produces realistic sales figures for three years (2022, 2023, 2024) with monthly trends, category breakdowns, regional data, and top products — modeled after Kaggle's Superstore Sales dataset structure.

4. **Built Multiple Chart Components** — Created separate BarChart, LineChart, and PieChart organism components using Recharts. A SalesChart wrapper component handles the toggle between chart types.

5. **Added Custom Threshold Filter** — Implemented a sales threshold input that filters all charts and the top products table in real time.

6. **Assembled the Dashboard** — Created a dedicated `/dashboard` route that composes all atomic components into a cohesive analytics view with stats cards, three chart panels, and a top products table.

7. **Wrote a README** — Documented the project structure, setup instructions, and what was accomplished.

## Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Build the production app |
| `npm start` | Start the production server |
| `npm run lint` | Run ESLint |

## License

This project is for educational purposes as part of a final assessment.
