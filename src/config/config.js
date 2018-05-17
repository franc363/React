const URL_MEMBER = ' https://api.trello.com/1/members/';
const URL_BOARDS = ' https://api.trello.com/1/boards/';
const URL_LISTS = ' https://api.trello.com/1/lists/';
const URL_CARDS = 'https://api.trello.com/1/cards';
const API_KEY = 'e327c3e08523d8b0c0efca2189a7b372';
const API_TOKEN =
  'fbb3cb59c7c63472fc502a0b65fb79b99e8e5fc1aef520492ccbd9308f56b147';
const AUTH =
  '?key=' +
  'e327c3e08523d8b0c0efca2189a7b372' +
  '&token=' +
  'fbb3cb59c7c63472fc502a0b65fb79b99e8e5fc1aef520492ccbd9308f56b147';
const MEMBER_ID = 'roqueperalta2';

function getSaveCardUrl(listId, cardName) {
  return (
    this.URL_CARDS +
    '?idList=' +
    listId +
    '&name=' +
    cardName +
    '&key=' +
    API_KEY +
    '&token=' +
    API_TOKEN
  );
}

export const config = {
  URL_MEMBER,
  URL_BOARDS,
  URL_LISTS,
  URL_CARDS,
  AUTH,
  MEMBER_ID,
  getSaveCardUrl
};
