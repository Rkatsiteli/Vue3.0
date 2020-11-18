import messages from "./404";
import batch from "./batch";
import { useI18n, createI18n } from "vue-i18n";

const i18n = createI18n({
  locale: "zh-CN",
  messages,
  batch,
});

export { i18n };
