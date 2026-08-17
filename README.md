# DriveWise v8

Fixed the model selector display issue.

- Numeric-only model names are now displayed with the full make, e.g.:
  - BMW 3 Series (already represented as a full model name)
  - Alfa Romeo 147
  - Renault 5
  - Peugeot 107
  - Fiat 500
- The model dropdown now explicitly uses the display-name helper.
- Vehicle naming remains aligned to the UK Auto Trader make/model structure, with Parkers used as the specification reference.
- Source links are shown in My Garage.
- Existing years, parts comparison, Auto Trader hand-off, admin analytics and SEO tools remain.

For a production-grade exhaustive catalogue, the next step is an authorised vehicle data/fitment API that returns exact derivatives, engines, trims and registration/VIN matches. Static website pages cannot reliably provide that level of fitment accuracy.
