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
        <p>{{ boardItem }}</p>
        <p>{{ listItems }}</p>
        <p>{{ cardItem }}</p>
      </div>
    </v-content>
  </v-app>
</template>

<script>
import TDNavigation from "@/components/TDNavigation";
import TrelloApi from "@/api/trelloApi";
export default {
  name: "Home",
  components: {
    TDNavigation
  },
  data: () => ({
    title: "ホーム",
    listItems: null,
    boardItem: null,
    loading: false,
    errored: false,
    error: null,
    cardItem: null
  }),
  async mounted() {
    await this.setBoardItem();
    await this.setListItems();
  },
  methods: {
    async setBoardItem() {
      TrelloApi.getBoard()
        .then(response => {
          this.boardItem = response.data;
        })
        .catch(err => {
          (this.errored = true), (this.error = err);
        })
        .finally(() => (this.loading = false));
    },
    async setListItems() {
      TrelloApi.getLists()
        .then(response => {
          this.listItems = response.data;
          this.getCardsFromId(this.listItems[0].id);
        })
        .catch(err => {
          (this.errored = true), (this.error = err);
        })
        .finally(() => (this.loading = false));
    },
    getCardsFromId(listid) {
      TrelloApi.getCards(listid)
        .then(response => {
          this.cardItem = response.data;
        })
        .catch(err => {
          (this.errored = true), (this.error = err);
        })
        .finally(() => (this.loading = false));
    }
  }
};
</script>
