<script setup lang="ts">
import { genres } from "~/Genres"
</script>

<template>
  <Header back />
  <ProgressBar :progress="(1 / 6) * 100" />

  <div class="p-6 pt-10">
    <Heading level="h2"> 장르를 선택하세요 </Heading>

    <div class="grid grid-cols-4 grid-rows-2 gap-3">
      <GenreButton
        v-for="{ img, genre, label } in genres"
        :img="img"
        :label="label"
        @click="$router.push('/search/keywords?genre=' + genre)" />
    </div>
  </div>
</template>

<style scoped>
button {
  filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.2));
}
</style>
