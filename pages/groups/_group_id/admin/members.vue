<template>
  <div class="admin">
    <div class="main-header">
      <div class="page-title">
        <nuxt-link to="/groups/_admin/admin">
          <SvgIcon name="arrow-left" class="icon" />
        </nuxt-link>
        メンバー画面
      </div>
    </div>
    <div class="doraM">
      <div class="mana">
        <div class="kana">
          <div class="box scrolly">
            <div class="membersList" style="max-width: 300px;">
              <div class="memberListItem">
                <Avatar />
                <span>電波太郎</span>
              </div>
              <div class="memberListItem">
                <Avatar />
                <span>大宮</span>
              </div>
              <div class="memberListItem">
                <Avatar />
                <span>上野</span>
              </div>
              <div class="memberListItem">
                <Avatar />
                <span>加藤</span>
              </div>
              <div class="memberListItem">
                <Avatar />
                <span>宇都宮</span>
              </div>
              <div class="memberListItem">
                <Avatar />
                <span>伊藤</span>
              </div>
              <div class="memberListItem">
                <Avatar />
                <span>村井</span>
              </div>
              <div class="memberListItem">
                <Avatar />
                <span>鈴木</span>
              </div>
              <div class="memberListItem">
                <Avatar />
                <span>森田</span>
              </div>
            </div>
          </div>
        </div>
        <div class="example">
          <div class="form" label="役割">
            <div class="radios">
              <div v-for="option in options" :key="option" class="radio">
                <input type="radio" />
                <label>{{ option.text }}</label>
              </div>
            </div>
          </div>
          <br />
          <div>
            <button>メンバーの役割を初期化</button>
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
      selected: 'first',
      options: [
        { text: '管理者' },
        { text: '社員' },
        { text: 'アルバイト' },
        { text: 'デフォルト' },
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
.doraM {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}
#contents {
  background-color: cadetblue;
}
.box {
  width: 300px;
  height: 500px;
  padding: 30px;
  margin: 10px;
}
.scroll {
  overflow: scroll;
}
.scrollx {
  overflow: hidden;
  overflow-x: scroll;
}
.scrolly {
  overflow: hidden;
  overflow-y: scroll;
}
p {
  white-space: nowrap;
}
.mana {
  display: flex;
  flex: 1;
}
.example {
  font-size: 25px;
  padding: 50px 10px 10px 150px;
  line-height: 250%;
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
.memberListItem {
  font-size: 20px;
  display: flex;
  align-items: center;
  padding: 10px 10px;
}
.btn--orange,
a.btn--orange {
  color: #fff;
  background-color: #eb6100;
}
.btn--orange:hover,
a.btn--orange:hover {
  color: #fff;
  background: #f56500;
}
.icon {
  color: #fff;
  fill: currentColor;
}
</style>
