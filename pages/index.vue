<template>
  <Header />

  <div class="p-6 pt-10 flex flex-col">
    <Heading level="h2"> 고전 문학, <br />뭐 부터 읽을까? </Heading>

    <div class="self-center">carousel</div>

    <Heading level="h2"> 당신이 원하는 <br />이야기를 찾아드려요 </Heading>

    <div class="self-center">blocks</div>

    <Heading
      level="h1"
      class="text-center">
      지금 바로 <br />Pick 해보세요 !
    </Heading>

    <MainButton
      class="self-center"
      @click="$router.push('/search/genre')">
      START
    </MainButton>
  </div>
</template>
