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
    <button class="auth-btn" @click="signIn">ログイン</button>
    <div class="forgot-password">
      <nuxt-link to="/forgot">パスワードを忘れた場合</nuxt-link>
    </div>
  </div>
</template>

<script>
import { auth } from '../plugins/firebase'

export default {
  layout: 'auth',
  data() {
    return {
      email: 'test@example.com',
      password: '1234567890',
      remember: false,
    }
  },
  methods: {
    signIn() {
      const email = this.email
      const password = this.password
      const persistence = this.remember ? 'local' : 'session'

      auth.setPersistence(persistence).then(() => {
        auth.signInWithEmailAndPassword(email, password).then((cred) => {
          this.$store.dispatch('user/getProfile')
          this.$router.replace({ path: '/home' }).catch(() => {})
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
  background-color: #00897b;
  border: none;
  border-radius: 5px;
  box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.2);
  color: #fff;
  font-size: 20px;
  height: 55px;
  line-height: 55px;
  margin: 10px 0 20px 0;
  text-align: center;
  width: 100%;
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
</style>
