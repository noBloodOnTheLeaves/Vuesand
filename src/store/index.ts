import {createStore} from "vuex";
import {news} from "@/store/modules/news";

export default createStore({
  modules:{
    news: news,
  }
})
