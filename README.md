# DriveWise v15

Fixed the Admin regression introduced by the rich-text/SEO editor update.

- Admin login remains independent from the content editor
- Admin initialisation is now defensive and will not fail if an editor element is unavailable
- Rich-text editor, SEO checker and publishing tools remain available after login
- Optional editor elements are checked before use
- Existing My Garage, Guides, Mod Library, parts comparison, shortlist, analytics and SEO audit remain

This version should restore access to the admin dashboard while retaining the new content features.
