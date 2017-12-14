import Vue from 'vue';


/* コンポーネントのグローバル登録
----------------------------------------------------------*/
import CharacterComponent from './components/Character/template.vue';
import EditListComponent from './components/EditList/template.vue';
import EditColorComponent from './components/EditColor/template.vue';
import BottomNavigationComponent from './components/BottomNavigation/template.vue';
import IconComponent from './components/Icon/template.vue';
import TabComponent from './components/Tab/template.vue';

Vue.component('character-component', CharacterComponent);
Vue.component('edit-list-component', EditListComponent);
Vue.component('edit-color-component', EditColorComponent);
Vue.component('bottom-navigation-component', BottomNavigationComponent);
Vue.component('icon-component', IconComponent);
Vue.component('tab-component', TabComponent);


/* 起動処理
----------------------------------------------------------*/
import AppComponent from './components/App/template.vue';

new Vue({
  el: '#app',
  render: function(h) {
    return h(AppComponent);
  }
});


/* スタイルのロード
----------------------------------------------------------*/
import './assets/scss/style.scss';
