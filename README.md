# DriveWise v17 — Editorial-first redesign

DriveWise is now structured first as a public car news/guides publication.

PUBLIC / NO ACCOUNT REQUIRED:
- Homepage is News & Guides
- Latest/featured articles
- Buying guides
- Modification guides
- News
- Comparisons
- DriveWise Monthly
- Newsletter signup
- Full guide reading pages

ACCOUNT REQUIRED:
- My Garage
- Save/add your car
- Search used cars
- Find/compare parts
- Personalised modification tools

The site prompts visitors to create a free account only when they try to use a member feature.

Header:
- News & Guides
- My Garage
- Search Cars
- Find Parts
- Admin

Prototype account system:
- Uses localStorage for the demo
- Sign up / log in / log out
- Member state gates the personalised tools

Admin:
- Existing content publishing/editing retained
- Rich editor retained
- Content SEO checker retained
- Monthly feature retained
- Analytics and site SEO audit retained

Production recommendation:
Move authentication and user/car/content data to Firebase Authentication + Firestore. Passwords must never be stored in localStorage in a real production deployment. Generate real article routes such as /guides/how-to-buy-a-pre-owned-car for indexable SEO pages.
