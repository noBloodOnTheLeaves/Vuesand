<script lang="ts">
import { Form as VeeForm } from 'vee-validate';
import '@/plugins/validation';
import * as yup from 'yup';
import {defineComponent} from "vue";

export default defineComponent({
  name: 'AddBlogPostForm',
  components: {
    VeeForm
  },
  data: () => ({
    post: {
      id: Date.now(),
      title: '',
      body: '',
    },
    schema: yup.object({
      title: yup.string().required().label('Заголовок'),
      body: yup.string().required().label('Содержимое'),
    }),

  }),

  methods: {
    onSubmit() {
      this.post.id = Date.now()
      this.$emit('addPost', this.post)
      this.clear();
    },
    clear () {
      this.post.title = ''
      this.post.body = ''
    },
  },
})
</script>

<template>
  <VeeForm as="v-form" :validation-schema="schema" @submit.prevent>
    <v-text-field
      v-model="post.title"
      placeholder="Заголовок"
      />
    <v-text-field
      v-model="post.body"
      placeholder="Содержимое"
    />
    <v-btn color="primary" class="mr-4" type="submit" @click="onSubmit"> Сохранить </v-btn>
  </VeeForm>
</template>

<style scoped>

</style>
