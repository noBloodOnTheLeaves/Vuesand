<template>
  <v-app>
      <v-main >
        <v-container>
          <v-row>
            <MainHeader/>
            <RouterView name="LeftSidebar" ></RouterView>
            <v-col>
              <v-sheet
                min-height="70vh"
                rounded="lg"
              >
            <RouterView></RouterView>
              </v-sheet>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
  </v-app>
</template>

<script setup lang="ts">
  import MainHeader from "@/components/MainHeader.vue";
</script>
