<script setup lang="js">
import { Suspense } from 'vue';
import UserList from '@/components/user-list.vue'
</script>

<template>
  <div class="container">
    <h1>Welcome!</h1>
    <Suspense>
      <UserList />
      <template #fallback> wait a moment </template>
    </Suspense>
  </div>
</template>

<style>
.container {
  display: grid;
  place-items: center;
  height: auto;
  padding-bottom: 4rem;
}

h1 {
  color: antiquewhite;
  text-shadow: 2px 2px 2px palevioletred;
}
</style>
