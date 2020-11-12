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
          シフト管理をもっと楽に
        </div>
      </div>
      <div class="auth-form">
        <div class="auth-card">
          <nuxt />
        </div>
      </div>
      <footer>
        <div class="links">
          <nuxt-link to="terms">利用規約</nuxt-link>
          <nuxt-link to="privacy">プライバシーポリシー</nuxt-link>
          <nuxt-link to="contact">お問い合わせ</nuxt-link>
        </div>
        <div class="copyright">&copy; 2020 SHIFSHEL</div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  middleware: ['unauthenticated'],
}
</script>

<style scoped>
.auth {
  background-color: #00897b;
  color: #fff;
  min-height: 100vh;
  min-width: 100%;
  user-select: none;
}

.container {
  align-items: center;
  display: flex;
  flex-direction: column;
  min-width: 320px;
  padding: 40px 0;
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

.footer {
  color: #fff;
}

footer .links {
  display: flex;
  font-size: 16px;
  justify-content: space-evenly;
  padding: 10px 0;
  width: 440px;
}

footer .links a {
  color: inherit;
}

footer .copyright {
  font-size: 14px;
  text-align: center;
}
</style>
