<script setup lang="ts">
function share() {
  navigator.share({
    title: "PikaBook 결과 공유",
    url: window.location.href,
  })
}
</script>

<template>
  <img
    src="~/assets/service_logo.png"
    alt="Service Logo" />

  <div>당신이 선택한 이야기는 다음과 같습니다</div>

  <input type="text" />

  <ul>
    <li>book</li>
    <li>book</li>
    <li>book</li>
    <li>book</li>
    <li>book</li>
  </ul>

  <div>
    <button
      type="button"
      @click="share">
      공유하기
    </button>
    |
    <NuxtLink to="/search"> 다시하기 </NuxtLink>
  </div>
</template>
