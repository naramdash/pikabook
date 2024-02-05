<script setup lang="ts">
import { genres } from "~/Genres"

const route = useRoute()
const genre = computed(() => route.query.genre as string)
const label = computed(() => genres.find((g) => g.genre === genre.value)?.label)

const selectedKeywords = ref<string[]>([])
const progress = computed(() => ((2 + selectedKeywords.value.length) / 6) * 100)
</script>

<template>
  <div class="h-svh flex flex-col">
    <Header back />
    <ProgressBar :progress="progress" />

    <div class="p-6 pt-10 flex flex-col">
      <Heading level="h1">마음에 드는<br />단어를 고르세요</Heading>

      <p v-if="label">{{ label }}에서 선택 중...</p>
    </div>

    <div
      class="flex-1 bg-white keywords pt-12 p-20 pb-20 flex flex-row gap-4 items-start flex-wrap justify-center overflow-scroll scrollbar-hide">
      <button type="button">자연의 아름다움</button>
      <button type="button">고립</button>
      <button type="button">자연의 아름다움</button>
      <button type="button">고립</button>
      <button type="button">자연의 아름다움</button>
      <button type="button">고립</button>
      <button type="button">자연의 아름다움</button>
      <button type="button">고립</button>
      <button type="button">자연의 아름다움</button>
      <button type="button">고립</button>
      <button type="button">자연의 아름다움</button>
      <button type="button">고립</button>
      <button type="button">자연의 아름다움</button>
      <button type="button">고립</button>
      <button type="button">자연의 아름다움</button>
      <button type="button">고립</button>
      <button type="button">자연의 아름다움</button>
      <button type="button">고립</button>
      <button type="button">자연의 아름다움</button>
      <button type="button">고립</button>
      <button type="button">자연의 아름다움</button>
      <button type="button">고립</button>
      <button type="button">자연의 아름다움</button>
      <button type="button">고립</button>
      <button type="button">자연의 아름다움</button>
      <button type="button">고립</button>
      <button type="button">자연의 아름다움</button>
      <button type="button">고립</button>
      <button type="button">자연의 아름다움</button>
      <button type="button">고립</button>
      <button type="button">자연의 아름다움</button>
      <button type="button">고립</button>
      <button type="button">자연의 아름다움</button>
      <button type="button">고립</button>
      <button type="button">자연의 아름다움</button>
      <button type="button">고립</button>
      <button type="button">자연의 아름다움</button>
      <button type="button">고립</button>
      <button type="button">자연의 아름다움</button>
      <button type="button">고립</button>
      <button type="button">자연의 아름다움</button>
      <button type="button">고립</button>
      <button type="button">자연의 아름다움</button>
      <button type="button">고립</button>
      <button type="button">자연의 아름다움</button>
      <button type="button">고립</button>
      <button type="button">자연의 아름다움</button>
      <button type="button">고립</button>
      <button type="button">자연의 아름다움</button>
      <button type="button">고립</button>
      <button type="button">자연의 아름다움</button>
      <button type="button">고립</button>
      <button type="button">자연의 아름다움</button>
      <button type="button">고립</button>
      <button type="button">자연의 아름다움</button>
      <button type="button">고립</button>
      <button type="button">자연의 아름다움</button>
      <button type="button">고립</button>
      <button type="button">자연의 아름다움</button>
      <button type="button">고립</button>
      <button type="button">자연의 아름다움</button>
      <button type="button">고립</button>
      <button type="button">자연의 아름다움</button>
      <button type="button">고립</button>
      <button type="button">자연의 아름다움</button>
      <button type="button">고립</button>
      <button type="button">자연의 아름다움</button>
      <button type="button">고립</button>
      <button type="button">자연의 아름다움</button>
      <button type="button">고립</button>
      <button type="button">자연의 아름다움</button>
      <button type="button">고립</button>
      <button type="button">자연의 아름다움</button>
      <button type="button">고립</button>
      <button type="button">자연의 아름다움</button>
      <button type="button">고립</button>
      <button type="button">자연의 아름다움</button>
      <button type="button">고립</button>
      <button type="button">자연의 아름다움</button>
      <button type="button">고립</button>
      <button type="button">자연의 아름다움</button>
      <button type="button">고립</button>
      <button type="button">자연의 아름다움</button>
      <button type="button">고립</button>
      <button type="button">자연의 아름다움</button>
      <button type="button">고립</button>
      <button type="button">자연의 아름다움</button>
      <button type="button">고립</button>
      <button type="button">자연의 아름다움</button>
      <button type="button">고립</button>
      <button type="button">자연의 아름다움</button>
      <button type="button">고립</button>
      <button type="button">자연의 아름다움</button>
      <button type="button">고립</button>
      <button type="button">자연의 아름다움</button>
      <button type="button">고립</button>
    </div>
  </div>
</template>

<style scoped>
p {
  color: #54545499;
}

.keywords {
  border-top-left-radius: 3rem;
  border-top-right-radius: 3rem;
  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.25));
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

/* For IE, Edge and Firefox */
.scrollbar-hide {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
