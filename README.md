# Product Listing Page (PLP) - Frontend Assessment

This project is a fully responsive **Product Listing Page** built using **Next.js**. It replicates a modern e-commerce interface based on the provided Figma design, featuring server-side rendering (SSR) for optimal performance and SEO.

##  Features

- **Server-Side Rendering (SSR):** Utilized `getServerSideProps` to fetch data before rendering, ensuring search engines can crawl the product data effectively.
- **Responsive Design:** Fully fluid layout that adapts to Desktop, Tablet, and Mobile screens using Custom CSS Grid and Flexbox.
- **Dynamic Filtering:** - Sidebar filters with expandable/collapsible categories.
  - Sort functionality (Recommended, Price Low-High, etc.).
- **Performance Optimized:** - Used **Next.js Image** optimization.
  - Minimal external dependencies (Pure CSS Modules).
  - Clean and modular code structure.
- **SEO Friendly:** Proper use of Semantic HTML (`<header>`, `<main>`, `<article>`) and Meta tags.

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (React)
- **Styling:** CSS Modules (Pure CSS, No Bootstrap/Tailwind)
- **Data Source:** [Fake Store API](https://fakestoreapi.com/)
- **Deployment:** Netlify

## 📂 Project Structure

```bash
src/
├── components/       # Reusable UI components
│   ├── Header.js     # Navigation and Hero section
│   ├── FilterBar.js  # Top filter strip
│   ├── Sidebar.js    # Left side category filters
│   ├── ProductCard.js# Individual product display component
│   └── Footer.js     # Responsive footer
├── pages/
│   └── index.js      # Main page (SSR Logic lives here)
├── styles/
│   └── globals.css   # Global resets and fonts