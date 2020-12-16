<template>
  <footer>
    <div class="container">
      <div class="title">
        <h3>SHIFSHEL</h3>
      </div>
      <div class="links">
        <nuxt-link to="/terms">利用規約</nuxt-link>
        <nuxt-link to="/privacy">プライバシーポリシー</nuxt-link>
        <nuxt-link to="/contact">お問い合わせ</nuxt-link>
      </div>
      <div class="copyright">
        <span>&copy; {{ currentYear }} SHIFSHEL</span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    currentYear() {
      return this.$dayjs().get('year')
    },
  },
}
</script>

<style scoped>
.container {
  height: 100%;
  margin: 0 auto;
  overflow: hidden;
  width: 90%;
}

@media screen and (max-width: 767px) {
  .container {
    width: 100%;
  }
}

footer {
  background-color: #00675b;
  color: #fff;
}

footer .title {
  padding: 30px 0 10px 0;
  text-align: center;
}

footer .title h3 {
  font-size: 28px;
  font-weight: 700;
  letter-spacing: 0.1em;
  margin: 0;
}

footer .links {
  align-items: center;
  display: flex;
  font-size: 1rem;
  font-weight: 300;
  justify-content: center;
}

footer .links a {
  color: inherit;
  margin: 0 10px;
}

footer .copyright {
  align-items: center;
  display: flex;
  font-size: 0.9rem;
  font-weight: 300;
  height: 50px;
  justify-content: center;
}
</style>
