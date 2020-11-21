<template>
  <div class="base">
    <HomeHeader />
    <div class="content">
      <GroupSide />
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
  height: 100%;
  position: absolute;
  width: 100%;
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
