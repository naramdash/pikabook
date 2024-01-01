# Book Recommend Service - Frontend

## Requirement

Check package.json [`volta`](https://volta.sh/) field.

- [Node.js](https://nodejs.org/) 20.10.0
- [npm](https://docs.npmjs.com/) 10.2.5

## Dependencies

|           | Dependency                                       | Version    | Details                       |
| --------- | ------------------------------------------------ | ---------- | ----------------------------- |
| Framework | [Nuxt](https://nuxt.com/)                        | 3.9        |                               |
|           | [Vue.js](https://vuejs.org/)                     | 3.4        |                               |
| Library   | [Tailwind](https://tailwindcss.com/)             | NuxtModule |                               |
|           | [AutoAnimate](https://auto-animate.formkit.com/) | NuxtModule |                               |
|           | [VueUse](https://auto-animate.formkit.com/)      | NuxtModule |                               |
| Tool      | [Storybook](https://storybook.js.org/)           | 7.6        |                               |
|           | [Vitest](https://storybook.js.org/)              | NuxtModule |                               |
|           | [ESLint](https://eslint.org/)                    | NuxtModule | (nuxt module integrated, CLI) |
|           | [Prettier](https://prettier.io/)                 | 3.1.1      | (vscode ext autosave, CLI)    |

## Deploy

[![Deploy Nuxt site to GitHub Pages](https://github.com/book-recommend-service/frontend/actions/workflows/ghpages-deploy-nuxtjs.yml/badge.svg)](https://github.com/book-recommend-service/frontend/actions/workflows/ghpages-deploy-nuxtjs.yml)

- Current: `github_pages`
- Future: [Candidates: nuxt recommended](https://nuxt.com/deploy)
  - Zero Config:
    - AWS Amplify
    - Vercel
    - Azure Static Web App
    - Cleavr
    - Cloudflare Pages
    - Flightcontrol
    - Netlify
