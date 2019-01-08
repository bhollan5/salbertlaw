import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    prismic: null
  },
  mutations: {
    setPrismicObject(state, payload) {
      state.prismic = payload;
    }
  },
  actions: {
    initPrismic({ commit }, payload) {
      var apiEndpoint = "https://salbertlaw.cdn.prismic.io/api/v2";
    
      Prismic.getApi(apiEndpoint).then(function(api) {
        return api.query(""); // An empty query will return all the documents
        commit('')
      }).then(function(response) {
        console.log("Documents: ", response.results);
      }, function(err) {
        console.log("Something went wrong: ", err);
      });
    }
  }
})
