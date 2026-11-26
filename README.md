# Paradise Nursery – e-plantShopping

A React + Redux Toolkit shopping cart for an online houseplant shop.

## Features
- Landing page with background image, company paragraph (`AboutUs.jsx`) and a **Get Started** button
- Product listing: 18 houseplants in 3 categories, each with thumbnail, name, price, description and **Add to Cart** (becomes a disabled **Added to Cart**)
- Navbar on the Plants and Cart pages with Home / Plants / Cart links and a live cart-count icon
- Cart page: total plants, total cost, per-item subtotal, increase / decrease / delete, **Continue Shopping** and **Checkout** ("coming soon")
- Redux slice in `src/CartSlice.jsx` (`addItem`, `removeItem`, `updateQuantity`)

## Run locally
```bash
npm install
npm run dev
```

## Deploy to GitHub Pages
1. Create a public repo named `e-plantShopping` and push this project.
2. `npm run deploy` (publishes `dist` to the `gh-pages` branch).
3. In repo Settings → Pages, set the source to the `gh-pages` branch.

Live URL: `https://<your-username>.github.io/e-plantShopping/`
