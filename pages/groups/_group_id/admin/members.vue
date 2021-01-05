<template>
  <div class="doraM">
    <div class="mana">
      <div class="kana">
        <div class="box scrolly">
          <div class="membersList" style="max-width: 300px;">
            <div class="memberListItem">
              <Avatar />
              <span>じゅーるふとし</span>
            </div>
            <div class="memberListItem">
              <Avatar />
              <span>じゅーるふとし</span>
            </div>
            <div class="memberListItem">
              <Avatar />
              <span>じゅーるふとし</span>
            </div>
            <div class="memberListItem">
              <Avatar />
              <span>じゅーるふとし</span>
            </div>
            <div class="memberListItem">
              <Avatar />
              <span>じゅーるふとし</span>
            </div>
            <div class="memberListItem">
              <Avatar />
              <span>じゅーるふとし</span>
            </div>
            <div class="memberListItem">
              <Avatar />
              <span>じゅーるふとし</span>
            </div>
            <div class="memberListItem">
              <Avatar />
              <span>じゅーるふとし</span>
            </div>
            <div class="memberListItem">
              <Avatar />
              <span>じゅーるふとし</span>
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
  font-size: 30px;
  padding-left: 100px;
  line-height: 250%;
}
.teMto {
  background-color: #616161;
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
}
button {
  font-size: 20px;
  height: 50px;
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
</style>
