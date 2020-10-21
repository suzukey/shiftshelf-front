<template>
  <div class="home">
    <div class="back">
      <div class="container">
        <div>
          <h1 class="title">
            <a rel="noopener noreferrer">
              SHIFSHEL
            </a>
          </h1>
          <div>
            <p>
              このテキストはダミーです。このテキストはダミーです。このテキストはダミーです。このテキストはダミーです。このテキスト
            </p>
          </div>
          <div class="links">
            <a href="/login" rel="noopener noreferrer" class="button1">
              はじめる
            </a>
          </div>
          <img src="~/assets/download.jpg" />
        </div>
      </div>
    </div>
    <div class="container">
      <div>
        <Logo />
        <h1 class="title">
          app
        </h1>
        <div class="links">
          <nuxt-link
            to="/login"
            rel="noopener noreferrer"
            class="button--green"
          >
            Documentation
          </nuxt-link>
        </div>
        <img src="~/assets/download.jpg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.back {
  background-image: url('~@/assets/Top1.jpg');
  background-position: center center;
  background-repeat: no-repeat;

  /* background-attachment: fixed; */
  background-size: cover;
  background-color: #464646;
  height: 100vh;
  width: 100%;
  position: relative;
  z-index: 0;
  color: #fff;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 777;
  font-size: 100px;

  /* color: #fff; */
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.back::before {
  /* 自由に位置指定 */
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  content: '';
  filter: brightness(90%);
  z-index: -1;
}
</style>
