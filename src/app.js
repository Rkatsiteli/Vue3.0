import "@babel/polyfill";
import { createApp } from "vue";
import router from "router";
import { i18n } from "i18";
import { App } from "components";

createApp(App).use(router).use(i18n).mount("#app");
