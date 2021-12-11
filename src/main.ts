import { createApp } from "vue";
import devtools from "@vue/devtools";
import App from "./App.vue";

if (process.env.NODE_ENV === "development") {
  devtools.connect();
}

createApp(App).mount("#app");

