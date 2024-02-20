// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  app: {
    head: {
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.svg" }],
      meta: [{ name: "color-scheme", content: "only light" }],
    },
  },
  modules: ["@vueuse/nuxt", "@nuxt/ui"],
  css: ["~/assets/css/main.css"],
})
