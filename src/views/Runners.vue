<template>
  <div class="home">
    <div v-if="error">{{ error }}</div>
    <div v-if="runners.length">
      <RunnerList :runners="runners" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import getRunners from '../composables/getRunners'

// component imports
import RunnerList from '../components/RunnerList.vue'
import Spinner from '../components/Spinner.vue'

export default {
  name: 'Runners',
  components: { RunnerList, Spinner },
  setup() {
    const { runners, error, load } = getRunners()

    load()

    return { runners, error }
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
