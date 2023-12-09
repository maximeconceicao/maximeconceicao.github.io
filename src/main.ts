import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "bootstrap-icons/font/bootstrap-icons.css";

createApp(App).use(store).use(router).mount("#app");

// Credits log
console.log(" ");
console.log(
  "%c Made by Maxime Conceicao 🤖",
  "background: #171719; color: #fff; font-weight: 500; padding: 5px;"
);
