<template>
  <header>
    <div class="hwrapper">
      <div class="left-side">
        <div class="side-menu">
          <i class="mdi mdi-menu"></i>
        </div>
        <h1 class="title">
          <nuxt-link to="/home">SHIFSHEL</nuxt-link>
        </h1>
      </div>

      <div class="menu" @click="isActive = !isActive">
        <b-avatar></b-avatar>
        <span v-if="!isActive" class="chevron">
          <i class="mdi mdi-menu-down" />
        </span>
        <span v-else class="chevron">
          <i class="mdi mdi-menu-up" />
        </span>
      </div>
    </div>
    <AppHeaderMenu :is-active="isActive" />
    <transition name="dropdown-bg">
      <div v-if="isActive" class="dropdown-bg" @click="isActive = false"></div>
    </transition>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    }
  },
}
</script>

<style scoped>
header {
  background-color: #00675b;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  color: #fff;
  height: 70px;
  position: relative;
  width: 100%;
  z-index: 5;
}

.hwrapper {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: space-between;
  margin: 0 20px;
  overflow: hidden;
}

.left-side {
  align-items: center;
  display: flex;
}

.side-menu {
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  font-size: 1.75em;
  height: 50px;
  justify-content: center;
  margin-right: 10px;
  transition: 300ms;
  width: 50px;
}

.side-menu:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

@media screen and (min-width: 1024px) {
  .side-menu {
    display: none;
  }
}

.title {
  font-size: 1.75em;
  font-weight: 700;
  letter-spacing: 2px;
  margin: 0;
}

.title a {
  color: #fff;
  text-decoration: none;
}

.menu {
  cursor: pointer;
  display: flex;
  user-select: none;
}

.menu .chevron {
  font-size: 24px;
}

.dropdown-bg {
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 2;
}
</style>
