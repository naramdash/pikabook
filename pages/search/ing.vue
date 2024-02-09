<script setup lang="ts">
const route = useRoute()
const router = useRouter()

const urlSearchParams = new URLSearchParams(route.fullPath)
$fetch(`/api/books?${urlSearchParams.toString()}`).then((data) => {
  setTimeout(() => {
    router.push({ path: "/result", query: { isbn: data.map((book) => book.isbn) } })
  }, 700)
})
</script>

<template>
  <div class="h-dvh w-full relative">
    <div class="logo absolute w-fit h-fit left-0 right-0 ml-auto mr-auto flex flex-col items-center gap-2">
      <img
        class="w-12"
        src="~/assets/rect_logo.svg"
        alt="Service Logo" />
      <img
        src="~/assets/service_logo.svg"
        alt="Service Logo" />
    </div>

    <div
      class="absolute w-fit h-fit left-0 right-0 ml-auto mr-auto bottom-20 flex flex-col items-center gap-2 overflow-hidden">
      <p>책을 찾는 중이에요</p>
      <div class="bar-container bg-gray-400 w-full h-3 rounded-full">
        <div class="bar h-3 rounded-full"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.logo {
  top: 42%;
}
.bar {
  background-color: #00960f;
  border-radius: inherit;

  animation-duration: 3s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-name: increasewidth;
}

@keyframes increasewidth {
  from {
    width: 10%;
  }
  to {
    width: 100%;
  }
}
</style>
