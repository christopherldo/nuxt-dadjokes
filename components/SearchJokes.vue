<template>
  <form @submit.prevent="onSubmit">
    <input v-model="text" type="text" placeholder="Search Jokes...">
    <input type="submit" value="Search Jokes">
  </form>
</template>

<script>
export default {
  name: 'SearchJokes',
  data() {
    return {
      text: ''
    };
  },
  methods: {
    onSubmit() {
      this.$emit('search-text', this.text);
    },
  }
}
</script>

<style lang="scss" scoped>
  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 10px;

    &[type="submit"] {
      background: #526488;
      color: #fff;
    }
  }
</style>
