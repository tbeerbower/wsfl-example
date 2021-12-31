<template>
  <div class="home">
    <div>
      <h3></h3>
    </div>
    <div v-if="error1">{{ error1 }}</div>
    <div v-if="runner">
      <h3>{{runner.name}}</h3>
    </div>
    <div v-if="error2">{{ error2 }}</div>
    <div v-if="results.length">
      <ResultList :results="results" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import getRunner from '../composables/getRunner'
import getResults from '../composables/getResults'

// component imports
import ResultList from '../components/ResultList.vue'
import Spinner from '../components/Spinner.vue'

export default {
  name: 'Runner',
  props: ['id'],
  components: { ResultList, Spinner },
  setup(props) {
    const { runner, error1, loadRunner } = getRunner(props.id)

    loadRunner()

    const { results, error2, load } = getResults(props.id, null)

    load()

    return { runner, error1, results, error2 }
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
