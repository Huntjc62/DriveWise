# DriveWise v9

Fixed the My Garage model selector bug.

The vehicle catalogue is stored as arrays of actual model names. The previous code incorrectly used Object.keys(array), which returned 0, 1, 2, 3... instead of the model names. It now uses the array values directly.

Examples for Ford now display:
- Fiesta
- Focus
- Kuga
- Mustang
- Puma
- Ranger
- etc.

The year selector is also fixed to recognise the selected model correctly.

All existing DriveWise features are retained.
