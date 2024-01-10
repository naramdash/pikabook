<template>
  <button
    class="Button-root"
    type="button">
    <slot></slot>
  </button>
</template>
<style scoped>
.Button-root {
  padding-top: 0.2rem;
  padding-left: 4rem;
  padding-bottom: 0.4rem;
  padding-right: 4rem;
  border: 0;
  border-radius: 100px;
  background: var(--Pikabook-light-grey, #d2d2d2);

  color: #fff;

  text-align: center;
  font-family: Pretendard;
  font-size: 3rem;
  font-weight: 800;
}
</style>
