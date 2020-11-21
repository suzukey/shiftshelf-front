<template>
  <div class="base">
    <h1>{{ wh }}</h1>
  </div>
</template>

<script>
import windowSize from '~/mixins/windowSize.js'

export default {
  computed: {
    wh() {
      return window.innerHeight
    },
  },
  mixins: [windowSize],
}
</script>

<style>
html,
body,
#__nuxt,
#__layout,
#__layout > div {
  width: 100%;
  height: 100%;
}
</style>

<style scoped>
.base {
  align-items: center;
  background-color: #00897b;
  color: #fff;
  display: flex;
  height: 100%;
  justify-content: center;
  position: relative;
  width: 100%;
}
</style>
