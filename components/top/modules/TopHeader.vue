<template>
  <header>
    <div class="content">
      <h1 class="title">
        SHIFSHEL
      </h1>
      <div class="hd-buttons">
        <nuxt-link to="/login" class="login-link">ログイン</nuxt-link>
        <nuxt-link to="/register" class="register-link">新規登録</nuxt-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style scoped>
header {
  background: linear-gradient(
    rgba(0, 0, 0, 0.4) 0%,
    rgba(0, 0, 0, 0.35) 19%,
    rgba(0, 0, 0, 0.05) 87%,
    rgba(0, 0, 0, 0) 100%
  );
  height: 70px;
  position: fixed;
  position: sticky;
  top: 0;
  width: 100%;
}

header .content {
  align-items: center;
  color: #fff;
  display: flex;
  height: 100%;
  justify-content: space-between;
  overflow: hidden;
  padding: 0 20px;
  width: 100%;
}

header .title {
  cursor: pointer;
  font-size: 1.75rem;
  font-weight: 700;
  letter-spacing: 2px;
  margin: 0;
}

header .hd-buttons {
  margin: 0;
}

header .hd-buttons a {
  color: inherit;
  font-size: 0.9rem;
  margin-left: 0.3rem;
  text-decoration: none;
}

.hd-buttons .login-link {
  padding: 0.7rem 1.5rem;
}

.hd-buttons .register-link {
  background-color: #00897b;
  border-radius: 3px;
  padding: 0.7rem 1.5rem;
}
</style>
