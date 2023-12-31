// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@formkit/auto-animate", "@vueuse/nuxt", "nuxt-vitest", "@nuxtjs/eslint-module"],
})
