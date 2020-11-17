/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import api from 'service/comApi';

const COM = 'COM';
const COMDEPTLIST = `${COM}_COMDEPTLIST`; //部门列表
const COMJOB_SEQ_RANK = `${COM}_JOB_SEQ_RANK`; //职级列表
const COMDICTIONARIES = `${COM}_DICTIONARIES`; //字典项
const COMEMPLOYEES = `${COM}_EMPLOYEES`; //员工选择器

const state = {
  deptList: [], //部门列表
  rankList: [], //职级
  dictList: [], //字典项
  emplsList: [], //员工选择器
};

const actions = {
  /**
   * 部门列表
   * @param {*} param0
   * @param {*} data
   */
  getComDept({ commit }) {
    api.getDept({
      success(data) {
        commit(COMDEPTLIST, data.data || []);
      },
      error(err) {
        console.error(err);
      },
    });
  },
  /**
   * 职级
   * @param {*} param0
   * @param {*} data
   */
  getComRank({ commit }) {
    api.getRank({
      type: 'JOB_SEQ_RANK',
      success(data) {
        commit(COMJOB_SEQ_RANK, data.data || []);
      },
      error(err) {
        console.error(err);
      },
    });
  },
  /**
   * 字典
   * @param {字典} param0
   * @param {*} data
   */
  getDictionaries({ commit }, data) {
    api.getDictionaries({
      type: data.type || 'SALARY_GROUP', //默认薪酬选择
      success(req) {
        commit(COMDICTIONARIES, req.data || []);
      },
      error(err) {
        console.error(err);
      },
    });
  },
  /**
   * 员工选择器
   * @param {*} param0
   * @param {*} data
   */
  getEmployees({ commit }, data) {
    api.getEmployees({
      data,
      success(req) {
        commit(COMEMPLOYEES, req.data || []);
      },
      error(err) {
        console.error(err);
      },
    });
  },
};
const mutations = {
  /**
   * 部门
   */
  [COMDEPTLIST](state, data) {
    return (state.deptList = [...data]);
  },
  /**
   * 职级
   */
  [COMJOB_SEQ_RANK](state, data) {
    let obj = {},
      arrayList = [];
    if (!data) return;
    for (let i = 0; i < data.length; i++) {
      const series = data[i].value.slice(0, 1);
      if (!obj[series]) {
        obj[series] = {
          label: `${series}系列`,
          value: `${series}系列`,
          children: [],
        };
      }
    }
    for (let i = 0; i < data.length; i++) {
      const val = data[i].value.slice(0, 1);
      if (obj[val]) {
        data[i].label = data[i].value;
        obj[val].children.push(data[i]);
      }
    }
    Object.keys(obj).map((req) => {
      arrayList.push(obj[req]);
    });
    return (state.rankList = [...arrayList]);
  },
  /**
   * 字典项
   */
  [COMDICTIONARIES](state, data) {
    return (state.dictList = [...data]);
  },
  /**
   * 员工项
   */
  [COMEMPLOYEES](state, data) {
    return (state.emplsList = [...data]);
  },
};

const getters = {};

export default {
  state,
  actions,
  mutations,
  getters,
};
