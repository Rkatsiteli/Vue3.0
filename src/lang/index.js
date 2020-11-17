import messages from './404';
import batch from './batch';

export const i18n = new VueI18n({
  locale: 'zh-CN',
  messages,
  batch,
});
