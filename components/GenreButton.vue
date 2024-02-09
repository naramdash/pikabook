<script setup lang="ts">
const props = defineProps<{
  img: string
  label: string
}>()
</script>

<template>
  <NuxtLink
    class="genre-button max-w-full min-h-32 py-5 px-1 rounded-xl bg-white w-full flex flex-col justify-between items-center gap-5">
    <img
      class="h-10"
      :src="props.img" />
    <span class="font-semibold">{{ props.label }}</span>
  </NuxtLink>
</template>

<style scoped>
.genre-button {
  filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.2));
  max-width: calc(50% - 8px);
}
</style>
