# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Project Files / Fichiers du projet

- `index.html` - Root HTML file for the application. / Fichier HTML racine de l'application.
- `src/main.jsx` - App entry point that mounts React into the HTML page. / Point d'entrée de l'application qui monte React dans la page HTML.
- `src/App.jsx` - Main app component with routing and progress state. / Composant principal de l'application avec routage et état de progression.
- `src/firebase.js` - Firebase initialization settings. / Paramètres d'initialisation Firebase.
- `src/data/roadmapData.js` - Roadmap structure, categories and learning steps. / Structure de la roadmap, catégories et étapes d'apprentissage.
- `src/data/translations.js` - Language translations for French and English. / Traductions en français et anglais.
- `src/context/ThemeContext.jsx` - Theme provider for light/dark mode. / Fournisseur de thème pour le mode clair/sombre.
- `src/context/LangContext.jsx` - Language provider with translation helper. / Fournisseur de langue avec helper de traduction.
- `src/components/` - Reusable UI components like Header, Footer, Sidebar and cards. / Composants UI réutilisables comme Header, Footer, Sidebar et cartes.
- `src/pages/` - Page views for Home, Roadmap and About. / Vues de page pour Home, Roadmap et About.
- `src/styles.css` - Main application styling and responsive layout. / Styles principaux de l'application et mise en page responsive.
- `vite.config.js` - Vite build configuration for React. / Configuration de build Vite pour React.
- `package.json` - Project dependencies and scripts. / Dépendances du projet et scripts.
- `tsconfig.json` - TypeScript configuration used by the editor and build tools. / Configuration TypeScript utilisée par l'éditeur et les outils de build.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
