# ShopNest

ShopNest is a responsive React storefront built with Vite, React Router, Axios, and Context API.

## Run locally

```sh
npm install
npm run dev
```

The storefront requests its product list with Axios from `/products.json`, served from `public/products.json`. To use a backend endpoint instead, set `VITE_PRODUCTS_API_URL` to the products API URL before starting or building the app.

## Production and Netlify

Run `npm run build` to generate the production site in `dist`. The included `netlify.toml` configures this build and the SPA route fallback. Connect this project to Netlify and deploy the repository (or run a Netlify deploy from an authenticated CLI) to get its public URL.
