# GitHub Pages Deployment Guide for ChainSync Website

This guide explains how to deploy the ChainSync website to GitHub Pages.

## Prerequisites

- A GitHub account
- Git installed on your machine
- Node.js and pnpm installed

## Step-by-Step Deployment Instructions

### 1. Create a GitHub Repository

1. Go to [github.com](https://github.com) and log in to your account
2. Click the "+" icon in the top right and select "New repository"
3. Name your repository `chainsync`
4. Choose "Public" to make it accessible
5. Click "Create repository"

### 2. Initialize Git and Push Code

```bash
cd chainsync-website

# Initialize git if not already done
git init

# Add the remote repository
git remote add origin https://github.com/YOUR_USERNAME/chainsync-website.git

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: ChainSync website"

# Push to GitHub (use 'main' or 'master' depending on your GitHub default)
git branch -M main
git push -u origin main
```

### 3. Build the Website

Before deploying, build the production version:

```bash
pnpm install
pnpm build
```

This creates a `dist/public` directory with the compiled website.

### 4. Configure GitHub Pages

#### Option A: Deploy from `main` branch (Recommended for Static Sites)

1. Go to your repository on GitHub
2. Click "Settings" → "Pages"
3. Under "Source", select "Deploy from a branch"
4. Select `main` branch and `/root` folder
5. Click "Save"

#### Option B: Use GitHub Actions for Automated Deployment

Create a `.github/workflows/deploy.yml` file:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'

      - name: Install pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 10

      - name: Install dependencies
        run: pnpm install

      - name: Build
        run: pnpm build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist/public
```

### 5. Update Vite Configuration (Optional)

If deploying to a subdirectory (e.g., `username.github.io/chainsync-website`), update `vite.config.ts`:

```typescript
export default defineConfig({
  // ... other config
  base: '/chainsync-website/', // Add this line
  // ... rest of config
});
```

For a user/organization site (e.g., `chainsync.github.io`), use:

```typescript
base: '/',
```

### 6. Verify Deployment

1. Go to your repository on GitHub
2. Click "Settings" → "Pages"
3. Look for the URL where your site is published (e.g., `https://username.github.io/chainsync-website`)
4. Visit the URL to verify your website is live

## Updating the Website

To update your website after making changes:

```bash
# Make your changes to the code

# Build the updated version
pnpm build

# Commit and push changes
git add .
git commit -m "Update: [describe your changes]"
git push
```

If using GitHub Actions, the deployment will happen automatically. Otherwise, manually update the files in the `dist/public` directory.

## Troubleshooting

### Website shows 404 errors

- Ensure the `base` configuration in `vite.config.ts` matches your repository structure
- Check that the `dist/public` folder contains all built files
- Clear your browser cache and try again

### Styles not loading

- Check the `base` path configuration
- Ensure all asset paths are relative, not absolute

### Custom domain

To use a custom domain:

1. Go to "Settings" → "Pages"
2. Under "Custom domain", enter your domain
3. Update your domain's DNS records to point to GitHub Pages

## Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [React Router with GitHub Pages](https://wouter.js.org/)

## Notes

- The website uses client-side routing with Wouter, which works seamlessly with GitHub Pages
- All pages are pre-rendered as static HTML during the build process
- The contact form currently shows an alert; for production, integrate with a backend service or email service like Formspree or EmailJS

