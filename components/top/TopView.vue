<template>
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
      <div class="down" @click="scrollToAbout">
        <div class="desc">SHIFSHELとは</div>
        <div class="icon">
          <SvgIcon name="arrow-down" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    scrollToAbout() {
      this.$emit('scrollToAbout')
    },
  },
}
</script>

<style scoped>
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
  cursor: pointer;
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
  margin-bottom: 10px;
}

.down .icon {
  animation: bounce 1s infinite;
  fill: currentColor;
  font-size: 24px;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}

@media screen and (min-width: 768px) {
  .title {
    font-size: 6rem;
  }
}

@media screen and (min-width: 1024px) {
  .title {
    font-size: 5.75rem;
  }
}
</style>
