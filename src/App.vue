<template>
  <div id="app">
    <fullscreen />
    <div class="darken">
      <navbar />
      <router-view/>
      <spacer />
    </div>
  </div>
</template>

<script>
import navbar from './components/navbar';
import fullscreen from './components/fullscreen';
export default {
  name: 'app',
  components: {
    navbar,
    fullscreen
  }
}
</script>

<style>

@media (orientation: landscape) and (min-width: 1281px) {
  html {
    font-size: 1vmax;
  }
  .mobile {
    display: none;
  }
}

@media (orientation: portrait), (max-width: 1280px) {
  html {
    font-size: 3vmax;
  }
  .pc {
    display: none;
  }
}
html {
  background-color: #E6E7ED;
}

button.round-big {
  border-radius: 50%;
  height: 2em;
  width: 2em;
  font-size: 2em;
  font-weight:bolder;
  font-family:"calibri light";
  color:rgb(34, 34, 34);
}
button.round-medium {
  border-radius: 50%;
  height: 2em;
  width: 2em;
}
button.round-small {
  border-radius: 50%;
  height: 1em;
  width: 1em;
}

button {
  border: 0;
  background-color:rgba(180, 180, 180, 0.8);
}

button.big {
  width: auto;
  padding: 0.25em;
  font-size: 2em;
  font-weight:bolder;
}

button:hover {
  background-color:rgba(48, 48, 48, 0.705);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #c3c7ca;
}
</style>
