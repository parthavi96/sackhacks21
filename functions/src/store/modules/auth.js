import Vue from "vue";



export default {
  state: {
    isAuthenticated: localStorage.getItem("authenticated") !== null
  },

  getters: {
    isAuthenticated(state) {
      return state.isAuthenticated;
    }
  },

  mutations: {
    isAuthenticated(state, payload) {
      state.isAuthenticated = payload.isAuthenticated;
    }
  },

  actions: {
    login(context, payload) {
      return vueAuth.login(payload.user, payload.requestOptions).then(response => {
        context.commit("isAuthenticated", {
          isAuthenticated: vueAuth.isAuthenticated()
        });
        router.push({name: "Home"});
      });
    },

  }
};
