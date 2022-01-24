<template>
  <router-link
    class="card"
    :to="{ name: 'show-serie', params: { id: serie.id } }"
  >
    <img
      height="400px"
      :src="serie.image"
      class="card-image-top"
    >
    <div class="card-body">
      <h3 class="text-center mb-0">
        {{ serie.title }}
      </h3>
      <div class="row text-center mt-3">
        <div class="col">
          <button class="btn btn-sm btn-outline-primary" @click.prevent="toggleWatchlist()">
            {{ serie.watchlist ? 'Remover da' : 'Adicionar na' }} watchlist
          </button>
        </div>
        <div class="col">
          <button class="btn btn-sm btn-outline-warning" @click.prevent="toggleWatchedlist()">
            {{ serie.watched ? 'Remover da' : 'Adicionar na' }} watchedlist
          </button>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>

import { mapActions } from 'vuex'

export default {
  props: {
    serie: { type: Object, required: true }
  },

  methods: {
    ...mapActions('series', ['ActionFindSeries']),
    ...mapActions('watchedlist', [
      'ActionFindWatchedList',
      'ActionAddOnWatchedList',
      'ActionDeleteFromWatchedList'
    ]),
    ...mapActions('watchlist', [
      'ActionFindWatchList',
      'ActionAddOnWatchList',
      'ActionDeleteFromWatchList'
    ]),

    toggleWatchlist: async function () {
      try {
        if (this.serie.watched) {
          await this.ActionDeleteFromWatchedList(this.serie.id)
        }

        if (this.serie.watchlist) {
          await this.ActionDeleteFromWatchList(this.serie.id)
        } else {
          await this.ActionAddOnWatchList({ serieId: this.serie.id })
        }

        this.refresh()
        window.alert('sucesso')
      } catch (error) {
        window.alert('Não foi possível adicionar a watch list')
      }
    },
    toggleWatchedlist: async function () {
      try {
        if (this.serie.watched) {
          await this.ActionDeleteFromWatchedList(this.serie.id)
        }

        if (this.serie.watched) {
          await this.ActionDeleteFromWatchedList(this.serie.id)
        } else {
          await this.ActionAddOnWatchedList({ serieId: this.serie.id })
        }

        this.refresh()
        window.alert('sucesso')
      } catch (error) {
        window.alert('Não foi possível adicionar a watched list')
      }
    },
    refresh: function () {
      const { name } = this.$route

      const lists = {
        series: this.ActionFindSeries(),
        watchlist: this.ActionFindWatchedList(),
        watchedlist: this.ActionFindWatchList()
      }

      return lists[name]
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  cursor: pointer;
  transition: .4s;
  color: var(--dark);
  &:hover {
    text-decoration: none;
    box-shadow: 1px 1px 20px rgba(0,0,0,0.5)
  }
}
</style>
