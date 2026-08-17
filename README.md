# DriveWise — Multi-page package

This version is deliberately split into separate pages instead of one large index file.

## Structure

- `index.html` — public editorial homepage
- `pages/guides.html` — news and guides library
- `pages/article.html` — individual article page
- `pages/account.html` — member account
- `pages/garage.html` — My Garage
- `pages/cars.html` — used-car search
- `pages/parts.html` — parts search/comparison
- `pages/mods.html` — modification planner
- `pages/mod-library.html` — public modification education
- `pages/admin-login.html` — admin login
- `pages/admin.html` — admin CMS
- `assets/style.css` — shared styling
- `assets/data.js` — seed content and vehicle data
- `assets/app.js` — shared application logic
- `firebase-config.example.js` — production Firebase placeholder

## Product model

Public first:
News, buying guides, modification guides, comparisons and DriveWise Monthly are readable without an account.

Members:
Creating an account unlocks My Garage, car search and parts/modification tools.

Admin:
Demo credentials are `admin` / `admin123`.

## Important

The demo account/admin and data storage use browser storage so the package can be tested without a backend. Before production, replace this with Firebase Authentication + Firestore. Never store passwords in localStorage in a production application.

For true SEO production deployment, host each article at its own URL and generate canonical URLs, sitemap.xml, robots.txt, Open Graph metadata and Article/NewsArticle structured data.
