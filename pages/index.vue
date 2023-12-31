<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div>
    <h1>GHPAGES DEPLOY SUCCESS</h1>
    <h1>Nuxt Routing set up successfully!</h1>
    <p>Current route: {{ route.path }}</p>
    <a href="https://nuxt.com/docs/getting-started/routing"> Learn more about Nuxt Routing </a>
  </div>

  <hr />
  <hr />
  <hr />

  <NuxtWelcome />
</template>
