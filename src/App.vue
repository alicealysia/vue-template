<template>
  <div id="app">
    <fullscreen />
    <div class="darken">
      <navbar />
      <spacer />
      <spacer />
      <router-view/>
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
    background-color: rgb(34, 34, 34);
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    background-image: url('./assets/html-background-texture.jpg');
  }
}

@media (orientation: portrait), (max-width: 1280px) {
  html {
    font-size: 3vmax;
  }
  body::before {
  content: "";
  display:block;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -10;
  background: url('./assets/html-background-texture.jpg');
}
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
