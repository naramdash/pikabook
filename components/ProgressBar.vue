<script setup lang="ts">
const props = defineProps<{
  progress: number
}>()
</script>

<template>
  <div class="w-full pt-1 pb-1">
    <div
      class="h-1 rounded-r-full bar"
      :style="{ width: `${props.progress}%` }" />
  </div>
</template>

<style scoped>
.bar {
  background-color: #00960f;
}
</style>
