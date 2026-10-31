# Posts Reader

Lab Activities 10, 11, and 12 for Front-End Development 2.

A React and TypeScript app using Vite, Tailwind CSS v4, and shadcn/ui.
Posts come from JSONPlaceholder using Axios and TanStack Query.

Live site: https://posts-reader-green.vercel.app/

## Setup

Using Node.js 24:

```sh
npm install
cp .env.example .env
npm run dev
```

## Build

```sh
npm run build
npm run lint
```

## Features

- List of 100 posts with links to individual post pages
- Comments with avatars and separate loading, error, and empty states
- Safe date formatting when a post includes a date
- Vercel deployment with support for refreshing post URLs
- Loading skeletons, error messages with retry, and an empty state
- Separate messages for a missing post and an unknown page
- Light, Dark, and System themes saved in localStorage
- Shared layout and page navigation using React Router
- `@/` imports for files inside `src`

TypeScript 6 is used because the lab configuration requires `baseUrl`.
