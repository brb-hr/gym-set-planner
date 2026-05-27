# 🏋️‍♂️ Workout Set Planner PWA

A minimalist, distraction-free progressive web app (PWA) designed for smartphones to plan and order workout exercises. 

📱 **Zero distraction:** Runs in full-screen standalone mode without a browser URL bar.

## ✨ Features

* 🟦 **Dual Zone Layout:** A clear blue divider separates your *Active Workout Set* (above) from the *Exercise Pool* (below).
* 🔄 **Bi-directional Drag & Drop:** Drag items freely across the line to activate/deactivate them, or reorder them within a section using a dedicated touch-friendly handle (`☰ Move`).
* 📜 **Smooth Scrolling:** Standard touch scrolling works seamlessly when swiping on images, while dragging is strictly reserved for the handle.
* 💾 **Local Persistence:** Your custom set order and states are automatically saved directly to the device's `localStorage`.
* ✈️ **Offline Ready:** Uses a lightweight Service Worker (`sw.js`) to cache assets and work without an active internet connection.

## 🛠 Tech Stack

* **Frontend:** Vanilla HTML5, CSS3 (Custom Variables), and native JavaScript (Touch & Mouse events).
* **PWA:** Web App Manifest (`manifest.json`) and Service Worker (`sw.js`).
* **Hosting:** Optimized for zero-configuration deployments like GitHub Pages or Vercel.

## 🚀 Getting Started

1. Clone or download this repository.
2. Place your exercise images into the project folder (or update paths inside `index.html`).
3. Upload the files (`index.html`, `manifest.json`, `sw.js`) to a hosting provider with HTTPS (e.g., GitHub Pages).
4. Open the link in Google Chrome on your smartphone.
5. Tap the three dots (menu) and select **"Install app"** or **"Add to Home screen"**.

## 🔄 How to Update Caches

When modifying code or changing default exercises in `index.html`:
1. Update the code in your repository.
2. Open `sw.js` and increment the version string at the top:
   ```javascript
   const CACHE_NAME = 'set-planner-v3'; // Increment version (v2 -> v3 -> v4)
3. Alternative: Clear Cache/ Cookies in Browser and reinstall PWA
