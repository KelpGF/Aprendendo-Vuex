<template>
  <div class="container-fluid">
    <h1 class="mt-3">Todas as séries</h1>
    <hr>

    <div class="row">
      <div
        class="col-3"
        :key="item.id"
        v-for="item in series"
      >
        <serie-box :serie="item" />
      </div>
    </div>
  </div>
</template>

<script>

import { mapActions, mapState } from 'vuex'

import SerieBox from '@/components/SerieBox'

export default {
  name: 'Series',

  components: {
    SerieBox
  },

  computed: {
    ...mapState('series', ['series'])
  },

  mounted: function () {
    this.ActionFindSeries()
  },

  methods: {
    ...mapActions('series', ['ActionFindSeries'])
  }

}
</script>
