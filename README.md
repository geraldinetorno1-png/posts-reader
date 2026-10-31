# Posts Reader

Lab Activity 10 for Front-End Development 2.

A React and TypeScript app using Vite, Tailwind CSS v4, and shadcn/ui.
It has a simple page layout and a Light, Dark, and System theme menu.
Posts will be added in Lab 11.

## Setup

Using Node.js 24:

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
npm run lint
```

## Features

- Theme selection saved in localStorage
- System theme based on the OS preference when selected or reloaded
- Shared theme state through React Context
- Button, card, dropdown-menu, and skeleton components from shadcn/ui
- `@/` imports for files inside `src`

TypeScript 6 is used because the lab configuration requires `baseUrl`.
