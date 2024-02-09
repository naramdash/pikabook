<script setup lang="ts">
const props = withDefaults(defineProps<{ back?: boolean }>(), { back: false })
</script>

<template>
  <div class="p-6 pl-8">
    <button
      v-show="props.back"
      type="button"
      class="inline -ml-2 mr-1"
      @click="$router.back()">
      <UIcon
        class="inline"
        width="20"
        height="20"
        name="i-material-symbols-arrow-back-ios-rounded"
        dynamic />
    </button>
    <img
      class="inline w-28"
      src="~/assets/service_logo.svg"
      alt="Serivce Logo" />
  </div>
</template>
