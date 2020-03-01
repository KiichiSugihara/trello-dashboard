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
      </div>
    </v-content>
  </v-app>
</template>

<script>
import TDNavigation from '@/components/TDNavigation';
import axios from 'axios';
export default {
  name: 'Home',
  components: {
    TDNavigation
  },
  data: () => ({
    title: 'ホーム',
    item: null,
    loading: false,
    errored: false,
    error: null
  }),
  async created() {
    await this.getTrelloItem();
  },
  methods: {
    getTrelloItem() {
      axios.defaults.baseURL = process.env.VUE_APP_API_URL_BASE;
      const url =
        'boards/oIm50eVO/cards/?fields=name,url&' +
        'key=' +
        String(process.env.VUE_APP_API_KEY) +
        '&token=' +
        String(process.env.VUE_APP_API_TOKEN);
      axios
        .get(url)
        .then(response => {
          this.item = response.data;
        })
        .catch(err => {
          (this.errored = true), (this.error = err);
        })
        .finally(() => (this.loading = false));
    }
  }
};
</script>
