<template>
  <v-app>
    <TDNavigation>
      <template v-slot:titleText>
        <span>{{ title }}</span>
      </template>
    </TDNavigation>
    <v-content class="backGroundColor">
      <div class="pa-4 white">
        <h1>{{ title }}</h1>
        <h1>{{ uri }}</h1>
      </div>
    </v-content>
  </v-app>
</template>

<script>
import TDNavigation from '@/components/TDNavigation';
export default {
  name: 'Home',
  components: {
    TDNavigation
  },
  data: () => ({
    title: 'ホーム',
    uri: process.env.VUE_APP_API_URL_BASE
  })
};
</script>
