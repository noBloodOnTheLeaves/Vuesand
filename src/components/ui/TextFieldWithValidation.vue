<template>
  <v-text-field
    v-model="value"
    @blur="handleBlur"
    :label="label"
    :error-messages="errors"
    :type="type"
  />
</template>

<script>
import { defineProps, toRef } from 'vue';
import { useField } from 'vee-validate';

export default {
  name: "TextFieldWithValidation",
  props:{
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  }
}
</script>

<style scoped>

</style>
