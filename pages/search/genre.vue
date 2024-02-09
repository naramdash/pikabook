<script setup lang="ts">
import { genres } from "~/Genres"
</script>

<template>
  <Header :back="true" />
  <ProgressBar :progress="(1 / 6) * 100" />

  <div class="p-8 pt-10 pb-32 space-y-8">
    <Heading level="h2"> 장르를 선택하세요 </Heading>

    <div class="flex flex-row flex-wrap justify-between gap-4">
      <GenreButton
        v-for="{ img, genre, label } in genres"
        :img="img"
        :label="label"
        :to="'/search/keywords?genre=' + genre" />
    </div>
  </div>
</template>
