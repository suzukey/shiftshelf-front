<template>
  <div class="register">
    <PageSelector />
    <div class="input-box">
      <input v-model="name" type="text" placeholder="名前" />
    </div>
    <div class="input-box">
      <input v-model="email" type="email" placeholder="メールアドレス" />
    </div>
    <div class="input-box">
      <input v-model="password" type="password" placeholder="パスワード" />
    </div>
    <div class="announcement">
      <p>
        アカウントを登録することにより、
        <nuxt-link to="/terms">利用規約</nuxt-link>
        および
        <nuxt-link to="/privacy">プライバシーポリシー</nuxt-link>
        に同意するものとします。
      </p>
    </div>
    <button class="auth-btn" @click="register">登録する</button>
  </div>
</template>

<script>
import { auth } from '../plugins/firebase'

export default {
  layout: 'auth',
  data() {
    return {
      name: '',
      email: '',
      password: '',
    }
  },
  methods: {
    register() {
      const email = this.email
      const password = this.password

      auth.createUserWithEmailAndPassword(email, password).catch(() => {})
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

.announcement {
  align-items: center;
  display: flex;
  font-size: 14px;
  min-height: 50px;
}

.announcement p {
  margin: 0;
}

.announcement a {
  color: #00897b;
  text-decoration: none;
}

.auth-btn {
  background-color: #00897b;
  border: none;
  border-radius: 5px;
  box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.2);
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  height: 55px;
  line-height: 55px;
  margin: 10px 0 20px 0;
  text-align: center;
  width: 100%;
}
</style>
