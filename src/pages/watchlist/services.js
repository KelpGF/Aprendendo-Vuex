export default {
  findWatchList: { method: 'get', url: 'user/watchlist' },
  addOnWatchList: { method: 'post', url: 'user/serie/watchlist' },
  deleteFromWatchList: { method: 'delete', url: 'user/serie/watchlist{/id}' }
}
