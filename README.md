# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

## Environment variables

This project reads contact values from environment variables (Vite requires `VITE_` prefix).

- `VITE_EMAIL`: e-mail usado nas ligações `mailto:` e exibição no site.
- `VITE_PHONE`: número de telefone (com DDI) usado para links do WhatsApp (`wa.me`).

Copy `.env.example` to `.env` and set your values locally.

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)

## Deploy to Vercel

This project builds to a static `dist` folder using Vite and can be deployed to Vercel as a static site.

Quick steps:

```bash
# 1. Install dependencies
npm install

# 2. Build the project (Vercel runs this automatically on deploy)
npm run build

# 3. (Optional) Preview the production build locally
npx serve dist
```

If you connect this repository to Vercel, the platform will run `npm run build` (or `npm run vercel-build` if present) and publish the `dist` output. The repository includes a `vercel.json` that sets the build to `@vercel/static-build` and rewrites unknown routes to `index.html` to support client-side routing.

Notes:
- Ensure any environment variables use the `VITE_` prefix in Vercel's project settings.
- If you want a specific Node.js version, add an `engines.node` field to `package.json` or set it in Vercel project settings.

