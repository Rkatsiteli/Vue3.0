/* 过滤器 */
import Vue from 'vue';

Vue.filter('formatDate', (value, format) => value && new Date(value).Format(format));

/**
 * 金额格式化
 * 1,234,567.08
 */
Vue.filter('formatMoney', (number, decimals) => utils.number_format({
  decimals,
  number,
}));

/**
 * 数字格式化，保留两位小数
 */
Vue.filter('formatDecimal', (value, decimals) => value && Number(value).toFixed(decimals));
