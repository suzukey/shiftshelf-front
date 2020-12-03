<template>
  <div class="home">
    <div class="top">
      <div class="container">
        <div class="infomations">
          <h1 class="title">
            SHIFSHEL
          </h1>
          <div class="intro">
            <p>
              シフト管理をもっと楽に。
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
          <div class="icon"><i class="mdi mdi-arrow-down" /></div>
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
      <div class="container">
        <img class="demo-img" src="~/assets/top_demo.png" alt="" />
      </div>
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

.title {
  font-weight: 900;
  font-size: 72px;
  letter-spacing: 0.05em;
}

.intro {
  font-size: 15px;
  margin-top: 40px;
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
  font-size: 24px;
}

.about {
  height: 200%;
}

.about header {
  background: linear-gradient(
    rgba(0, 0, 0, 0.3),
    rgba(0, 0, 0, 0.4) 0%,
    rgba(0, 0, 0, 0.35) 19%,
    rgba(0, 0, 0, 0.05) 87%,
    rgba(0, 0, 0, 0)
  );
  height: 70px;
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
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0.2em;
}

.demo-img {
  padding-top: 50px;
  width: 100%;
}
</style>
