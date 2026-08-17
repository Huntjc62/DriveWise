# DriveWise v2 — fixed multi-page package

The previous build used root-absolute paths such as `/assets/app.js`. Those can fail when the ZIP is opened locally or hosted in a sub-folder. This version uses relative paths throughout.

Pages:
- `index.html` — public homepage
- `pages/guides.html` — news/guides
- `pages/article.html` — individual article
- `pages/account.html` — account
- `pages/garage.html` — My Garage
- `pages/cars.html` — car search
- `pages/parts.html` — parts
- `pages/mods.html` — modification planner
- `pages/mod-library.html` — public mod library
- `pages/admin-login.html` — admin login
- `pages/admin.html` — CMS

Demo admin:
`admin` / `admin123`

For testing, extract the package and run `python -m http.server 8000`, then open `http://localhost:8000/`.

The prototype uses localStorage/sessionStorage. Production should use Firebase Authentication + Firestore.
