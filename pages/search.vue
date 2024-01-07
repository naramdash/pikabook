<script setup lang="ts">
const keywords = [
  "가족",
  "감동",
  "사랑",
  "사랑해요",
  "교훈",
  "감사하무니다",
  "민음사 걸작 선정 2024",
  "SPA 미스터리 대회 수상작",
] as const
const selecteds = ref<string[]>([])
</script>

<template>
  <img
    src="~/assets/service_logo.png"
    alt="Service Logo" />

  <div>마음에 드는 단어를 3개 고르세요</div>

  <KeywordsInput
    :selectedsLimit="3"
    :keywords="keywords"
    :selecteds="selecteds"
    @popSelecteds="selecteds.pop()"
    @pushSelecteds="selecteds.push($event)"
    @removeSelecteds="selecteds = selecteds.filter((s) => s !== $event)" />

  <ul>
    <li>
      <KeywordTag
        class="example-keyword"
        keyword="문명" />
    </li>
    <li>
      <KeywordTag
        class="example-keyword"
        keyword="늑대개" />
    </li>
    <li>
      <KeywordTag
        class="example-keyword"
        keyword="고독" />
    </li>
    <li>
      <KeywordTag
        class="example-keyword"
        selected
        keyword="마술" />
    </li>
    <li>
      <KeywordTag
        class="example-keyword"
        keyword="죽음" />
    </li>
    <li>
      <KeywordTag
        class="example-keyword"
        keyword="적자생존" />
    </li>
  </ul>

  <button type="button">마음에 드는 단어가 없어요</button>
</template>

<style scoped>
.example-keyword {
  width: 10em;
  filter: drop-shadow(0px 4px 40px rgba(0, 0, 0, 0.25));
}
</style>
