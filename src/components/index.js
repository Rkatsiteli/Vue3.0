import { createApp } from 'vue'

import App from "./App";
import XFrame from "./XFrame";

const appComponent = {
  XFrame,
};

// auto install
if (typeof window !== "undefined" && window.Vue) {
  Object.keys(appComponent).forEach((key) => {
    createApp(key, appComponent[key]);
  });
}

/* module.exports = {
  App,
}; */
export { App };
