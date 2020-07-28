import Vue from 'vue'
import Vuex from 'vuex';
import App from './App.vue'
import router from './router'
import './styling-components';

Vue.config.productionTip = false

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    fullscreen: false,
    image: ''
  },
  mutations: {
    setFullscreen(state, toFS) {
      state.fullscreen = toFS;
    },
    setImage(state, img) {
      state.image = img;
    }
  }
})

new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')
