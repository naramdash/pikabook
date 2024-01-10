<script setup lang="ts">
const props = defineProps<{
  keywords: readonly string[]
  selecteds: string[]
  selectedsLimit?: number
}>()
const emit = defineEmits<{
  popSelecteds: []
  pushSelecteds: [string]
  removeSelecteds: [string]
}>()

const inputRef = ref<HTMLInputElement>()

const keywordsCountOnLimit = computed(
  () => props.selectedsLimit !== undefined && props.selecteds.length >= props.selectedsLimit,
)
const keywordsExceptSelecteds = computed(() => props.keywords.filter((keyword) => !props.selecteds.includes(keyword)))

function onKeydownDelete(string: string) {
  if (string === "" && props.selecteds.length > 0) {
    emit("popSelecteds")
    inputRef.value?.focus()
  }
}
function onTagRemoved(keyword: string) {
  emit("removeSelecteds", keyword)
  queueMicrotask(() => {
    inputRef.value?.focus()
  })
}

function pushIfValid(inputElement: HTMLInputElement) {
  const input = inputElement.value
  if (props.keywords.includes(input)) {
    emit("pushSelecteds", input)
    inputElement.value = ""
  }
}
</script>

<template>
  <div class="KeywordsInput-root">
    <KeywordTag
      v-for="selected of props.selecteds"
      :key="selected"
      :keyword="selected"
      selected
      removable
      @remove="onTagRemoved(selected)" />
    <input
      ref="inputRef"
      type="text"
      list="keywords"
      :disabled="keywordsCountOnLimit"
      @keydown.delete="onKeydownDelete(($event.target as HTMLInputElement).value)"
      @keydown.enter="pushIfValid($event.target as HTMLInputElement)"
      @change="pushIfValid($event.target as HTMLInputElement)" />
  </div>
  <datalist id="keywords">
    <option
      v-for="keyword of keywordsExceptSelecteds"
      :value="keyword"></option>
  </datalist>
</template>

<style scoped>
.KeywordsInput-root {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 5px;
  background-color: white;

  border-radius: 20px;
  filter: drop-shadow(0px 4px 40px rgba(0, 0, 0, 0.25));

  padding: 12px;
  padding-bottom: 10px;

  width: min(calc(90vw - 50px), 700px);

  min-height: calc(22px + 1.5rem);
}

.KeywordsInput-root input {
  margin-left: 10px;
  flex: 1;
  border: none;
  &:focus {
    outline: none;
  }
  box-sizing: border-box;
  min-width: 10px;

  font-size: 1.3rem;
  font-weight: 600;
}
.KeywordsInput-root input:disabled {
  display: none;
}

.KeywordsInput-root option {
  color: black;
}
</style>
