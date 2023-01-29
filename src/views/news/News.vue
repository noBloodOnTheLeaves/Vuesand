<template>
  <!--  <add-blog-post-form @addPost="addPost"/>-->
  <news-list
    :news="news"
    :loading="loading"
    :updateLoading="updateLoading"
    :search="filter.q"
    @onSearch="onSearch"
  />
  <div v-intersect="onIntersect" class="observe"></div>
</template>

<script lang="ts">
import NewsList from "@/components/Blog/NewsList.vue";
import {defineComponent} from 'vue'
import {mapState, mapActions, mapMutations} from "vuex";

export default defineComponent({
  name: 'News',
  components: {NewsList},
  methods: {
    ...mapActions({
      getNews: 'news/getNews',
      updateNews: 'news/updateNews',
    }),
    ...mapMutations({
      setFilter: 'news/setFilter',

    }),
    onSearch(searchString: string) {
      this.setFilter(  {q: searchString});
      this.getNews();
    },
    onIntersect(isIntersecting: any) {
      if (
        isIntersecting &&
        this.news.length > 0 &&
        this.totalResults !== this.news.length
      ) {
        this.updateNews();
      }
    },
  },
  computed:{
    ...mapState({
      news: state => state.news.news,
      loading: state => state.news.loading,
      updateLoading: state => state.news.updateLoading,
      isIntersecting: state => state.news.isIntersecting,
      totalResults: state => state.news.totalResults,
      filter: state => state.news.filter
    })
  },
  watch: {
    isIntersecting() {
      this.updateNews();
    }
  },
  mounted() {
    this.getNews();
  }
})
</script>

<style scoped>
.observe {
  height: 30px;
}
</style>
