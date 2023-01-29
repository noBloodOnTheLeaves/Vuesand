<template>
    <v-item >
      <v-card
        class="mx-auto"
        max-width="400"
        height="100%"
      >
        <v-img
          class="white--text align-end"
          :src="post.urlToImage"
        >
        </v-img>
        <v-card-text class="text--primary">
          {{ post.description }}
        </v-card-text>

        <v-card-actions>
          <v-btn
            text
            @click="()=>{redirect(post.url)}"
          >
            Подробнее
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-item>
</template>

<script>
export default {
  name: "BlogCard",
  props:{
    post: {
      type: Object,
      required: true,
    }
  },
  methods:{
    redirect(path){
      window.open(path);
    }
  }
}
</script>

<style scoped>

</style>
