/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import api from 'service/batchApi';

const BATCH = 'BATCH';
const TYPEITEMINFO = `${BATCH}_TYPEITEMINFO`; //奖金类型
const TYPEBATCHITEMINFO = `${BATCH}_TYPEBATCHITEMINFO`; //奖金批次
const DEPTLIST = `${BATCH}_DEPTLIST`; //部门列表
const state = {
  typeitemInfo: [], //奖金类型
  typebatchitemInfo: [], //奖金批次
  deptList: [], //部门列表
};

const actions = {
  getTypeitemInfo({ commit }) {
    api.bonustypeitem({
      success(data) {
        commit(TYPEITEMINFO, data.data || []);
      },
    });
  },
  getBonustypebatchitem({ commit }, data) {
    api.bonustypebatchitems({
      data: {
        bonusType: data,
      },
      success(data) {
        commit(TYPEBATCHITEMINFO, data.data || []);
      },
    });
  },
  getDeptList({ commit }, data) {
    api.getDeptList({
      success(data) {
        commit(DEPTLIST, data.data || []);
      },
    });
  },
};

const mutations = {
  [TYPEITEMINFO](state, data) {

    let dataCheckout = (resp) => {
      resp.map(req => {
        let child = req.children || [];
        if (child.length > 0) {
          dataCheckout(child);
        }
        req.label = req.text;
      })
    }
    dataCheckout(data);

    state.typeitemInfo = [...data];
    return state;
  },
  [TYPEBATCHITEMINFO](state, data) {
    state.typebatchitemInfo = [...data];
    return state;
  },
  [DEPTLIST](state, data) {
    const list = [];
    if (data) {
      data.map((req) => {
        list.push({
          label: req.value,
          value: req.key,
        });
      });
    }
    state.deptList = [...list];
    return state.deptList;
  },
};

const getters = {};

export default {
  state,
  actions,
  mutations,
  getters,
};
