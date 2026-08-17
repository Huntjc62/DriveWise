# DriveWise v14

Guides/content publishing upgrade.

Admin content editor:
- Rich text editor with H2, H3, paragraph, bold, italic, ordered/unordered lists, blockquotes and links
- SEO title field
- Meta description field
- Built-in Content SEO Checker scoring title, meta description, word count, headings, links, excerpt and paragraph structure
- HTML content is saved so formatting is retained

Public Guides:
- Clicking Read Guide now opens a dedicated full-page article view rather than a modal
- Article has its own reading layout, title, excerpt, date, formatted content and related guides
- Back to Guides navigation
- Admin-published content appears automatically

Note: This is still a single-file prototype with client-side localStorage. For true SEO URLs, server-side routing/static generation and search-engine indexing, production should generate a physical page/route per article (e.g. /guides/how-to-buy-a-pre-owned-car) and store content in Firebase/Firestore.
