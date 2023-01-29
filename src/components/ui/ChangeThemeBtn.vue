<template>
  <v-btn @click="toggleTheme">
    <v-icon
    >
      mdi-theme-light-dark
    </v-icon>
  </v-btn>
</template>

<script>
import { useTheme } from 'vuetify'
export default {
  name: "ChangeThemeBtn",
  setup () {
    const theme = useTheme()

    return {
      theme,
      toggleTheme: () => theme.global.name.value = theme.global.current.value.dark ? 'myCustomLightTheme' : 'dark'
    }
  }
}
</script>

<style scoped>

</style>
