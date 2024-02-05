<script setup lang="ts">
const props = defineProps<{
  img: string
  label: string
}>()
</script>

<template>
  <button
    type="button"
    class="py-5 px-1 rounded-xl bg-white w-full flex flex-col items-center gap-5">
    <img
      class="h-10"
      :src="props.img" />
    <span class="font-semibold">{{ props.label }}</span>
  </button>
</template>
