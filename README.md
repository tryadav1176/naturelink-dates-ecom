# 🌴 Naturelink Dates - E-Commerce Landing Page

A premium, high-converting e-commerce landing page built for **Naturelink Dates** using React 18, Vite, and Tailwind CSS. Single-origin dates hand-selected at peak ripeness, lab-tested for purity, and delivered fresh.

![Naturelink Dates Preview](./public/images/hero.jpg)

---

## ✨ Features & Architecture

- **Responsive Mobile-First Design**: Custom luxury aesthetic using brand color system (`date-brown`, `palm-green`, `honey-gold`, `salt`).
- **Interactive Product Catalog**:
  - Full-text instant search across product name, origin, and description.
  - Category filter chips: *All*, *Premium*, *Everyday*, *Gifting*, *Date products*.
  - Live price slider filtering by 250 g price.
  - Live sorting (*Featured*, *Price: Low to High*, *Price: High to Low*, *Name: A-Z*).
  - Dynamic weight selector (250 g, 500 g, 1 kg) updating prices instantly per card.
- **Cart Management (`CartContext`)**:
  - `localStorage` persistence under key `naturelink_cart`.
  - Distinct line items per weight variant (`productId-weight`).
  - Free shipping progress bar (Threshold: ₹999).
  - Quantity controls (`+` / `-`), remove line items, subtotal & total calculations.
  - Accessible slide-in drawer with backdrop overlay and `ESC` key exit support.
- **Interactive Batch Lab Report Inspection**:
  - Allows customers to enter batch codes (e.g., `NL-MJ-2610-A`, `NL-AJ-2610-B`, `NL-KH-2609-C`) to view lab purity metrics.
- **Artisanal Process & FAQ Accordion**:
  - 4-step harvest breakdown with placeholder certification badges.
  - 6 interactive keyboard-accessible FAQ accordions.
- **Image Fallback System**:
  - Lazy loading image wrapper (`ProductImage`) with fallback styled visual panels if image files fail to load.

---

## 🛠️ Tech Stack

- **Framework**: React 18+ via Vite
- **Styling**: Tailwind CSS v3
- **Icons**: Lucide React (`lucide-react`)
- **Typography**: Fraunces (Headings) & Figtree (Body) via Google Fonts
- **State Management**: React Context (`CartContext`) + `localStorage`

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Installation & Run

1. Clone the repository and navigate into the folder:
   ```bash
   cd dates-website-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the Vite development server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

---

## 🏗️ Production Build

To build the project for production, run:

```bash
npm run build
```

This compiles optimized HTML, JS, and CSS bundles into the `dist/` directory.

To preview the production build locally:
```bash
npm run preview
```

---

## 🌐 Zero-Config Deployment

### Deploying to Vercel

1. Push your repository to GitHub / GitLab / Bitbucket.
2. Log in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your repository.
4. Vercel automatically detects Vite:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**. Done!

[Live](https://naturelink-dates-ecom.vercel.app/)

---

## 📜 License

MIT License. Crafted for Naturelink Dates.
