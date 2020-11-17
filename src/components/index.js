import App from "./App";
import XFrame from "./XFrame";

const appComponent = {
  XFrame,
};

// auto install
if (typeof window !== "undefined" && window.Vue) {
  Object.keys(appComponent).forEach((key) => {
    Vue.component(key, appComponent[key]);
  });
}

/* module.exports = {
  App,
}; */
export { App };
