<template>
  <footer class="sidefooter">
    <div class="links">
      <nuxt-link to="/">お問い合わせ</nuxt-link>
      <div>
        <nuxt-link to="/">利用規約</nuxt-link>
        <nuxt-link to="/">プライバシー</nuxt-link>
      </div>
    </div>
    <div class="copyright">
      <p>&copy;2020 SHIFSHEL</p>
    </div>
  </footer>
</template>

<style scoped>
.sidefooter {
  background-color: #616161;
  color: #fff;
  display: flex;
  flex-direction: column;
  height: 120px;
  justify-content: space-between;
  padding: 25px 20px 15px 20px;
  text-align: center;
  width: 100%;
}

.links a {
  color: #fff;
  font-size: 15px;
  margin: 0 5px;
  text-decoration: none;
}

.copyright {
  font-size: 13px;
  margin-top: 10px;
}

.copyright p {
  margin: 0;
}
</style>
