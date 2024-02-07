<script setup lang="ts">
const props = defineProps<{
  level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}>()
</script>

<template>
  <component
    :is="props.level"
    class="font-bold text-lg leading-8">
    <slot></slot>
  </component>
</template>
