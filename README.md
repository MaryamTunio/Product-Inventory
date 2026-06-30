# Product Inventory Dashboard

A sleek, responsive, and interactive Admin Panel dashboard for managing product inventory metrics. Built using semantic HTML5 structures, dynamic vanilla JavaScript controllers, and styled cleanly with Tailwind CSS.

## ✨ Features

- **Dynamic Row Editing & Modification:** Edit product details (Price and Stock volume) natively inline without redirecting pages. Features automated state rollback handling via dedicated *Save* and *Cancel* workflows.
- **Real-Time Client-Side Search Engine:** Instantly parses through row nodes using custom substring verification logic to filter active inventory listings seamlessly.
- **Multi-Column Data Sorting:** Click-to-sort architecture embedded within structural table headers (`ID`, `Product Name`, `Category`, `Price`, and `Stock`) utilizing strict alphanumeric profiling (`numeric: true`).
- **Clean Responsive Layout:** Includes a fixed-layout persistent dark sidebar for desktop displays that converts to a clean main-focus stack structure on viewport scaling.

## 📁 Repository Blueprint

```text
├── index.html     # Semantic UI skeleton integrated with Tailwind CDN scripts
├── script.js      # Core logical engine controlling sorting, search lookups, and DOM mutation states
└── style.css      # Extensible fallback stylesheet container for specialized custom layout modifications
