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
  height: 65px;
  position: relative;
  width: 100%;
  z-index: 3;
}

.main-header .main-header-wrapper {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  padding: 0 30px;
  width: 100%;
}

.main-header .main-header-wrapper.side {
  justify-content: flex-start;
}
</style>
