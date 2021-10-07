<template>
  <div>
    <nuxt-link to="/jokes">Back To Jokes</nuxt-link>
    <h2>{{ joke }}</h2>
    <hr>
    <small>Joke ID: {{ $route.params.id }}</small>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      joke: '',
    };
  },
  head() {
    return {
      title: this.joke,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Best place for corny dad jokes'
        }
      ]
    };
  },
  async created() {
    const config = {
      headers: {
        'Accept': 'application/json',
      }
    }

    const id = this.$route.params.id;

    try {
      const res = await axios.get(`https://icanhazdadjoke.com/j/${id}`, config);

      this.joke = res.data.joke;
    } catch (error) {
      alert(error);
    }
  },
};
</script>

<style>

</style>
