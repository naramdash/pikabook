<script setup lang="ts">
import Flicking, { Panel, type MoveEvent } from "@egjs/vue3-flicking"

const route = useRoute()

const isbns =
  typeof route.query.isbn === "undefined"
    ? []
    : typeof route.query.isbn === "string"
      ? [route.query.isbn]
      : (route.query.isbn as string[])

type Book = {
  isbn: string
  imageUrl: string
  title: string
  author: string
  description: string
  storeUrl: string
}
const books = ref<Book[]>([])
onMounted(() => {
  $fetch("/api/books", { params: isbns }).then((data) => {
    books.value = data
  })
})
const currentIndex = ref(0)
const currentBook = computed(() => books.value[currentIndex.value])

const flicking = ref<Flicking | null>(null)
watchEffect(() => {
  if (flicking.value) flicking.value.panels.forEach(setPanelSize)
})

const changingIndex = ref(false)
function changeCurrentIndex(index: number) {
  if (changingIndex.value || flicking.value == null) return

  changingIndex.value = true
  currentIndex.value = index
  flicking.value.moveTo(index).then(() => {
    changingIndex.value = false
  })
}

function changeStyleByOffset(event: MoveEvent<Flicking>) {
  event.currentTarget.panels.forEach(setPanelSize)
}

function setPanelSize(panel: Panel) {
  const diff = Math.min(Math.abs(panel.progress), 1)
  panel.element.style.width = `${144 - 144 * diff * 0.2}px`
  panel.element.style.marginLeft = `${12 + 144 * diff * 0.1}px`
  panel.element.style.marginRight = `${12 + 144 * diff * 0.1}px`
}
</script>

<template>
  <Header />

  <Heading
    level="h1"
    class="pl-8 mb-8">
    당신이 Pick한 <br />
    책이에요
  </Heading>

  <div
    v-if="books.length > 0"
    :class="{ 'pointer-events-none': changingIndex }">
    <div class="mb-6">
      <Flicking
        ref="flicking"
        class="flicking w-screen h-72 py-5"
        hideBeforeInit
        firstPanelSize="144px"
        :options="{ defaultIndex: 0 }"
        @select="changeCurrentIndex($event.index)"
        @changed="changeCurrentIndex($event.currentTarget.index)"
        @move="changeStyleByOffset($event as any)">
        <img
          v-for="book in books"
          :key="book.isbn"
          class="book-image object-contain mx-3 w-36 self-end"
          fetchpriority="high"
          :src="book.imageUrl" />
      </Flicking>
      <div class="w-fit ml-auto mr-auto font-extrabold text-2xl space-x-1">
        <span
          v-for="(book, index) of books"
          :key="book.isbn"
          class="select-none cursor-pointer"
          :class="[index === currentIndex ? 'text-gray-700' : 'text-gray-400']"
          @click="changeCurrentIndex(index)"
          >•</span
        >
      </div>
    </div>

    <div
      v-if="currentBook"
      class="px-8 flex flex-col items-center">
      <h1 class="font-extrabold text-xl mb-4">{{ currentBook.title }}</h1>
      <div class="font-medium text-gray-400 mb-10">{{ currentBook.author }}</div>
      <p class="first-letter:ml-4 self-start min-h-40 mb-6">{{ currentBook.description }}</p>
      <NuxtLink
        :to="currentBook.storeUrl"
        target="_blank">
        <MainButton class="block ml-auto mr-auto">자세히 보기</MainButton>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.book-image {
  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.25));
  max-width: none;
}
</style>
