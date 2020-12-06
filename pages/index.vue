<template>
  <div key="top" class="home">
    <div class="top">
      <div class="container">
        <div class="infomations">
          <div class="catchphrase">
            <p>
              シフト管理をもっと楽に。
            </p>
          </div>
          <h1 class="title">
            SHIFSHEL
          </h1>
          <div class="intro">
            <p>
              ようこそ、SHIFSHELへ。<br />
              従来のシフト管理方法に加え、便利機能を追加しました。
            </p>
          </div>
          <div class="buttons">
            <nuxt-link to="/login" class="btn-start">
              はじめる
            </nuxt-link>
          </div>
        </div>
        <div class="down">
          <div class="desc">SHIFSHELとは</div>
          <div class="icon">
            <SvgIcon name="arrow-down" />
          </div>
        </div>
      </div>
    </div>
    <div class="about">
      <header>
        <div class="content">
          <h1 class="title">
            SHIFSHEL
          </h1>
          <div class="buttons"></div>
        </div>
      </header>
      <div class="descriotion">
        <div class="container">
          <img class="demo-img" src="~/assets/top_demo.png" alt="" />
          <img
            src="~/assets/svg/team_work.svg"
            alt=""
            style="
              display: block;
              padding: 2.5rem 0;
              width: 50%;
              margin: 0 auto;
            "
          />
          <img class="demo-img" src="~/assets/top_demo.png" alt="" />
        </div>
      </div>
      <div class="letsbegin">
        <div class="container">
          <div class="copy">
            <h2>新たなシフト管理を始めましょう</h2>
          </div>
          <div class="sub">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div>
            <nuxt-link to="/register" class="register-btn">新規登録</nuxt-link>
          </div>
        </div>
      </div>
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
            <span>&copy; 2020 SHIFSHEL</span>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.home {
  height: 100%;
  width: 100%;
}

.container {
  height: 100%;
  margin: 0 auto;
  overflow: hidden;
  width: 90%;
}

.top {
  color: #fff;
  height: 100%;
  position: relative;
  text-align: center;
  width: 100%;
  z-index: 0;
}

.top::before {
  background-color: #616161;
  background-image: url('~@/assets/eye-catching.jpg');
  background-size: cover;
  background-position: 50%;
  border-radius: inherit;
  bottom: 0;
  content: '';
  filter: brightness(0.9);
  left: 0;
  pointer-events: none;
  position: absolute;
  right: 0;
  top: 0;
  z-index: -2;
}

.top .infomations {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  width: 100%;
}

.top .down {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 80px;
  justify-content: center;
  margin-top: -80px;
}

.catchphrase {
  font-size: 1.5rem;
}

.title {
  font-size: 5rem;
  font-weight: 700;
  letter-spacing: 0.05em;
}

.intro {
  font-size: 1.2rem;
  margin-top: 20px;
  max-width: 500px;
}

.buttons {
  display: flex;
  justify-content: space-around;
  margin-top: 40px;
}

.btn-start {
  display: block;
  border-radius: 4px;
  color: #fff;
  text-decoration: none;
  font-size: 20px;
  line-height: 45px;
  padding: 0 40px;
  background-color: #00897b;
  transition-duration: 400ms;
}

.btn-start:hover {
  filter: brightness(0.9);
}

.down .desc {
  font-size: 20px;
}

.down .icon {
  fill: currentColor;
  font-size: 24px;
}

.about header {
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

.demo-img {
  padding-top: 50px;
  width: 100%;
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
  font-size: 1.75rem;
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

@media screen and (max-width: 767px) {
  .container {
    width: 100%;
  }

  .demo-img {
    padding-top: 20px;
  }
}

@media screen and (min-width: 768px) {
  .title {
    font-size: 6rem;
  }

  .letsbegin .copy h2 {
    font-size: 2rem;
  }

  .letsbegin .sub p {
    font-size: 1.5rem;
  }
}

@media screen and (min-width: 1024px) {
  .title {
    font-size: 5.75rem;
  }

  .letsbegin .copy h2 {
    font-size: 2.75rem;
  }
}
</style>
