<template>
  <div class="container mx-auto py-16 p-6">
    <h1 class="font-heading uppercase font-black text-4xl text-center font-heading font-sans mb-14">The Most Hyped Up Games Ever</h1>
    <h1 class="font-heading text-2xl text-center font-heading font-sans mb-12">Using Twitch's IGDB API, we're pulling up the games that had the most levels of hype</h1>
    <div class="game-container flex flex-wrap -mx-4">
      <nuxt-link :to="'/games/' + game.id" v-for="game in games" :key="game.id" class="w-full md:w-1/5 px-4 mb-12 no-underline">
        <img :src="game.cover.url.replace('t_thumb', 't_cover_big')" alt="cover">
        <div class="text-black font-semibold text-lg overflow-hidden whitespace-no-wrap overflow-dots">{{ game.name }}</div>
        <div class="text-grey-darker text-base overflow-hidden whitespace-no-wrap overflow-dots pb-1">{{ game.genres[0].name }}</div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import '../assets/main.css'


export default {
  components : {
    
  },
  asyncData({ params, error }) {
    const proxyurl = 'https://cors-anywhere.herokuapp.com/'
    return axios
      .get(`${proxyurl}https://api.igdb.com/v4/games/?fields=name,genres.name,cover.url,hypes&order=hypes`)
      .then(res => {
        return { 
          games: res.data 
          }
      })
      .catch(e => {
        console.log(e)
      })
  },
  data() {
    return {
      games: []
    }
  }
}
</script>

<style>
</style>
