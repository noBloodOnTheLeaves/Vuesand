<template>
  <v-item-group>
    <v-text-field
      color="success"
      placeholder="Поиск... "
      @change="onSearch"
    >
    </v-text-field>
    <v-container class="d-flex justify-center">
      <v-row v-if="news.length > 0 && !loading">
        <TransitionGroup name="newsList">
          <v-col
            :key="post.publishedAt"
            v-for="post in news"
            cols="12"
            md="4"
          >
            <blog-card :post="post" :key="post.publishedAt"/>
          </v-col>
        </TransitionGroup>
      </v-row>
      <v-progress-circular
        class="pt-16"
        v-else-if="updateLoading || loading"
        indeterminate
      ></v-progress-circular>
    </v-container>
  </v-item-group>
</template>

<script lang="ts">
import BlogCard from "@/components/Blog/BlogCard.vue";
import {defineComponent} from 'vue'
import { boolean, string} from "yup";
import * as yup from "yup";

export default defineComponent({
  name: "NewsList",
  components: {BlogCard},
  props:{
    news:{
      type: Array,
      required: true
    },
    loading:{
      type: boolean,
      required: true
    },
    updateLoading:{
      type: boolean,
      required: true
    },
    search:{
      type: string,
      required: true
    }
  },
  data: () => ({
    attrs: {
      class: 'mb-6',
      boilerplate: true,
      elevation: 2,
    },
    schema: yup.object({
      search: yup.string().label('Поиск'),
    }),
  }),
  methods: {
    onSearch(event){
      this.$emit('onSearch', event.target.value)
    }
  },
})
</script>

<style scoped>
.newsList-move, /* apply transition to moving elements */
.newsList-enter-active,
.newsList-leave-active {
  transition: all 0.5s ease;
}

.newsList-enter-from,
.newsList-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.newsList-leave-active {
  position: absolute;
}
</style>
