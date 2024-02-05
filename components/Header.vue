<script setup lang="ts">
const props = withDefaults(defineProps<{ back: boolean }>(), { back: false })
</script>

<template>
  <div class="p-6">
    <button
      v-show="props.back"
      type="button"
      class="inline mr-2"
      @click="$router.back()">
      <UIcon
        class="inline"
        name="i-solar-alt-arrow-left-outline"
        dynamic />
    </button>
    <img
      class="inline"
      src="~/assets/service_logo.svg"
      alt="Serivce Logo" />
  </div>
</template>
