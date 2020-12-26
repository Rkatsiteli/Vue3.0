module.exports = {
  com(param) {
    $.ajax({
      url: param.url || '',
      type: param.type || 'get',
      async: param.async !== false,
      data: param.data || '',
      contentType: param.contentType ? param.contentType : 'application/json',
      success: (data) => {
        if (data) {
          data = typeof data === 'object' ? data : JSON.parse(data);
        }
        return param.success && param.success(data);
      },
      error: err => param.error && param.error(err),
    });
  },
};
