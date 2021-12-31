<template>
  <div class="race-list">
    <table>
      <tr>
        <th>Name</th>
        <th>Week</th>
        <th>Canceled</th>
        <th>Season</th>
      </tr>
      <tr v-for="race in races" :key="race.id">
        <router-link :to="{ name: 'Race', params: { id: race.id }}">
          <td>{{ race.raceDefinition.name }}</td>
        </router-link>
        <td>{{ race.week }}</td>
        <td>{{ race.canceled }}</td>
        <td>{{ race.season.name }}</td>
      </tr>
    </table>
  </div>
</template>

<script>

// component imports

export default {
  props: ['races'],
  components: { },
  setup() {

  }
}
</script>

<style>
.race-list table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

.race-list td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

.race-list tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
