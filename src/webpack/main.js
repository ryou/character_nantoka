import Vue from 'vue';
import AppComponent from './components/App/template.vue';

new Vue({
  el: '#app',
  render: function(h) {
    return h(AppComponent);
  }
});
