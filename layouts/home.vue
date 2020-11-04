<template>
  <div>
    <HomeHeader />
    <div class="content">
      <HomeSide />
      <main>
        <Nuxt />
      </main>
    </div>
  </div>
</template>

<style scoped>
.content {
  display: flex;
  height: calc(100vh - 70px);
  max-height: calc(100vh - 70px);
}

main {
  flex: 1;
  height: 100%;
}
</style>
