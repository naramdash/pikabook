// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  modules: ["@vueuse/nuxt", "@nuxt/ui"],
  css: ["~/assets/css/main.css"],
})
