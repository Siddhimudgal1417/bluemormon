# Deploying this website

This project is a Vite + React static website. To publish it live, use one of these hosting options.

## Option 1: GitHub Pages
1. Create a GitHub repository and push this project to `main`.
2. Enable GitHub Pages in repository settings or use the workflow in `.github/workflows/deploy.yml`.
3. The workflow will build the site and publish the `dist` folder to the `gh-pages` branch.
4. Visit the GitHub Pages URL for your repo once the workflow finishes.

## Option 2: Vercel
1. Go to https://vercel.com and sign in.
2. Import your GitHub repository.
3. Set the build command to `npm run build` and the output directory to `dist`.
4. Deploy the site.

## Option 3: Netlify
1. Go to https://app.netlify.com and sign in.
2. Connect your GitHub repository.
3. Set the build command to `npm run build` and the publish directory to `dist`.
4. Deploy the site.

## Local preview
Run `npm run build` then `npm run preview` to test the production build locally.
