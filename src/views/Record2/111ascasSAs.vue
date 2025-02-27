<template>
  <div class="navbar">


    <div class="left-area">
      <span>{{ activeRoute.name }}</span>
      <span class="sub-route">{{ activeRoute.subRoute }}</span>
      <div class="nav-line"></div>
    </div>


    <div class="right-area">
      <span
        v-for="route in displayedRoutes"
        :key="route.name"
        @click="setActiveRoute(route)"
        class="route-item"
      >
        {{ route.name }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      routes: [
        { name: 'A', subRoute: 'a' },
        { name: 'B', subRoute: 'b' },
        { name: 'C', subRoute: 'c' },
        { name: 'D', subRoute: 'd' },
        { name: 'E', subRoute: 'e' }
      ],
      activeRoute: { name: 'A', subRoute: 'a' } // 默认活动路由
    };
  },
  computed: {
    displayedRoutes() {
      return this.routes.filter(route => route.name !== this.activeRoute.name);
    }
  },
  methods: {
    setActiveRoute(route) {
      this.activeRoute = { name: route.name, subRoute: route.subRoute };
    }
  }
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #f8f9fa;
  border-bottom: 1px solid #dee2e6;
}

.left-area {
  text-align: left;
}

.sub-route {
  display: block;
  font-size: 0.75em;
  color: #6c757d;
}

.nav-line {
  height: 2px;
  background-color: #007bff;
  width: 100%;
}






.right-area {
  display: flex;
  gap: 15px;
}

.route-item {
  cursor: pointer;
  color: #007bff;
  text-decoration: none;
}

.route-item:hover {
  text-decoration: underline;
}
</style>
