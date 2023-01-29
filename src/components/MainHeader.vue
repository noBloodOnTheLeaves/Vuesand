<template>
  <v-app-bar flat>
    <v-container class="fill-height d-flex align-center">
      <v-row justify="space-between">
        <v-col
          cols="6"
        >
          <v-btn
            v-for="link in links"
            :key="link"
            variant="text"
            @click="$router.push(link.path)"
          >
              {{ link.label }}
          </v-btn>
        </v-col>
        <v-col
          class="d-flex justify-end"
          cols="2"
        >
            <change-theme-btn/>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script >
import ChangeThemeBtn from "@/components/ui/ChangeThemeBtn.vue";

export default {
  name: "MainHeader",
  components:{
    ChangeThemeBtn
  },
  data: () => ({
    links: [
      {label: 'Главная', path: '/'},
      {label: 'Новости', path: '/news'}
    ],
  }),
}
</script>

<style scoped>

</style>
