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
  "english only",
]
const selecteds = ref<string[]>([])

function pushIfValid(input: string) {
  if (keywords.includes(input) && !selecteds.value.includes(input)) selecteds.value.push(input)
}
</script>

<template>
  <div class="page-search-root">
    <img
      class="pikabook-logo"
      src="~/assets/service_logo.png"
      alt="Service Logo" />

    <div class="sentence-1"><span>마음에 드는</span><span>단어를 3개 고르세요</span></div>

    <KeywordsInput
      :selectedsLimit="3"
      :keywords="keywords"
      :selecteds="selecteds"
      @popSelecteds="selecteds.pop()"
      @pushSelecteds="pushIfValid($event)"
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
      <li>
        <KeywordTag
          class="example-keyword"
          keyword="적자생존" />
      </li>
      <li>
        <KeywordTag
          class="example-keyword"
          keyword="적자생존" />
      </li>
    </ul>

    <Button class="refresh"> 마음에 드는 단어가 없어요 </Button>

    <SearchingPopover />
  </div>
</template>

<style scoped>
.page-search-root {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  padding-top: 2rem;
  padding-bottom: 4rem;
}

.pikabook-logo {
  margin-bottom: 4rem;
}

.sentence-1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2em;

  span {
    display: block;

    color: #000;

    text-align: center;
    font-family: Pretendard;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
  }

  margin-bottom: 1rem;
}

.page-search-root ul {
  list-style: none;

  padding: 0;
  margin: 0;
  margin-top: 3rem;

  display: grid;
  grid-template-columns: 1fr 1fr;

  gap: 1rem;
}

.example-keyword {
  width: min(30vw, 10em);
  /* filter: drop-shadow(0px 4px 40px rgba(0, 0, 0, 0.25)); */
}

button.refresh {
  font-size: 1.2rem;
  padding: 0.5em;
  padding-left: 2em;
  padding-right: 2em;
}
</style>
