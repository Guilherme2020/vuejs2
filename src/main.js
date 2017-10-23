import Vue from 'vue'
// import App from './App.vue'
import './filters';
import AppComponent from './components/app.component';
import store from './store';

import {Time} from './time';
import _ from 'lodash';

require('style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css');
require('bootstrap');


//let appComponent = //
let meuVue = new Vue({
  el: '#app',
  components:{
      "app": AppComponent
  },
  store

  // render: h => h(App)
});
console.log(meuVue);
