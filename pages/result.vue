<script setup lang="ts">
const index = 1
</script>

<template>
  <Header />

  <Heading
    level="h1"
    class="pl-6">
    당신이 Pick한 <br />
    책이에요
  </Heading>

  <div>carousel</div>

  <div class="w-fit ml-auto mr-auto font-extrabold text-2xl">
    <span class="text-gray-400">•</span>
    <span class="text-gray-400">•</span>
    <span class="text-gray-700">•</span>
    <span class="text-gray-400">•</span>
    <span class="text-gray-400">•</span>
  </div>

  <div class="px-6 flex flex-col items-center">
    <h1>세계의 끝과 하드보일드 원더랜드</h1>
    <div>무라카미 하루키</div>

    <p class="first-letter:ml-4 self-start">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur autem possimus sunt dicta perspiciatis quis
      temporibus incidunt vel laborum fugit nam earum modi architecto, tempore laboriosam. Perferendis quod voluptate
      rerum?
    </p>
  </div>
  <MainButton class="block ml-auto mr-auto">자세히 보기</MainButton>
</template>
