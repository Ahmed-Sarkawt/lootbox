import Vue from "vue";
import App from "./App.vue";
import Vuex from "vuex";
import { AppStore } from "@/store/appStore";

Vue.config.productionTip = false;
Vue.use(Vuex);

new Vue({
  store: new Vuex.Store(AppStore),
  render: (h) => h(App),
}).$mount("#app");
