# DriveWise v3 — standalone multi-page package

This version fixes the blank/un-styled page problem by making every HTML page self-contained: its CSS and JavaScript are embedded directly in that page. The package still has a separate HTML file for every page.

Pages:
- index.html
- pages/guides.html
- pages/article.html
- pages/account.html
- pages/garage.html
- pages/cars.html
- pages/parts.html
- pages/mods.html
- pages/mod-library.html
- pages/admin-login.html
- pages/admin.html

The assets folder is retained as the source copies, but the HTML pages do not depend on those files to render.

Demo admin: admin / admin123

Member accounts and content use browser storage for this prototype. Production should use Firebase Authentication + Firestore.


Magazine redesign: the News & Guides page is now a magazine-style editorial hub with category sorting for News, Buying Guides, Comparisons, Modifications and DriveWise Monthly, including a lead story, secondary stories, latest stories and category sections.
