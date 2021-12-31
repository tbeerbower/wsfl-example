<template>
  <div class="home">
    <div v-if="error">{{ error }}</div>
    <div v-if="seasons.length">
      <SeasonList :seasons="seasons" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import getSeasons from '../composables/getSeasons'

// component imports
import SeasonList from '../components/SeasonList.vue'
import Spinner from '../components/Spinner.vue'

export default {
  name: 'Seasons',
  components: { SeasonList, Spinner },
  setup() {
    const { seasons, error, load } = getSeasons()

    load()

    return { seasons, error }
  },
}
</script>

<style>
  .home {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
  }
</style>
