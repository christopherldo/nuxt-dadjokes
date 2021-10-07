.<template>
  <div>
    <Joke v-for="joke in jokes" :id="joke.id" :key="joke.id" :joke="joke.joke" />
  </div>
</template>

<script>
import axios from 'axios';
import Joke from '../../components/Joke.vue';

export default {
  components: {
    Joke,
  },
  data() {
    return {
      jokes: [],
    };
  },
  head() {
    return {
      title: 'Dad Jokes',
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

    try {
      const res = await axios.get('https://icanhazdadjoke.com/search', config);

      this.jokes = res.data.results;
    } catch (error) {
      alert(error);
    }
  }
}
</script>

<style>

</style>
