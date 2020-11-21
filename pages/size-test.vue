<template>
  <div class="base">
    <h1>{{ wh }}</h1>
  </div>
</template>

<script>
export default {
  computed: {
    wh() {
      return window.innerHeight
    },
  },
}
</script>

<style scoped>
.base {
  align-items: center;
  background-color: #00897b;
  color: #fff;
  display: flex;
  height: 100vh;
  height: calc(var(--wh, 1vh) * 100);
  justify-content: center;
  position: relative;
  width: 100%;
}
</style>
