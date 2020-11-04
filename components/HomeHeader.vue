<template>
  <header>
    <div class="hwrapper">
      <h1 class="title">
        <nuxt-link to="/home">ヘッダーくん</nuxt-link>
      </h1>
    </div>
  </header>
</template>

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
  height: 100%;
  margin: 0 20px;
}

.title {
  font-size: 30px;
  font-weight: 700;
  line-height: 70px;
  margin: 0;
}

.title a {
  color: #fff;
  text-decoration: none;
}
</style>
