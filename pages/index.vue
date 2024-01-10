<script setup lang="ts">
import Flicking from "@egjs/vue3-flicking"
</script>

<template>
  <div class="page-index">
    <img
      class="pikabook-logo"
      src="~/assets/service_logo.png"
      alt="Service Logo" />

    <Flicking
      class="example-books"
      hideBeforeInit
      :options="{ defaultIndex: 3, circular: true }">
      <img
        class="example-book"
        src="~/assets/book_example_1.png"
        alt="book example 1" />
      <img
        class="example-book"
        src="~/assets/book_example_2.png"
        alt="book example 2" />
      <img
        class="example-book"
        src="~/assets/book_example_3.png"
        alt="book example 3" />
      <img
        class="example-book"
        src="~/assets/book_example_4.png"
        alt="book example 4" />
      <img
        class="example-book"
        src="~/assets/book_example_5.png"
        alt="book example 5" />
      <img
        class="example-book"
        src="~/assets/book_example_6.png"
        alt="book example 6" />
      <img
        class="example-book"
        src="~/assets/book_example_1.png"
        alt="book example 1" />
      <img
        class="example-book"
        src="~/assets/book_example_2.png"
        alt="book example 2" />
      <img
        class="example-book"
        src="~/assets/book_example_3.png"
        alt="book example 3" />
      <img
        class="example-book"
        src="~/assets/book_example_4.png"
        alt="book example 4" />
      <img
        class="example-book"
        src="~/assets/book_example_5.png"
        alt="book example 5" />
      <img
        class="example-book"
        src="~/assets/book_example_6.png"
        alt="book example 6" />
    </Flicking>

    <div class="sentence-1">고전 문학, 뭐 부터 읽을까?</div>

    <div class="tutorial">turorial</div>

    <NuxtLink to="/search">
      <Button> Start </Button>
    </NuxtLink>
  </div>
</template>

<style scoped>
.page-index {
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

.example-books {
  margin-bottom: 2.5rem;
  max-width: 100vw;
}
.example-book {
  width: 300px;
  max-width: 40vw;
}

.sentence-1 {
  color: #000;

  text-align: center;
  font-family: Pretendard;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 200;
  line-height: normal;

  margin-bottom: 4rem;
}

.tutorial {
  margin-bottom: 4rem;
}
</style>
