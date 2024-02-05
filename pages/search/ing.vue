<template>
  <div class="h-svh w-full relative">
    <div
      class="absolute w-fit h-fit left-0 right-0 ml-auto mr-auto top-0 bottom-0 mt-auto mb-auto flex flex-col items-center gap-2">
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
