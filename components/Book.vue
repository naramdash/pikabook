<script setup lang="ts">
const props = defineProps<{
  imgSrc: string
  title: string
  author: string
  summary: string
  purchaseLink: string
}>()
</script>

<template>
  <div class="Book-root">
    <img
      class="book-cover"
      src="~/assets/book_example_1.png"
      alt="book" />
    <div class="description-and-buy">
      <div class="description">
        <div class="title">{{ props.title }}</div>
        <div class="author">{{ props.author }}</div>
        <div class="summary">{{ props.summary }}</div>
      </div>
      <NuxtLink
        class="buy-link"
        target="_blank"
        :to="props.purchaseLink">
        <Button class="buy"> 구매하러 가기 </Button>
      </NuxtLink>
    </div>
  </div>
</template>
<style scoped>
.Book-root {
  border-radius: 30px;
  background: #fff;
  box-shadow: 0px 4px 50px 0px rgba(0, 0, 0, 0.25);

  padding: 30px;

  display: flex;
  flex-direction: column;

  gap: 1rem;

  max-width: 70vw;
}

.book-cover {
  object-fit: cover;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  max-height: 400px;
}

.description-and-buy {
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.description {
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 2rem;

  .title {
    color: #000;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
  }

  .author {
    color: #000;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .description {
    color: #000;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: 25px; /* 178.571% */
  }
}

.buy-link {
  margin-left: auto;
  margin-top: 2rem;
}
.buy {
  border: none;
  border-radius: 100px;
  background: var(--Pikabook-green, #00960f);

  font-size: 1rem;
  padding: 0.5rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;

  color: #fff;
}
</style>
