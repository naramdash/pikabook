<script setup lang="ts">
function share() {
  navigator.share({
    title: "PikaBook 결과 공유",
    url: window.location.href,
  })
}

const selecteds = ref<string[]>(["민음사 걸작 선정 2024", "SPA 미스터리 대회 수상작", "english only"])

const bookExample = {
  imgSrc: "~/assets/book_example_1.png",
  title: "썩은 잎",
  author: "가브리엘 가르시아 마르케스",
  summary:
    "가상의 마을 마콘도, 거대한 시스템이 초대한 부정과 부패, 거부할 수 없이 치명적인 사랑과 죽음, 기나긴 세월 동안의 고독, 서로 다른 도덕과 경험이 부딪치며 만들어 내는 격렬한 순간, 이 모든 것이 시공간을 사용한 퍼즐 맞추기처럼 환상적이고도 생경한 풍경으로 독자의 마음을 사로잡는다.",
  purchaseLink: "https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=1000002",
}
</script>

<template>
  <div class="page-result">
    <img
      class="pikabook-logo"
      src="~/assets/service_logo.png"
      alt="Service Logo" />

    <div class="sentence-1">
      <span>당신이 선택한 이야기는</span>
      <span>다음과 같습니다!</span>
    </div>
    <KeywordsInput
      :selectedsLimit="3"
      :keywords="[]"
      :selecteds="selecteds" />

    <ul class="result-books">
      <li>
        <Book v-bind="bookExample" />
      </li>
      <li>
        <Book v-bind="bookExample" />
      </li>
      <li>
        <Book v-bind="bookExample" />
      </li>
      <li>
        <Book v-bind="bookExample" />
      </li>
      <li>
        <Book v-bind="bookExample" />
      </li>
    </ul>

    <div class="commands">
      <button
        class="command"
        type="button"
        @click="share">
        공유하기
      </button>
      <span class="divider"> </span>
      <NuxtLink
        to="/search"
        class="command">
        다시하기
      </NuxtLink>
    </div>
  </div>
</template>
<style scoped>
.page-result {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

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

.result-books {
  list-style: none;
  padding: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  margin-top: 3rem;
  margin-bottom: 4rem;
}

.commands {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;

  .command {
    background: none;
    border: none;
    cursor: pointer;

    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-decoration: none;
  }

  .divider {
    width: 0px;
    height: 2rem;
    border: 1px solid #000;
    font-size: 2rem;
  }
}
</style>
