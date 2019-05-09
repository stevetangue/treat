export const actionOrderType = ({ commit }, payload) => {
  /*eslint no-console: ["error", { allow: ["log"] }] */
  //console.log('action', payload, state);
  commit('mutationOrderType', payload);
}

export const actionOrderMilk = ({ commit }, payload) => {
  /*eslint no-console: ["error", { allow: ["log"] }] */
  //console.log('action', payload, state);
  commit('mutationOrderMilk', payload);
}
