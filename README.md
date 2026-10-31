# Posts Reader - Lab 10

React + TypeScript application scaffolded with Vite. Styled with Tailwind CSS v4
and shadcn/ui's Base UI Luma preset. Lab 10 supplies the shell and theme toggle;
posts and API integration arrive in Lab 11.

## Run locally

Use Node.js 24 (the version used to build and verify this project).

```sh
npm install
npm run dev
```

Open the local URL printed by Vite. To check the project:

```sh
npm run build
npm run lint
```

## How the pieces connect

- `src/main.tsx` wraps the application in `ThemeProvider`.
- `src/components/theme-provider.tsx` shares the theme through Context. A lazy
  state initializer reads the saved preference; `setTheme` saves changes to
  `localStorage`; an effect updates the class on `<html>`.
- `src/components/mode-toggle.tsx` uses `useTheme()` to select Light, Dark, or
  System. It owns no state.
- `src/components/layout.tsx` provides the centered header and content area.
- `src/components/ui/` contains the four components copied by the shadcn CLI.
- `src/index.css` imports Tailwind, shadcn styling, animation utilities, and Inter.
- The `@/` alias points to `src/`. Vite resolves it for bundling; the two TypeScript
  configurations expose it to the type checker and the shadcn CLI.

## Lab-specific notes

The current Vite starter used TypeScript 7, which rejects `baseUrl`. This project
uses TypeScript 6 to preserve the configuration required by the lab.

System mode reads the OS preference when selected or on reload. It does not
subscribe to live OS changes, matching the handout.

The provider retains the handout's intentionally ineffective undefined-context
guard for class discussion. Because the context has an initial value, that guard
cannot detect a missing provider.

The linter allows the named `useTheme` and `buttonVariants` exports alongside
components, as required by the lab and the generated shadcn component API.

## Browser verification

- Light and Dark change the page appearance.
- Dark remains active after reload.
- System resolves to the browser's current light preference.
- No browser console warnings or errors were recorded during these checks.

## Submission still required

Create an empty GitHub repository, add it as `origin`, and push `main`. Confirm
that the instructor account `jeffdteach` has been invited as a collaborator,
then submit the repository link. Keep this repository for Labs 11 and 12.
