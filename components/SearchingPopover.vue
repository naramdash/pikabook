<script setup lang="ts">
const rootRef = ref<HTMLDivElement>()
onMounted(() => {
  rootRef.value?.showPopover()
})

const dots = ref<string>("")
setInterval(() => {
  if (dots.value.length < 3) dots.value += "."
  else dots.value = ""
}, 800)
</script>

<template>
  <div
    ref="rootRef"
    popover
    class="SearchingPopover-root">
    <span>책을 찾는 중이에요{{ dots }}</span>
  </div>
</template>
<style scoped>
.SearchingPopover-root {
  padding: 0;
  border: none;
  margin: 0;

  background-color: rgba(0, 0, 0, 0.5);

  width: 100vw;
  height: 100vh;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    color: #fff;
    text-align: center;
    font-family: Pretendard;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
  }
}
</style>
