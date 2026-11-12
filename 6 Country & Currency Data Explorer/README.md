# Country & Currency Data Explorer

A data-driven, single-page application built with vanilla JavaScript. It fetches a dataset of 250 countries, transforms the data, and provides a fully interactive dashboard with live filtering, sorting, and search functionality.

---

## 🎯 What It Does

- Fetches country data from a local JSON file.
- Renders a summary dashboard (Total Countries, Total Area, Highest Area).
- Displays a data table with flags, names, regions, and areas.
- Filters countries by region.
- Sorts countries by area (High to Low / Low to High).
- Searches for countries by name (partial match, case-insensitive).
- Opens a modal with detailed information for a specific country.

## 🧠 Architecture & Concepts Applied

This project was built to practice data transformation and state management without a framework.

- **State-Driven Rendering:** All UI updates are triggered by changing the central `state` object and calling a single `render()` function.
- **Immutable Filtering:** The master `state.countries` array is never mutated. The `render()` function creates a copy, filters it, sorts it, and renders the copy.
- **Data Transformation:** Complex nested JSON is flattened using `Object.values()` and custom mapping before it enters the state.
- **Event Delegation:** Instead of attaching a click listener to 250 individual "View More" buttons, a single event listener is attached to the `<tbody>` to handle all clicks efficiently.
- **Performance Awareness:** Avoided the anti-pattern of generating 250 hidden modals in the DOM. Instead, a single `<dialog>` is populated dynamically before calling `showModal()`.

## 🛠️ Tech Stack

- **HTML5** (Semantic markup, ARIA attributes for accessibility)
- **Tailwind CSS** (Utility-first styling, responsive layout)
- **Vanilla JavaScript** (ES6+, Async/Await, Array Methods, DOM Manipulation)
- **Local JSON** (Data source)

## 📂 How to Run

1. Clone the repository.
2. Serve the project locally (e.g., using VS Code Live Server or `npx serve`). 
   *(Note: You cannot open `index.html` via `file://` due to fetch/CORS restrictions).*
3. Open the browser to view the app.

## 📝 What I Learned

- **Data Shapes:** Navigating deeply nested objects (e.g., `country.name.common` vs `country.currencies[0]`).
- **Async Handling:** Safely handling loading, loaded, empty, and error states.
- **The Cost of DOM Manipulation:** Why building 250 modals in a loop is a performance disaster, and how Event Delegation + a single modal fixes it.

---
*Built as part of my Phase 1 foundation rebuild. No frameworks.*