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
        <span class="chevron">
          <SvgIcon v-if="!isActive" name="menu-down" />
          <SvgIcon v-else name="menu-up" />
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
  height: 55px;
  position: relative;
  width: 100%;
  z-index: 5;
}

.hwrapper {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: space-between;
  margin: 0 10px;
  overflow: hidden;
}

.left-side {
  align-items: center;
  display: flex;
  margin-right: 10px;
}

.side-menu {
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  font-size: 1.75rem;
  height: 35px;
  justify-content: center;
  margin-right: 5px;
  transition: 300ms;
  width: 35px;
}

.side-menu:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

.title {
  font-size: 1.75rem;
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
  fill: currentColor;
  font-size: 1.5rem;
}

.dropdown-bg {
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 2;
}

@media screen and (min-width: 768px) {
  header {
    height: 60px;
  }

  .side-menu {
    height: 45px;
    margin-right: 10px;
    width: 45px;
  }
}

@media screen and (min-width: 1024px) {
  header {
    height: 70px;
  }

  .hwrapper {
    margin: 0 20px;
  }

  .side-menu {
    display: none;
    margin-right: 10px;
  }
}
</style>
