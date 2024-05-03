<template>
  <nav class="navbar">
    <ul class="nav-list">
      <li v-for="route in routes" :key="route.path">
        <router-link :to="{ path: route.path }">
          {{ route.name }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
  name: 'Navbar',
  components: {
    RouterLink,
  },
  props: {
    routes: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    return {
      // No need for useRouter or useRoute in this component
    };
  },
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #f5f5f5;
}

.nav-list {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-list li {
  margin-right: 1rem;
}

.nav-list a {
  text-decoration: none;
  color: #333;
}

.nav-list a.router-link-active {
  font-weight: bold;
  color: #007bff;
}
</style>
