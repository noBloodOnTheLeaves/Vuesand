<template>
  <v-container class="fill-height">
    <v-row justify="center" no-gutters class="pt-10">
        <typography variant="h1">Vuesand {{$store.state.time}}</typography>

    </v-row>
    <v-row justify="center" no-gutters >
      <typography variant="h5">
        Моя песочница на Vue с использованием различных api, state manager и т.д.
      </typography>
    </v-row>
  </v-container>
</template>

<script>
import Typography from "../../components/ui/Typography";

export default {
  name: "Main.vue",
  components: {Typography}
}
</script>

<style scoped>

</style>
