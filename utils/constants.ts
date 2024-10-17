export const SELECT_OPTIONS_SEARCH = [
  { name: 'Title', value: 'title' },
  { name: 'ID', value: 'id' },
  { name: 'User ID', value: 'userId' },
];

export const APP_ROUTES = {
  home: '/',
  myArticles: '/articles',
  searchArticles: '/search',
};

export const NAV_LINKS = [
  { url: APP_ROUTES.myArticles, name: 'My Articles' },
  { url: APP_ROUTES.searchArticles, name: 'Search' },
];
