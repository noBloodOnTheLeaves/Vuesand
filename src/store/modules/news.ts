import axios from "axios";

export const news = {
  namespaced: true,

  state: () => {
    return {
      news: [],
      loading: false,
      updateLoading: false,
      isIntersecting: false,
      totalResults: 0,
      filter: {
        q: '',
        pageSize: 20,
      }
    }
  },
  getters: {

  },
  mutations: {
    setNews(state: any, news: any) {
      state.news = news
    },
    setLoading(state: any, loading: boolean) {
      state.loading = loading
    },
    setUpdateLoading(state: any, updateLoading: boolean) {
      state.updateLoading = updateLoading
    },
    setIsIntersecting(state: any, isIntersecting: boolean ) {
      state.isIntersecting = isIntersecting
    },
    setTotalResult(state: any, totalResults: bigint ) {
      state.totalResults = totalResults
    },
    setFilter(state: any, value:  object) {
      console.log(state, value)
      state.filter = {...state.filter, ...value}
    },
  },
  actions: {
    async getNews({state, commit}){
      try{
        commit('setLoading', true);
        let url = 'https://newsapi.org/v2/top-headlines?country=ru&category=technology&apiKey=05633027b23d44d6a9314d70192ca394';
        const pageSize = '&pageSize=' + state.filter.pageSize;
        const search = '&q=' + state.filter.q
        url += search + pageSize
        const response = await axios.get(url);
        commit('setNews', response.data.articles);
        commit('setTotalResult', response.totalResults);
      }catch (error){
        console.log(error)
      }
      commit('setLoading', false);
    },
    async updateNews({state, commit}){
      try{
        commit('setUpdateLoading', true)
        let url = 'https://newsapi.org/v2/top-headlines?country=ru&category=technology&apiKey=05633027b23d44d6a9314d70192ca394';
        commit('setFilter', {pageSize: state.filter.pageSize + 10});
        const pageSize = '&pageSize=' + (state.filter.pageSize * 1);
        const search = '&q=' + state.filter.q
        url += search + pageSize
        const response = await axios.get(url);
        commit('setNews', [...response.data.articles]);
      }catch (error){
        console.log(error)
      }
      commit('setUpdateLoading', false)
    },

  }
}
