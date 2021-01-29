<template>
  <div class="letsbegin">
    <div class="container">
      <div class="copy">
        <h2>新たなシフト管理を始めましょう</h2>
      </div>
      <div class="sub">
        <!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> -->
      </div>
      <div>
        <nuxt-link to="/register" class="register-btn">新規登録</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
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

.letsbegin {
  background-color: #00897b;
  color: #fff;
  padding: 3rem 0;
  text-align: center;
}

.letsbegin .container {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.letsbegin .copy {
  margin: 15px 0;
}

.letsbegin .copy h2 {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
}

.letsbegin .sub {
  margin: 15px 0;
}

.letsbegin .sub p {
  font-size: 1.3rem;
  font-weight: 400;
}

.letsbegin .register-btn {
  display: block;
  border: 1px solid #fff;
  border-radius: 5px;
  color: #fff;
  padding: 1rem 3rem;
  text-decoration: none;
}

@media screen and (min-width: 768px) {
  .letsbegin .copy h2 {
    font-size: 1.75rem;
  }

  .letsbegin .sub p {
    font-size: 1.5rem;
  }
}

@media screen and (min-width: 1024px) {
  .letsbegin .copy h2 {
    font-size: 2rem;
  }
}
</style>
