<script setup lang="js">
import { RouterLink } from 'vue-router'

const fetchedUsers = await fetch('https://random-data-api.com/api/v2/users?size=20&response_type=json')
const users = await fetchedUsers.json()
</script>

<template>
  <!-- <ul>
    <li v-for="user in users" :key="user.id">
      <RouterLink :to="String(user?.id)">
        {{ user.username }}
      </RouterLink>
    </li>
  </ul> -->

  <div class="wrapper">
    <div class="card" v-for="user in users" :key="user.id">
      <img class="image" :src="user.avatar" alt="Card example image" />
      <div class="card-body">
        <h4 class="card-title">Hi, I'm {{ user.first_name }}</h4>
        <RouterLink :to="String(user?.id)">
          <button class="button-title"><span> Look at my bio!</span></button>
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
/* indCard {
  display: grid;
  place-items: center;
} */
.image {
  width: auto;
  border-radius: 50%;
  border: 2px yellow solid;
  box-shadow: 4px 3px 10px yellow;
}

.card-title {
  font-size: 1rem;
  color: antiquewhite;
}

.button-title {
  width: 6rem;
  font-size: 15px;
  background-color: rgb(53, 46, 46);
  color: antiquewhite;
}
/* .wrapper {
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
} */
</style>
