# Hitster – YouTube Music edition
Open index.html (best served over http(s): `python3 -m http.server`, then http://localhost:8000). cards.html prints QR cards (A4, duplex, flip on long edge, 100% scale).
Files: index.html (game), songs.js (187 songs verified via YouTube oEmbed), cards.html, common.js, vendor/jsQR.js (Apache-2.0), vendor/qrcode.js (MIT, qrcode-generator).
Custom deck CSV: url,title,artist,year. Playlist import requires a YouTube Data API v3 key (years must be added manually).
