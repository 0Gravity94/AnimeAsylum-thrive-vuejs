<script setup lang="js">
import { RouterLink } from 'vue-router'

// const fetchedUsers = await fetch('https://random-data-api.com/api/v2/users?size=20&response_type=json')
const fetchedAnimes = await fetch('https://api.jikan.moe/v4/anime')
const animes = await fetchedAnimes.json()
const result = animes.data;
console.log(result)
</script>

<template>
  <!-- <div class="wrapper">
    <div class="card" v-for="user in users" :key="user.id">
      <img class="image" :src="user.avatar" alt="Card example image" />
      <div class="card-body">
        <h4 class="card-title">Hi, I'm {{ user.last_name }}</h4>
        <RouterLink :to="String(user?.id)">
          <button class="button-title"><span> Team Bio! </span></button>
        </RouterLink>
      </div>
    </div>
  </div> -->
  <div class="wrapper">
    <div class="card" v-for="detail in result" :key="detail.mal_id">
      <img class="image" :src="detail.images.jpg.image_url" alt="Card example image" />
      <div class="card-body">
        <h4 class="card-title">{{ detail.title }}</h4>
        <RouterLink :to="String(detail?.mal_id)">
          <button class="button-title">Detail</button>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  width: 40rem;
  margin-top: 2rem;
  margin-bottom: 4rem;
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  column-gap: 4rem;
  row-gap: 2rem;
}
.card {
  width: 10rem;
  padding: 1rem;
  vertical-align: middle;
  box-shadow: 5px 5px 5px aquamarine;
}

.card:hover {
  scale: 1.1;
}

.image {
  width: auto;
  border: 2px yellow solid;
  box-shadow: 4px 3px 10px yellow;
}

.card-title {
  font-size: 15px;
  color: antiquewhite;
}

.button-title {
  width: 6rem;
  font-size: 15px;
  background-color: dark;
}
</style>
