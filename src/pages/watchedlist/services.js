export default {
  findWatchedList: { method: 'get', url: 'user/watchedlist' },
  addOnWatchedList: { method: 'post', url: 'user/serie/watched' },
  deleteFromWatchedList: { method: 'delete', url: 'user/serie/watched{/id}' }
}
