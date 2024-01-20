<script setup lang="ts">
const visible = ref(60)
const topPx = computed(() => {
  return `calc(100dvh - ${visible.value}px)`
})

function onPointerDown(e: PointerEvent) {
  const abort = new AbortController()

  const startY = e.clientY
  const startTopY = startY - e.offsetY
  const onDragging = (e: MouseEvent | TouchEvent) => {
    const isTouchEvent = e instanceof TouchEvent
    if (isTouchEvent && e.touches.length > 1) return

    const currentY = isTouchEvent ? e.touches[0].clientY : e.clientY
    const yDiff = currentY - startY
    const nextTopY = startTopY + yDiff
    requestAnimationFrame(() => {
      visible.value = window.innerHeight - nextTopY
    })
  }
  const onDragStopped = (e: MouseEvent | TouchEvent) => {
    abort.abort()
  }

  window.addEventListener("mousemove", onDragging, { signal: abort.signal })
  window.addEventListener("mouseup", onDragStopped, { signal: abort.signal })
  window.addEventListener("touchmove", onDragging, { signal: abort.signal })
  window.addEventListener("touchend", onDragStopped, { signal: abort.signal })
}
</script>

<template>
  <div
    ref="rootRef"
    class="Drawer-root">
    <div
      ref="dragHandleRef"
      class="drag-handle"
      @pointerdown="onPointerDown">
      <UIcon
        class="drag-handle-icon"
        name="i-radix-icons-hamburger-menu"
        :dynamic="true" />
    </div>
  </div>
</template>

<style scoped>
.Drawer-root {
  background-color: whitesmoke;

  margin-left: 30px;
  margin-right: 30px;
  width: calc(100vw - 30px * 2);
  height: calc(100vh - 50px);
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;

  position: fixed;
  top: v-bind(topPx);
}

.drag-handle {
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;

  min-height: calc(30px + 40px);

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgb(243, 243, 243);
}
.drag-handle:active {
  background: rgb(191, 191, 191);
}

.drag-handle-icon {
  font-size: larger;
  pointer-events: none;
}

:global(body) {
  overscroll-behavior: none;
}
</style>
