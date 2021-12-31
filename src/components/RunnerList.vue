<template>
  <div class="runner-list">
    <table>
      <tr>
        <th>Name</th>
        <th>Gender</th>
      </tr>
      <tr v-for="runner in runners" :key="runner.id">
        <router-link :to="{ name: 'Runner', params: { id: runner.id }}">
          <td>{{ runner.name }}</td>
        </router-link>
        <td>{{ runner.gender }}</td>
      </tr>
    </table>
  </div>
</template>

<script>

// component imports

export default {
  props: ['runners'],
  components: { },
  setup() {

  }
}
</script>

<style>
.runner-list table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

.runner-list td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

.runner-list tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
