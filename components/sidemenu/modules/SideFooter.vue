<template>
  <footer class="sidefooter">
    <div class="links">
      <nuxt-link to="/contact">お問い合わせ</nuxt-link>
      <div>
        <nuxt-link to="/terms">利用規約</nuxt-link>
        <nuxt-link to="/privacy">プライバシー</nuxt-link>
      </div>
    </div>
    <div class="copyright">
      <p>&copy; {{ currentYear }} SHIFSHEL</p>
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
.sidefooter {
  background-color: #616161;
  color: #fff;
  display: flex;
  flex-direction: column;
  height: 120px;
  justify-content: space-between;
  min-height: 120px;
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
