<template>
  <div class="center">
    <vs-navbar color="#7d33ff" text-white square center-collapsed>
      <template #left>
        <img src="@/assets/logo.png" class="logo__img" alt="bug.io">
      </template>
        <router-link to="/dashboard">
          <vs-navbar-item :active="active == 'dashboard'" id="dashboard">
            Dashboard
          </vs-navbar-item>
        </router-link>
      <vs-navbar-item id="docs">
        Bugs
      </vs-navbar-item>
      <vs-navbar-item id="components">
        Profile
      </vs-navbar-item>
      <vs-navbar-item id="license">
        Settings
      </vs-navbar-item>
      <template #right>
        <vs-button color="#fff" flat >Login</vs-button>
      </template>
    </vs-navbar>
  </div>
</template>

<script>
export default {
  name: "navigation"
}
</script>

<style>
.app {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo__img {
  height: 33px;
}
</style>