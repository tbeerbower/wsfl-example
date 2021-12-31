<template>
  <div class="home">
    <div v-if="raceError">{{ raceError }}</div>
    <div v-if="race.raceDefinition">
      <h3>{{race.raceDefinition.name}}</h3>
      <p>{{race.season.name}}</p>
    </div>
    <div v-if="error">{{ error }}</div>
    <div v-if="results.length">
      <RaceResultList :results="results" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import getRace from '../composables/getRace'
import getResults from '../composables/getResults'

// component imports
import RaceResultList from '../components/RaceResultList.vue'
import Spinner from '../components/Spinner.vue'

export default {
  name: 'Race',
  props: ['id'],
  components: { RaceResultList, Spinner },
  setup(props) {
    const { race, raceError, loadRace } = getRace(props.id)

    loadRace()

    const { results, error, load } = getResults(null, props.id)

    load()
    return { race, raceError, results, error }
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
