<template>
    <scrollactive :class="{active: active}">
      <img src="../assets/logo.png" />
      <hamburger @hamburgerClicked="hamburgerClicked" />
      <router-link @click.native="hamburgerClicked()" class="scrollactive-item" :to="{name: 'Home', hash: '#home'}">Home</router-link>
      <router-link @click.native="hamburgerClicked()" class="scrollactive-item" :to="{name: 'Home', hash: '#about'}">About</router-link>
      <!-- <a @click="toggleGallery"> Gallery &#9660; </a> -->
      <!-- <div @click="toggleGallery" :class="gallery? 'gallery': 'hide'">
        <router-link @click.native="hamburgerClicked()" to="/gallery/cars"> Car Signage </router-link>
        <router-link @click.native="hamburgerClicked()" to="/gallery/signs"> Building Signage </router-link>
        <router-link @click.native="hamburgerClicked()" to="/gallery/other"> Other </router-link>
      </div> -->
      <router-link @click.native="hamburgerClicked()" class="scrollactive-item" :to="{name: 'Home', hash: '#contact'}">Contact</router-link>
    </scrollactive>
</template>
<script>
export default {
    name: 'navbar',
    data () {
      return {
        active: false,
        gallery: false
      }
    },
    methods: {
      hamburgerClicked () {
        this.active = !this.active;
      },
      toggleGallery () {
        this.gallery = !this.gallery;
      }
    }
}
</script>
<style scoped>

nav {
  top:0;
  left:0;
  right:0;
  display:flex;
  position: fixed;
  background-color: rgb(49, 49, 52);
  z-index:9999;
  transition: max-height 0.3s ease-in-out;
}
.hide {
  display: none;
}
.gallery {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-content: center;
}
.gallery a {
  width: 100%;
  text-align: center;
}

@media (orientation: landscape) and (min-width: 1281px) {
  nav {
    padding-top:10px;
    padding-bottom:10px;
    padding-left:10%;
    padding-right:10%;
    align-items:center;
    justify-content: flex-end;
    flex-direction: row;
  }
  nav img {
    top: 10%;
    height: 80%;
  }
  nav #hamburger {
    top: 10%;
    height: 80%;
  }
  .gallery {
    position:absolute;
    top: 3em;
    right: 7.5%;
    background-color:rgb(49, 49, 52);
  }
}
@media (orientation: portrait), (max-width: 1280px) {
  nav {
    padding-top: 3em;
    align-items:center;
    flex-direction: column;
    overflow:hidden;
    max-height: 0px;
  }
  nav img {
    top: 0.3em;
    height: 2.4em;
  }
  nav #hamburger {
    top: 0.3em;
    height: 2.4em;
  }
  .active {
    overflow: hidden;
    height: auto;
    max-height: 50em;
  }
}

nav img {
  position:absolute;
  left:10%;
}
nav #hamburger {
  position:absolute;
  right:10%;
}

nav a {
    position:relative;
    display: flex;
    font-weight: 800;
    color: #e6e6e6;
    padding: 10px;
    margin: 10px;
    text-decoration: none;
    font-size:1.2em;
    cursor: pointer;
}

nav a:hover {
    color:rgb(71, 255, 55);
}

nav a.router-link-exact-active {
  color: rgb(65, 148, 62);
}

nav a.router-link-exact-active.scrollactive-item {
  color: #e6e6e6;
}

.scrollactive-item.is-active {
  color: rgb(65, 148, 62) !important;
}

.galleryButton {
    position:relative;
    display: flex;
    font-weight: 800;
    color: #e6e6e6;
    padding: 10px;
    margin: 10px;
    text-decoration: none;
    font-size:1.2em;
}

.galleryButton:hover {
    color:rgb(245, 102, 55);
}
</style>