<template>
  <div class="auth">
    <div class="container">
      <div class="titles">
        <div class="title">
          <nuxt-link to="/">
            <span>SHIFSHEL</span>
          </nuxt-link>
        </div>
        <div class="subtitle">
          シフト管理をもっと楽に。
        </div>
      </div>
      <div class="auth-form">
        <div class="auth-card">
          <nuxt />
        </div>
      </div>
      <div class="spacer" />
      <footer>
        <div class="links">
          <nuxt-link to="terms">利用規約</nuxt-link>
          <nuxt-link to="privacy">プライバシーポリシー</nuxt-link>
          <nuxt-link to="contact">お問い合わせ</nuxt-link>
        </div>
        <div class="copyright">&copy; {{ currentYear }} SHIFSHEL</div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthLayout',
  middleware: ['unauthenticated'],
  computed: {
    currentYear() {
      return this.$dayjs().get('year')
    },
  },
}
</script>

<style scoped>
.auth {
  background-color: #00897b;
  color: #fff;
  min-height: 100%;
  overflow-x: hidden;
  user-select: none;
  width: 100%;
}

.container {
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 320px;
  padding-top: 40px;
}

.titles {
  text-align: center;
}

.title {
  font-size: 64px;
  font-weight: 700;
  letter-spacing: 0.05em;
}

.title a {
  color: inherit;
  text-decoration: none;
}

.subtitle {
  font-size: 20px;
}

.auth-form {
  display: flex;
  justify-content: center;
  margin: 40px 0;
  width: 100%;
}

.auth-card {
  background-color: #fff;
  box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.2);
  color: #333;
  max-width: 440px;
  min-height: 570px;
  padding: 50px 30px;
  width: 100%;
}

.spacer {
  flex: 1;
}

footer {
  align-items: center;
  color: #fff;
  display: flex;
  flex-direction: column;
  height: 80px;
  justify-content: space-evenly;
  margin: 10px 0;
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
  font-size: 0.9rem;
  font-weight: 300;
  text-align: center;
}
</style>
