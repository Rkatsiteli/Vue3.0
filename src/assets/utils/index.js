window.utils = {
  env: process.env.NODE_ENV && process.env.NODE_ENV.trim() === 'production',
  versions() {
    const platform = window.navigator.userAgent;
    return {
      trident: platform.indexOf('Trident') > -1, //IE内核
      presto: platform.indexOf('Presto') > -1, //opera内核
      webKit: platform.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
      gecko: platform.indexOf('Gecko') > -1 && platform.indexOf('KHTML') == -1, //火狐内核
      mobile: !!platform.match(/AppleWebKit.*Mobile.*/) || !!platform.match(/AppleWebKit/), //是否为移动终端
      ios: !!platform.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
      android: platform.indexOf('Android') > -1 || platform.indexOf('Linux') > -1, //android终端或者uc浏览器
      iPhone: platform.indexOf('iPhone') > -1 || platform.indexOf('Mac') > -1, //是否为iPhone或者安卓QQ浏览器
      iPad: platform.indexOf('iPad') > -1, //是否为iPad
      webApp: platform.indexOf('Safari') == -1, //是否为web应用程序，没有头部与底部
      weixin: platform.indexOf('MicroMessenger') == -1, //是否为微信浏览器
    };
  },
  url: {
    curr: window.location.origin,
    getParamValue(key) {
      let resultValue = '';
      const reg = new RegExp(`(^|&)${key}=([^&]*)(&|$)`, 'i');
      const value = window.location.search.substr(1).match(reg);
      if (value != null) resultValue = value[2];
      return resultValue;
    },
    getParamObj() {
      const url = location.search || location.href;
      const _ParamObj = new Object();
      //判断获取url中"?"符后的字串，并截取存储
      if (url.indexOf('?') !== -1) {
        const paramStr = url.substr(url.indexOf('?') + 1);
        const paramArray = paramStr.split('&');

        for (let i = 0; i < paramArray.length; i++) {
          _ParamObj[paramArray[i].split('=')[0]] = paramArray[i].split('=')[1];
        }
      }
      return _ParamObj;
    },
  },
  copyText(copybtn, callback) {
    copybtn = event || document.querySelector(copybtn);
    copybtn.addEventListener('click', () => {
      const copyTextarea = document.querySelector(copybtn.getAttribute('data-copy')); //要拷贝的文本
      copyTextarea.nodeName === 'INPUT' || copyTextarea.nodeName === 'TEXTAREA'
        ? copyTextarea.select()
        : this.copySelectText(copyTextarea);
      copyTextarea.focus();
      try {
        const successful = document.execCommand('copy');
        callback(successful);
      } catch (err) {
        console.log('哎呀，无法复制');
        callback(false);
      }
    });
    copySelectText = copyTextarea => {
      if (copyTextarea.hasAttribute('contenteditable')) {
        copyTextarea.focus();
      }
      if (document.selection) {
        const range = document.body.createTextRange();
        range.moveToElementText(copyTextarea);
        range.select();
      } else if (window.getSelection) {
        const selection = window.getSelection();
        const range = document.createRange();

        range.selectNodeContents(copyTextarea);
        selection.removeAllRanges();
        selection.addRange(range);
      }
    };
  },
  /* 
    * formatMoney(s,type) 
    * 功能：金额按千位逗号分隔
    * 参数：s，需要格式化的金额数值. 
    * 参数：type,判断格式化后的金额是否需要小数位. 
    * 返回：返回格式化后的数值字符串. 
  */
  number_format(params) {
    let s = params.number;
    let type = params.decimals;

    if (/[^0-9\.]/.test(s)) return '0.00';
    if (s == null || s == 'null' || s == '') return '0.00';
    s = s.toString().replace(/^(\d*)$/, '$1.');
    s = (s + '00').replace(/(\d*\.\d\d)\d*/, '$1');
    s = s.replace('.', ',');
    var re = /(\d)(\d{3},)/;
    while (re.test(s)) s = s.replace(re, '$1,$2');
    s = s.replace(/,(\d\d)$/, '.$1');
    if (type == 0) {
      var a = s.split('.');
      if (a[1] == '00') {
        s = a[0];
      }
    }
    return s;
  },
};

Date.prototype.format = function(format) {
  const o = {
    'M+': this.getMonth() + 1, //month
    'd+': this.getDate(), //day
    'h+': this.getHours(), //hour
    'm+': this.getMinutes(), //minute
    's+': this.getSeconds(), //second
    'q+': Math.floor((this.getMonth() + 3) / 3), //quarter
    S: this.getMilliseconds(), //millisecond
  };
  if (/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, `${this.getFullYear()}`.substr(4 - RegExp.$1.length));
  }
  for (const k in o) {
    if (new RegExp(`(${k})`).test(format)) {
      format = format.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : `00${o[k]}`.substr(`${o[k]}`.length),
      );
    }
  }
  return format;
};
