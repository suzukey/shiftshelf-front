<template>
  <div class="admin">
    <div class="main-header">
      <div class="page-title">
        <nuxt-link to="/groups/_admin/admin">
          <SvgIcon name="arrow-left" class="icon" />
        </nuxt-link>
        グループ画面
      </div>
    </div>
    <div class="home">
      <div class="Locustman">
        <div>
          <div class="groupIcon">
            <SvgIcon name="domain" />
          </div>
          <div>
            <div class="m">
              グループ名 {{ group }}
              <div class="m1">
                <input type="text" v-model="group" placeholder="グループ名" />
              </div>
            </div>
          </div>
          <br />
          <div class="m">
            始業時間 {{ start }}
            <input type="time" v-model="start" />
          </div>
          ～
          <div class="m">
            終業時間{{ end }}
            <input type="time" v-model="end" />
          </div>
        </div>
        <br />
        <div>
          定休日
          <div class="checkboxes">
            <div v-for="option in options" :key="option.item" class="checkbox">
              <input type="checkbox" />
              <label>{{ option.item }}</label>
            </div>
          </div>
        </div>
      </div>

      <div class="teMto">
        <div class="right">
          <div class="ppap">保存していない変更があります</div>

          <a href="/home" class="ppap">
            リセット
          </a>
          <a href="/home" class="kakunin">
            確定
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'group',
  data() {
    return {
      text: '',
      options: [
        { item: '月', name: '月' },
        { item: '火', name: '火' },
        { item: '水', name: '水' },
        { item: '木', name: '木' },
        { item: '金', name: '金' },
        { item: '土', name: '土' },
        { item: '日', name: '日' },
        { item: '祝', name: '祝' },
      ],
    }
  },
}
</script>

<style scoped>
.main-header {
  align-items: center;
  background-color: #00897b;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  color: #fff;
  display: flex;
  height: 65px;
  padding: 0 30px;
  position: relative;
  z-index: 3;
}

.main-header .page-title {
  font-size: 20px;
}
.home {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.Locustman {
  align-items: center;
  flex: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 20px;
  margin-top: 200px;
}

.groupIcon svg {
  color: #8e8e8e;
  fill: currentColor;
  height: 100px;
  width: 100px;
}

.m {
  display: inline-block;
}
.m1 {
  width: 200px;
}
.teMto {
  background-color: #616161;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  font-size: 3vw;
}

.kakunin {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #00675b;
  color: #fff;
  padding: 10px 30px;
  background-color: #00675b;
  font-size: 1vw;
}
.right {
  text-align: right;
}

.ppap {
  text-align: left;
  display: inline-block;
  font-size: 1vw;
  color: #fff;
}

.checkboxes {
  display: flex;
  justify-content: center;
}

.checkbox {
  padding: 10px 20px;
}
</style>
