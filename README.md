# Trackr

A personal finance tracker built with Next.js, TypeScript, and Tailwind CSS. Track your income, expenses, accounts, and goals, then get AI-powered insights on your spending from multiple free LLMs (GPT-OSS 120B, LLaMA 3.3 70B, Nemotron 3 Super 120B, Trinity Large, Step 3.5 Flash, GLM 4.5 Air, and Nemotron Nano 9B).

🔗 **Live demo:** [trackrph.vercel.app](https://trackrph.vercel.app)

---

## Features

- **Dashboard:** overview of balance, income, expenses, and spending breakdown
- **Transactions:** log, edit, and delete income and expense entries with categories
- **Accounts:** manage multiple accounts (bank, e-wallet, cash, credit) with type filtering
- **Goals:** set financial goals and track your progress
- **AI Insights:** multi-model analysis with smart fallback, plus monthly history
- **Profile:** editable display name synced across the app
- **Dark mode:** system-aware theme toggle
- **Responsive:** works on mobile and desktop

---

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Charts:** Recharts
- **Icons:** React Icons
- **AI:** OpenRouter API (multi-model with smart fallback)
- **Backend:** Supabase (Postgres + Auth)

---

## Project Structure

```
src/
├── app/
│   ├── (auth)/            # Login and register pages
│   ├── (dashboard)/       # Main app pages
│   │   ├── dashboard/
│   │   ├── transactions/
│   │   ├── account/
│   │   ├── goals/
│   │   ├── insights/      # AI Insights page
│   │   └── settings/
│   ├── api/
│   │   └── insights/      # OpenRouter API route
│   └── page.tsx           # Landing page
├── components/
│   ├── dashboard/         # Dashboard components
│   ├── modals/            # Add and edit modals
│   ├── skeletons/         # Loading skeletons
│   └── ui/                # Shared UI components
├── hooks/                 # Data hooks (auth, transactions, accounts, goals)
└── lib/                   # Types, Supabase client, nav items
```

---

## Getting Started

```bash
# Clone the repo
git clone https://github.com/lianxxxx/finance-tracker.git
cd finance-tracker

# Install dependencies
npm install

# Set up environment variables
cp .env.local.example .env.local
# then add your OpenRouter API key and Supabase credentials

# Run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Environment Variables

```env
OPENROUTER_API_KEY=your_openrouter_api_key
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Get a free OpenRouter key at [openrouter.ai](https://openrouter.ai), and grab your Supabase credentials from your project settings under **API**.

---

## Roadmap

- [ ] Filipino language toggle for AI Insights
