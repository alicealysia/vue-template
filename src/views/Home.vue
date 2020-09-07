<template>
  <div class="home">
    <div class="darken">
      <spacer />
      <spacer />
      <h1> {{siteName}} </h1>
      <container>
        <strong>  Coming Soon! </strong>
        <p> An exciting new project from MIT services </p>
      </container>
    </div>
    <spacer />
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      siteName: 'MIT Business Consulting Australia'
    }
  }
}
</script>

<style scoped>
  .home {
  color: black;
  }
</style>
