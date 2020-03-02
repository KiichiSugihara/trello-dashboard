// trelloのAPI系Service
import axios from 'axios';
axios.defaults.baseURL = process.env.VUE_APP_API_URL_BASE;
const keys =
  '&key=' +
  String(process.env.VUE_APP_API_KEY) +
  '&token=' +
  String(process.env.VUE_APP_API_TOKEN);
const boardKey = process.env.VUE_APP_API_BOARD_KEY;

class TrelloApi {
  // Board自身の情報取得
  getBoard() {
    const url = 'boards/' + boardKey + '?fields=name,url' + keys;
    return axios.get(url);
  }
  getLists() {
    const url = 'boards/' + boardKey + '/lists/?fields=name,url' + keys;
    return axios.get(url);
  }
  // ListAPI
  getCards(listId) {
    const url = '/lists/' + listId + '/cards?fields=name&' + keys;
    return axios.get(url);
  }
}

export default new TrelloApi();
