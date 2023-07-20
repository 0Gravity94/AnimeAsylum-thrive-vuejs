<script setup lang="js">
import { Suspense } from 'vue';
import UserDetail from '@/components/user-detail.vue'
</script>

<template>
  <div class="container">
    <Suspense>
      <UserDetail />
      <template #fallback> wait a moment </template>
    </Suspense>
  </div>
</template>

<style>
.container {
  display: grid;
  place-items: center;
  height: max-content;
}

h1 {
  color: antiquewhite;
  text-shadow: 2px 2px 2px palevioletred;
}
</style>
