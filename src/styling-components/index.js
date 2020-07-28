import Vue from 'vue';
import container from './container';
import spacer from './spacer';
import hamburger from './hamburger';
import column from './column';
import row from './row';
import fill from './fill';
import background from './background';

Vue.component('spacer', spacer);
Vue.component('container', container);
Vue.component('hamburger', hamburger);
Vue.component('row', row);
Vue.component('column', column);
Vue.component('fill', fill);
Vue.component('background', background)