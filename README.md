# ⚖️ [AdvocaciaFalaschi] – Website Institucional

Este repositório contém o código-fonte do site oficial do escritório de advocacia **[Nome do Escritório]**, desenvolvido com React, TypeScript e Vite. O objetivo é oferecer uma presença digital profissional, moderna e responsiva, proporcionando aos clientes informações claras sobre os serviços jurídicos oferecidos.

## 🚀 Tecnologias Utilizadas

- ⚛️ [React](https://reactjs.org/)
- 🟦 [TypeScript](https://www.typescriptlang.org/)
- ⚡ [Vite](https://vitejs.dev/)
- 🎨 [Tailwind CSS](https://tailwindcss.com/)
- 🔀 [React Router](https://reactrouter.com/)
- 📏 ESLint + Prettier para padronização de código

## 💼 Funcionalidades

- Página inicial com apresentação institucional
- Sessão "Sobre" com informações do escritório
- Área de atuação com serviços oferecidos
- Área de blog para mais informações
- Área de contato 
- Layout responsivo para dispositivos móveis

## 📁 Estrutura do Projeto


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
