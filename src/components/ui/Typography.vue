<template>
  <div :class="['text-' + variant,'text-high-emphasis', 'pa-2']">
    <slot></slot>
  </div>
</template>

<script>
import {string} from "yup";

export default {
  name: "Typography",
  props:{
    variant: {
      type: string,
      required: true,
    }
  }
}
</script>

<style scoped>

</style>
