<template>
  <button
    type="button"
    class="bg-black/20 rounded-full font-bold text-white p-3 px-8 w-fit">
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.2));
}
</style>
