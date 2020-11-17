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
  /**
   * 部门选择器
   * @param {} param
   */
  getDept(param) {
    this.com({
      url: '/sylla/phr/org/getAll',
      success: data => param.success && param.success(data),
      error: err => param.error && param.error(err),
    });
  },
  /**
   * 职级选择器
   * @param {} param
   */
  getRank(param) {
    this.com({
      url: `/sylla/phr/frame/dict/list?type=${param.type}`,
      success: data => param.success && param.success(data),
      error: err => param.error && param.error(err),
    });
  },
  /**
   * 字典项，
   * 薪酬选择器再用
   * @param {*} param
   */
  getDictionaries(param) {
    this.com({
      url: `/sylla/phr-ui/dict/list?type=${param.type}`,
      success: data => param.success && param.success(data),
      error: err => param.error && param.error(err),
    });
  },
  /**
   * 员工选择器
   * @param {*} param
   */
  getEmployees(param) {
    const defaultObj = {
      conditionValue: param.data.val || '',
      fields: JSON.stringify(param.data.fields || ['SEX', 'OFFICE_TEL', 'AD_ACCOUNT', 'EMPL_DEPT_LVL_FULL']),
      lcState: param.data.lcState || 'HIRED',
    };
    this.com({
      url: '/sylla/phr/empl/query/emplforwidget',
      data: defaultObj || '',
      success: data => param.success && param.success(data),
      error: err => param.error && param.error(err),
    });
  },
};
