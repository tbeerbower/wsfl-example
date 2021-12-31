<template>
  <div class="home">
    <div v-if="error">{{ error }}</div>
    <div v-if="races.length">
      <RaceList :races="races" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import getRaces from '../composables/getRaces'

// component imports
import RaceList from '../components/RaceList.vue'
import Spinner from '../components/Spinner.vue'

export default {
  name: 'Races',
  props: ['id'],
  components: { RaceList, Spinner },
  setup(props) {
    const { races, error, load } = getRaces(props.id)

    load()

    return { races, error }
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
