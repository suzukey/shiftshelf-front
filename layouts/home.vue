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
export default {
  middleware: ['authenticatable'],
}
</script>

<style scoped>
.base {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}

.content {
  display: flex;
  flex: 1;
  position: relative;
}

main {
  bottom: 0;
  left: 350px;
  overflow: auto;
  position: absolute;
  right: 0;
  top: 0;
}

@media screen and (max-width: 1023px) {
  main {
    left: 0;
  }
}
</style>
