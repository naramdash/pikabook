<script setup lang="ts">
import Flicking from "@egjs/vue3-flicking"
import { SearchPageMeta } from "~/constants/SeoMeta"

useSeoMeta(SearchPageMeta)

function resizeFlicking() {
  const flicking = document.querySelector(".flicking") as HTMLDivElement
  if (flicking) flicking.style.width = document.body.clientWidth - 2 + "px"
}
onMounted(() => {
  document.body.addEventListener("resize", resizeFlicking)
})
onUnmounted(() => {
  document.body.removeEventListener("resize", resizeFlicking)
})
</script>

<template>
  <Header />

  <div class="p-8 pt-10 pb-32 flex flex-col space-y-12">
    <Heading level="h2"> 고전 문학, <br />뭐 부터 읽을까? </Heading>

    <Flicking
      :options="{ align: 'prev', circular: true }"
      :hideBeforeInit="true"
      class="flicking -ml-8 w-svw h-72 space-x-3">
      <img src="/assets/books/book_example_1.png" />
      <img src="/assets/books/book_example_2.png" />
      <img src="/assets/books/book_example_3.png" />
      <img src="/assets/books/book_example_4.png" />
      <img src="/assets/books/book_example_5.png" />
      <img src="/assets/books/book_example_6.png" />
      <img src="/assets/books/book_example_1.png" />
      <img src="/assets/books/book_example_2.png" />
      <img src="/assets/books/book_example_3.png" />
      <img src="/assets/books/book_example_4.png" />
      <img src="/assets/books/book_example_5.png" />
      <img src="/assets/books/book_example_6.png" />
    </Flicking>

    <Heading level="h2"> 당신이 원하는 <br />이야기를 찾아드려요 </Heading>

    <div class="-ml-8 w-screen flex flex-col items-center gap-6">
      <div class="guide-box rounded-xl bg-white w-4/5 pt-5 pb-6 flex flex-col items-center gap-2">
        <span>01</span>
        <span class="font-semibold text-center"> 장르를 <br />선택하세요 </span>
      </div>
      <div class="guide-box rounded-xl bg-white w-4/5 pt-5 pb-6 flex flex-col items-center gap-2">
        <span>02</span>
        <span class="font-semibold text-center"> 마음에 드는 <br />단어를 고르세요 </span>
      </div>
      <div class="guide-box rounded-xl bg-white w-4/5 pt-5 pb-6 flex flex-col items-center gap-2">
        <span>03</span>
        <span class="font-semibold text-center"> 추천된 책을 <br />읽어보세요 </span>
      </div>
    </div>

    <Heading
      level="h1"
      class="text-center">
      지금 바로 <br />Pick 해보세요 !
    </Heading>

    <NuxtLink
      class="self-center"
      to="/search/genre">
      <MainButton> START </MainButton>
    </NuxtLink>
  </div>
</template>

<style scoped>
.flicking img:not(:last-child) {
  margin-right: 10px;
}

.guide-box {
  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.2));
}
</style>
