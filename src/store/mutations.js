export const mutationOrderType = (state, payload) => {
   /*eslint no-console: ["error", { allow: ["log"] }] */
  //console.log('mutation', state, payload);
  state.order = payload;
}

export const mutationOrderMilk = (state, payload) => {
  /*eslint no-console: ["error", { allow: ["log"] }] */
 //console.log('mutation', state, payload);
 state.order.milk = payload;
}