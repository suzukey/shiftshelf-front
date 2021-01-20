<template>
  <div class="login">
    <PageSelector />
    <div class="input-box">
      <input v-model="email" type="email" placeholder="メールアドレス" />
    </div>
    <div class="input-box">
      <input v-model="password" type="password" placeholder="パスワード" />
    </div>
    <div class="remember-me">
      <input id="remember" v-model="remember" type="checkbox" name="remember" />
      <label for="remember">ログインしたままにする</label>
    </div>
    <button class="auth-btn" :disabled="loading" @click="signIn">
      <SvgIcon v-if="loading" name="loading" />
      ログイン
    </button>
    <div class="forgot-password">
      <nuxt-link to="/forgot">パスワードを忘れた場合</nuxt-link>
    </div>
  </div>
</template>

<script>
import { auth } from '~/plugins/firebase'

export default {
  layout: 'auth',
  data() {
    return {
      email: 'test@example.com',
      password: '1234567890',
      remember: false,
      loading: false,
    }
  },
  methods: {
    signIn() {
      this.loading = true

      const email = this.email
      const password = this.password
      const persistence = this.remember ? 'local' : 'session'

      auth.setPersistence(persistence).then(() => {
        auth
          .signInWithEmailAndPassword(email, password)
          .then((cred) => {
            this.$store.dispatch('user/getProfile')
            this.$router.replace({ path: '/home' }).catch(() => {})
          })
          .catch(() => {})
          .finally(() => {
            this.loading = false
          })
      })
    },
  },
}
</script>

<style scoped>
.input-box {
  height: 50px;
  margin-bottom: 30px;
}

.input-box input {
  border: solid 2px #cfcfcf;
  height: 100%;
  padding: 0 10px;
  width: 100%;
}

.input-box input::placeholder {
  color: #8e8e8e;
}

.input-box input:focus {
  border: solid 2px #8e8e8e;
  outline: none;
}

.remember-me {
  align-items: center;
  display: flex;
  height: 35px;
  margin-top: 50px;
}

.remember-me label {
  font-size: 15px;
  margin: 0 0 0 10px;
}

.auth-btn {
  align-items: center;
  background-color: #00897b;
  border: none;
  border-radius: 5px;
  box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.2);
  color: #fff;
  cursor: pointer;
  display: flex;
  font-size: 20px;
  height: 55px;
  justify-content: center;
  line-height: 55px;
  margin: 10px 0 20px 0;
  width: 100%;
}

.auth-btn svg {
  animation: spin 1s linear infinite;
  color: #fff;
  fill: currentColor;
  margin-right: 10px;
}

.forgot-password {
  color: #00897b;
  font-size: 15px;
  height: 30px;
  line-height: 30px;
  text-align: right;
}

.forgot-password a {
  color: inherit;
  text-decoration: none;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
