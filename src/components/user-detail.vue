<script setup lang="js">
import { ref, watchEffect } from 'vue'
import { RouterView, useRoute } from 'vue-router'

const isLoading = ref(false)
const { params } = useRoute()
const animeId = params.animeId

const fetchedAnimeDetail = await fetch(`https://api.jikan.moe/v4/anime/${animeId}`)
const animeDetail = await fetchedAnimeDetail.json()
const result = animeDetail.data
console.log(result)
</script>

<template>
  <div class="margin-top">
    <RouterLink class="backTitle" to="/">Back</RouterLink>
    <RouterView />

    <div class="wrapper">
      <div class="row flex-spaces">
        <div class="col-4 col">
          <img :src="result.images.webp.large_image_url" alt="Card example image" />
        </div>
        <div class="col-8 col">
          <h1 class="title1">{{ result.title }}</h1>
          <h2 class="title2">{{ result.title_japanese }}</h2>
          <div class="details">
            <p>Duration per episode : {{ result.duration }}</p>
            <p>Rating : {{ result.rating }}</p>
            <p>Rank : {{ result.rank }}</p>
            <p>Popularity : {{ result.popularity }}</p>
          </div>
        </div>
      </div>
      <div class="sypContainer">
        <p class="synopsis">" {{ result.synopsis }} "</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.backTitle {
  font-size: 1rem;
  color: coral;
}
.wrapper {
  display: grid;
}
.title1 {
  font-size: 2rem;
}
.title2 {
  font-size: 1rem;
  color: wheat;
}
.details p {
  font-size: 1rem;
  color: whitesmoke;
}

.sypContainer {
  width: 100%;
  height: 100%;
  background-color: rgb(74, 25, 25);
  padding: 1rem;
  border-radius: 5%;
}
.synopsis {
  font-size: 1rem;
  color: whitesmoke;
}
</style>
