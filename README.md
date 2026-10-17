## File Organization

- `index.html` - Entry HTML file containing the `#root` div that React mounts into.
- `package.json` - Project dependencies and scripts.
- `vite.config.js` - Vite configuration with the React plugin.
- `.gitignore` - Excludes `node_modules` from the repository.
- `src/main.jsx` - Renders the `App` component into the DOM.
- `src/App.jsx` - Root component. Holds the `showProducts` and `name` state, and renders the heading, toggle button, controlled input, greeting, and conditionally renders `ProductList`.
- `src/components/ProductList.jsx` - Defines the static product array and renders one `Product` per item using `.map()`, with `id` as the key.
- `src/components/Product.jsx` - Reusable, stateless component that receives `title` and `price` as props and wraps its content in `Card`.
- `src/components/Card.jsx` - Layout component that renders any `children` with a border, padding, and margin.

## Challenges I Faced

- **File naming errors:** I made mistakes in file names and extensions (for example, the wrong case or extension), which caused a white screen and a 404 error. I fixed it by checking the Network tab and correcting the names so they matched the imports exactly.
- **Controlled input:** I had to understand that the input's `value` must come from state and be updated through `onChange`, so React stays the single source of truth.
- **Keys in lists:** I learned why each item in `.map()` needs a stable, unique `key`, and why using the array index is not a good idea.
- **Conditional rendering:** I used a single boolean state to control both the button text and whether `ProductList` is shown.
