<template>
  <div class="joke">
    <p>{{ joke }}</p>
  </div>
</template>

<script>
export default {
  name: 'Joke',
  props: {
    'joke': {
      type: String,
      required: true,
    },
    'id': {
      type: Number,
      required: true,
    }
  },
}
</script>

<style lang="scss" scoped>
  .joke {
    padding: 1rem;
    border: 1px dotted #ccc;
    margin: 1rem 0;
  }
</style>
