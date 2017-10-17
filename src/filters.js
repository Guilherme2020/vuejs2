import Vue from 'vue';


Vue.filter('saldo',time => time.gm - time.gs);
Vue.filter('ucwords',value =>value.charAt(0).toUpperCase() + value.slice(1));



// saldo(time){
//     return time.gm - time.gs;
// },
// ucwords(value){
//     return value.charAt(0).toUpperCase() + value.slice(1);
// }