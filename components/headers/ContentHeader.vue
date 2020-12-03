<template>
  <section class="main-header">
    <div class="main-header-wrapper" :class="{ side: isSide }">
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    isSide: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped>
.main-header {
  background-color: #00897b;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  color: #fff;
  height: 50px;
  overflow: hidden;
  position: relative;
  white-space: nowrap;
  width: 100%;
  z-index: 3;
}

.main-header .main-header-wrapper {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  padding: 0 10px;
  width: 100%;
}

.main-header .main-header-wrapper.side {
  justify-content: flex-start;
}

@media screen and (min-width: 768px) {
  .main-header {
    height: 55px;
  }

  .main-header-wrapper {
    padding: 0 20px;
  }
}

@media screen and (min-width: 1024px) {
  .main-header {
    height: 65px;
  }

  .main-header-wrapper {
    padding: 0 30px;
  }
}
</style>
