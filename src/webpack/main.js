import Vue from 'vue';
import AppComponent from './components/App/vue.js';

new Vue({
  el: '#app',
  render: function(h) {
    return h(AppComponent);
  }
});
