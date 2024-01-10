<script setup lang="ts">
const props = defineProps<{
  keyword: string
  selected?: boolean
  removable?: boolean
}>()

const emit = defineEmits<{
  remove: []
}>()
</script>

<template>
  <span
    class="KeywordTag-root"
    :class="{ selected: props.selected }">
    <span>{{ props.keyword }}</span>
    <button
      v-if="removable"
      @click="emit('remove')">
      <svg
        width="12"
        viewBox="0 0 10 10">
        <line
          x1="0"
          y1="0"
          x2="10"
          y2="10"
          stroke="white"
          stroke-width="2" />
        <line
          x1="0"
          y1="10"
          x2="10"
          y2="0"
          stroke="white"
          stroke-width="2" />
      </svg>
    </button>
  </span>
</template>
<style scoped>
.KeywordTag-root {
  background-color: var(--pikabook-light-grey);
  &.selected {
    background-color: var(--pikabook-green);
  }

  display: inline-flex;
  flex-direction: row;
  align-items: center;

  height: 1.5rem;
  min-width: 3rem;

  border-radius: 100px;
  padding: 10px;
  padding-right: v-bind("removable ? '20px': '10px'");
}

.KeywordTag-root span {
  flex: 1;
  text-align: center;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  width: max-content;

  font-size: 1.3rem;
  font-weight: 600;
  color: white;

  user-select: none;
}

.KeywordTag-root button {
  border: none;
  background: none;
  padding: 0;
  margin-top: 3px;
  cursor: pointer;
}
</style>
