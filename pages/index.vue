<script setup lang="ts">
import Flicking, { type MoveEndEvent } from "@egjs/vue3-flicking"
</script>

<template>
  <img
    src="~/assets/service_logo.png"
    alt="Service Logo" />

  <div>images 고전 문학, 뭐 부터 읽을까?</div>

  <Flicking :options="{ circular: true }">
    <div
      class="panel"
      style="background-color: blue">
      1
    </div>
    <div class="panel">2</div>
    <div class="panel">3</div>
    <div class="panel">4</div>
    <div class="panel">5</div>
    <div class="panel">6</div>
    <div class="panel">7</div>
    <div class="panel">8</div>
    <div class="panel">9</div>
  </Flicking>

  <NuxtLink to="/search">
    <button type="button">start</button>
  </NuxtLink>
</template>

<style scoped>
.panel {
  width: 100px;
  height: 100px;
  background-color: black;
  margin-right: 10px;
}
</style>
