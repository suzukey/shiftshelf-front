<template>
  <div class="base">
    <HomeHeader />
    <div class="content">
      <HomeSide />
      <main>
        <Nuxt />
      </main>
    </div>
  </div>
</template>

<script>
import windowSize from '~/mixins/windowSize.js'

export default {
  middleware: ['authenticatable'],
  mixins: [windowSize],
}
</script>

<style scoped>
.base {
  position: absolute;
}

.content {
  bottom: 0;
  display: flex;
  left: 0;
  position: absolute;
  right: 0;
  top: 70px;
}

main {
  bottom: 0;
  left: 350px;
  overflow: auto;
  position: absolute;
  right: 0;
  top: 0;
}
</style>
