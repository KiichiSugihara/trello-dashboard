<template>
  <v-app>
    <TDNavigation>
      <template v-slot:titleText>
        <span>{{ title }}</span>
      </template>
    </TDNavigation>
    <v-content class="backGroundColor">
      <div class="pa-4 white"></div>
    </v-content>
  </v-app>
</template>

<script>
import TDNavigation from "@/components/TDNavigation";
export default {
  name: "Home",
  components: {
    TDNavigation
  },
  data: () => ({
    title: "ホーム"
  })
};
</script>
