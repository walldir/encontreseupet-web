import Immutable from 'seamless-immutable';

export default {
  /**
   * State
   */
  state: Immutable({
    count: 0,
  }),
  /**
   * Reducers
   */
  reducers: {
    increment: (state, payload) => state.set('count', payload),
  },
  /**
   * Effects 
   */
  effects: dispatch => ({
    incrementAsync: (payload, rootState) => {
      dispatch.home.increment(2);
    }
  })
};