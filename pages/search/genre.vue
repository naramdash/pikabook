<script setup lang="ts">
import { genres } from "~/Genres"
</script>

<template>
  <Header :back="true" />
  <ProgressBar :progress="(1 / 6) * 100" />

  <div class="p-8 pt-10 pb-32 space-y-8">
    <Heading level="h2"> 장르를 선택하세요 </Heading>

    <div class="flex flex-row flex-wrap justify-between gap-4">
      <!-- <div class="grid grid-cols-4 grid-rows-2 gap-3"> -->
      <GenreButton
        v-for="{ img, genre, label } in genres"
        :img="img"
        :label="label"
        @click="$router.push('/search/keywords?genre=' + genre)" />
    </div>
  </div>
</template>
