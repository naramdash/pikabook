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
  if (props.keywords.includes(input) && !props.selecteds.includes(input)) {
    emit("pushSelecteds", input)
    inputElement.value = ""
  }
}
</script>

<template>
  <div class="KeywordsInput-root">
    <div class="tags">
      <KeywordTag
        v-for="selected of props.selecteds"
        :key="selected"
        :keyword="selected"
        selected
        removable
        @remove="onTagRemoved(selected)" />
    </div>
    <input
      ref="inputRef"
      type="text"
      list="keywords"
      :disabled="keywordsCountOnLimit"
      @keydown.delete="onKeydownDelete(($event.target as HTMLInputElement).value)"
      @keydown.enter="pushIfValid($event.target as HTMLInputElement)"
      @change="pushIfValid($event.target as HTMLInputElement)" />

    <datalist id="keywords">
      <option
        v-for="keyword of keywordsExceptSelecteds"
        :value="keyword"></option>
    </datalist>
  </div>
  <button
    type="button"
    @click="selecteds.length = 1">
    검색하기
  </button>
</template>

<style scoped>
.KeywordsInput-root {
  display: flex;
  background-color: white;

  border-radius: 20px;
  filter: drop-shadow(0px 4px 50px rgba(0, 0, 0, 0.85));

  padding: 12px;

  max-width: 50vw;
  max-width: min(90vw, 800px);
}

.tags {
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 5px;
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
  width: 0px;
  background: transparent;
}
</style>
