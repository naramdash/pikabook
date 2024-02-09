<script setup lang="ts">
import { genres } from "~/Genres"

const route = useRoute()
const router = useRouter()
const genre = computed(() => route.query.genre as string)
const label = computed(() => genres.find((g) => g.genre === genre.value)?.label)

const keywords = ref<string[]>([])
onMounted(() => {
  $fetch("/api/keywords").then((data) => {
    keywords.value = data
  })
})

const firstSelectedKeywords =
  typeof route.query.keyword === "undefined"
    ? []
    : typeof route.query.keyword === "string"
      ? [route.query.keyword]
      : (route.query.keyword as string[])

const selectedKeywords = ref<string[]>(firstSelectedKeywords)
watchEffect(() => {
  router?.replace({
    query: { genre: route.query.genre, keyword: selectedKeywords.value },
    replace: true,
  })
})

const progress = computed(() => (Math.min(5, 2 + selectedKeywords.value.length) / 6) * 100)

const searchingUrl = computed(() => {
  const urlSearchParams = new URLSearchParams()
  urlSearchParams.append("genre", genre.value)
  for (const keyword of selectedKeywords.value) {
    urlSearchParams.append("keyword", keyword)
  }
  return `/search/ing?${urlSearchParams.toString()}`
})

function toggleKeyword(keyword: string) {
  if (!selectedKeywords.value.includes(keyword)) selectedKeywords.value.push(keyword)
  else selectedKeywords.value = selectedKeywords.value.filter((k) => k !== keyword)
}
</script>

<template>
  <div class="h-dvh flex flex-col">
    <Header :back="true" />
    <ProgressBar :progress="progress" />

    <div class="p-8 pt-10 flex flex-col">
      <Heading
        level="h1"
        class="mb-2"
        >마음에 드는<br />단어를 고르세요</Heading
      >

      <p
        v-if="label"
        class="text-sm mb-4">
        {{ label }}에서 선택 중...
      </p>

      <div
        v-if="selectedKeywords.length === 0"
        class="empty-selected bg-white rounded-full w-fit py-3 px-6 flex flex-row items-center">
        <img
          class="inline h-5 mr-2"
          src="/assets/emoji/warning.svg" />
        <span> 단어를 3개 이상 선택해주세요 </span>
      </div>
      <div
        v-else
        class="selected-container w-screen -ml-8 px-6 scrollbar-hide">
        <div class="w-max space-x-2">
          <div
            v-for="keyword in selectedKeywords"
            :key="keyword"
            class="selected rounded-full w-max py-3 px-4 inline-flex flex-row items-center gap-1 text-white text-sm font-semibold">
            <span>{{ keyword }}</span>
            <button
              type="button"
              class="flex items-center justify-center"
              @click="toggleKeyword(keyword)">
              <UIcon
                width="16"
                height="16"
                name="i-material-symbols-close"
                dynamic />
            </button>
          </div>
        </div>
      </div>
    </div>

    <div
      class="keywords flex-1 bg-white pt-10 px-14 pb-20 text-center space-x-2 space-y-2 overflow-scroll scrollbar-hide">
      <button
        v-for="keyword in keywords"
        :key="keyword"
        type="button"
        :class="{ selected: selectedKeywords.includes(keyword) }"
        class="keyword rounded-full w-max py-3 px-4 inline-flex flex-row items-center gap-1 text-white text-sm font-semibold"
        @click="toggleKeyword(keyword)">
        {{ keyword }}
      </button>
    </div>
    <NuxtLink
      v-if="selectedKeywords.length >= 3"
      class="search-button fixed bottom-0 w-screen text-white py-4 text-center"
      :to="searchingUrl">
      다 골랐어요
    </NuxtLink>
  </div>
</template>

<style scoped>
p {
  color: #54545499;
}

.empty-selected {
  filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.2));
  color: #54545499;
}

.selected-container {
  overflow-y: hidden;
  overflow-x: none;
  padding-top: 2px;
  padding-bottom: 2px;
}

.keywords {
  border-top-left-radius: 3rem;
  border-top-right-radius: 3rem;
  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.25));
}

.keyword {
  background-color: #bdbdbd;
}
.selected {
  background-color: #00960f;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

/* For IE, Edge and Firefox */
.scrollbar-hide {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.search-button {
  background-color: #000000a6;
}
</style>
