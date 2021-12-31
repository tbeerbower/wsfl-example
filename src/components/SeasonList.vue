<template>
  <div class="season-list">
    <table>
      <tr>
        <th>Name</th>
      </tr>
      <tr v-for="season in seasons" :key="season.id">
        <router-link :to="{ name: 'Races', params: { id: season.id }}">
          <td>{{ season.name }}</td>
        </router-link>

      </tr>
    </table>
  </div>
</template>

<script>

// component imports

export default {
  props: ['seasons'],
  components: { },
  setup() {

  }
}
</script>

<style>
.season-list table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

.season-list td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

.season-list tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
