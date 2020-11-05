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
          <div class="intro">
            <p>
              このテキストはダミーです。このテキストはダミーです。このテキストはダミーです。このテキストはダミーです。このテキスト
            </p>
          </div>
          <div class="links">
            <a href="/login" rel="noopener noreferrer" class="button1">
              はじめる
            </a>
          </div>
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

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.back {
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
  background-color: #616161;
  background-image: url('~@/assets/eye-catching.jpg');
  background-size: cover;
  background-position: 50%;
  border-radius: inherit;
  content: '';
  filter: brightness(0.9);
  height: 100%;
  left: 0;
  pointer-events: none;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -2;
}

.button1 {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #00675b;
  color: #fff;
  text-decoration: none;
  padding: 10px 30px;
  background-color: #00675b;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
