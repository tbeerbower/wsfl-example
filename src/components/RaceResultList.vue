<template>
  <div class="result-list">
    <table>
      <tr>
        <th>Overall Place</th>
        <th>Gender Place</th>
        <th>Gender</th>
        <th>Time</th>
        <th>Runner</th>
      </tr>
      <tr v-for="result in results" :key="result.id">
        <td>{{ result.placeOverall }}</td>
        <td>{{ result.placeGender }}</td>
        <td>{{ result.runner.gender }}</td>
        <td>{{ result.time }}</td>
        <td>
          <router-link :to="{ name: 'Runner', params: { id: result.runner.id }}">
            {{ result.runner.name }}
          </router-link>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>

// component imports

export default {
  props: ['results'],
  components: { },
  setup() {

  }
}
</script>

<style>
.result-list table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

.result-list td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

.result-list tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
