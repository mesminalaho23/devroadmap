// roadmapData.js - Data model for the learning roadmap
// roadmapData.js - Modèle de données pour la roadmap d'apprentissage
// This file defines categories, steps and resources shown in the app.
const roadmapData = [
  {
    id: "web-basics",
    title: "Les Bases du Web",
    icon: "🌐",
    steps: [
      {
        id: "html",
        title: "HTML",
        description: "Apprendre la structure des pages web avec HTML.",
        resources: [
          { label: "MDN – HTML", url: "https://developer.mozilla.org/fr/docs/Web/HTML" },
          { label: "W3Schools – HTML", url: "https://www.w3schools.com/html/" },
        ],
      },
      {
        id: "css",
        title: "CSS",
        description: "Apprendre à styliser les pages web avec CSS.",
        resources: [
          { label: "MDN – CSS", url: "https://developer.mozilla.org/fr/docs/Web/CSS" },
          { label: "CSS-Tricks", url: "https://css-tricks.com/" },
        ],
      },
      {
        id: "responsive",
        title: "Responsive Design",
        description: "Créer des sites adaptatifs avec les media queries et flexbox.",
        resources: [
          { label: "MDN – Responsive Design", url: "https://developer.mozilla.org/fr/docs/Learn/CSS/CSS_layout/Responsive_Design" },
          { label: "Flexbox Froggy", url: "https://flexboxfroggy.com/" },
        ],
      },
      {
        id: "accessibility",
        title: "Accessibilité",
        description: "Rendre les sites accessibles à tous les utilisateurs.",
        resources: [
          { label: "MDN – Accessibilité", url: "https://developer.mozilla.org/fr/docs/Web/Accessibility" },
        ],
      },
    ],
  },
  {
    id: "javascript",
    title: "JavaScript",
    icon: "⚡",
    steps: [
      {
        id: "js-basics",
        title: "Les bases de JavaScript",
        description: "Variables, types, conditions, boucles et fonctions.",
        resources: [
          { label: "MDN – JavaScript", url: "https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide" },
          { label: "javascript.info", url: "https://javascript.info/" },
        ],
      },
      {
        id: "dom",
        title: "Manipulation du DOM",
        description: "Interagir avec les éléments HTML via JavaScript.",
        resources: [
          { label: "MDN – DOM", url: "https://developer.mozilla.org/fr/docs/Web/API/Document_Object_Model" },
        ],
      },
      {
        id: "es6",
        title: "ES6+",
        description: "Arrow functions, destructuring, modules, promesses.",
        resources: [
          { label: "MDN – ES6", url: "https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference" },
          { label: "ES6 Features", url: "https://es6-features.org/" },
        ],
      },
      {
        id: "async",
        title: "Asynchrone",
        description: "Callbacks, promesses, async/await et fetch API.",
        resources: [
          { label: "MDN – Async", url: "https://developer.mozilla.org/fr/docs/Learn/JavaScript/Asynchronous" },
        ],
      },
    ],
  },
  {
    id: "react",
    title: "React",
    icon: "⚛️",
    steps: [
      {
        id: "react-basics",
        title: "Les bases de React",
        description: "Composants, JSX, props et state.",
        resources: [
          { label: "React – Documentation", url: "https://react.dev/" },
          { label: "React Tutorial", url: "https://react.dev/learn" },
        ],
      },
      {
        id: "hooks",
        title: "Hooks",
        description: "useState, useEffect, useContext et hooks personnalisés.",
        resources: [
          { label: "React – Hooks", url: "https://react.dev/reference/react" },
        ],
      },
      {
        id: "routing",
        title: "React Router",
        description: "Navigation entre les pages avec React Router.",
        resources: [
          { label: "React Router Docs", url: "https://reactrouter.com/" },
        ],
      },
      {
        id: "state-management",
        title: "Gestion d'état",
        description: "Context API et gestion d'état avancée.",
        resources: [
          { label: "React – Context", url: "https://react.dev/reference/react/useContext" },
        ],
      },
    ],
  },
  {
    id: "dev-tools",
    title: "Outils du Développeur",
    icon: "🔧",
    steps: [
      {
        id: "git",
        title: "Git & GitHub",
        description: "Versionner son code et collaborer avec Git.",
        resources: [
          { label: "Git – Documentation", url: "https://git-scm.com/doc" },
          { label: "GitHub Guides", url: "https://guides.github.com/" },
        ],
      },
      {
        id: "terminal",
        title: "Terminal / Ligne de commande",
        description: "Naviguer et exécuter des commandes dans le terminal.",
        resources: [
          { label: "MDN – Ligne de commande", url: "https://developer.mozilla.org/fr/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line" },
        ],
      },
      {
        id: "npm",
        title: "npm & Node.js",
        description: "Gérer les dépendances et exécuter du JavaScript côté serveur.",
        resources: [
          { label: "Node.js", url: "https://nodejs.org/" },
          { label: "npm Docs", url: "https://docs.npmjs.com/" },
        ],
      },
      {
        id: "vscode",
        title: "VS Code",
        description: "Configurer et utiliser VS Code efficacement.",
        resources: [
          { label: "VS Code Docs", url: "https://code.visualstudio.com/docs" },
        ],
      },
    ],
  },
];

export default roadmapData;
