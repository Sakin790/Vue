
<script>
export default {
  data() {
    return {
      cars: ["BMW", "FORD", "AUDI"],
      user: {
        name: "Sakin",
        age: 22,
        BG: "O+",
      },
    };
  },
};
</script>

<template>
  <div>
    <h1>Loops</h1>
    <h4 v-for="(car, index) in cars">{{ index }}:{{ car }}</h4>

    <ul>
      <li v-for="car in cars">
        {{ car }}
      </li>
    </ul>

    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Blood Group</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ user.name }}</td>
          <td>{{ user.age }}</td>
          <td>{{ user.BG }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
