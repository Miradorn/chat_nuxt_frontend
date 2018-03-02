import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      userId: null
    },
    mutations: {
      setUser (state, userId) {
        state.userId = userId
      }
    }
  })
}

export default createStore
