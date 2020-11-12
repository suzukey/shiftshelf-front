<template>
  <div class="page-selector">
    <div class="links">
      <nuxt-link
        replace
        to="/login"
        class="login-link"
        :class="{ active: isLoginPage }"
      >
        ログイン
      </nuxt-link>
      <nuxt-link
        replace
        to="/register"
        class="register-link"
        :class="{ active: isRegisterPage }"
      >
        新規登録
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    activePage() {
      return this.$route.path
    },
    isLoginPage() {
      return this.activePage === '/login'
    },
    isRegisterPage() {
      return this.activePage === '/register'
    },
  },
}
</script>

<style scoped>
.links {
  align-items: center;
  display: flex;
  height: 48px;
  justify-content: space-between;
  margin-bottom: 50px;
}

.links a {
  color: #8a8a8a;
  font-size: 24px;
  text-decoration: none;
}

.links .active {
  color: #00897b;
  font-size: 32px;
  font-weight: 700;
}
</style>
