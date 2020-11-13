<template>
  <div class="home">
    <div class="mana">
      <div class="kana">
        <div class="box scrolly">
          <b-list-group style="max-width: 300px;">
            <b-list-group-item class="d-flex align-items-center">
              <b-avatar class="mr-3"></b-avatar>
              <span class="mr-auto">じゅーるふとし</span>
            </b-list-group-item>
            <b-list-group-item class="d-flex align-items-center">
              <b-avatar class="mr-3"></b-avatar>
              <span class="mr-auto">じゅーるふとし</span>
            </b-list-group-item>
            <b-list-group-item class="d-flex align-items-center">
              <b-avatar class="mr-3"></b-avatar>
              <span class="mr-auto">じゅーるふとし</span>
            </b-list-group-item>
            <b-list-group-item class="d-flex align-items-center">
              <b-avatar class="mr-3"></b-avatar>
              <span class="mr-auto">じゅーるふとし</span>
            </b-list-group-item>
            <b-list-group-item class="d-flex align-items-center">
              <b-avatar class="mr-3"></b-avatar>
              <span class="mr-auto">じゅーるふとし</span>
            </b-list-group-item>
            <b-list-group-item class="d-flex align-items-center">
              <b-avatar class="mr-3"></b-avatar>
              <span class="mr-auto">じゅーるふとし</span>
            </b-list-group-item>
            <b-list-group-item class="d-flex align-items-center">
              <b-avatar class="mr-3"></b-avatar>
              <span class="mr-auto">じゅーるふとし</span>
            </b-list-group-item>
            <b-list-group-item class="d-flex align-items-center">
              <b-avatar class="mr-3"></b-avatar>
              <span class="mr-auto">じゅーるふとし</span>
            </b-list-group-item>
            <b-list-group-item class="d-flex align-items-center">
              <b-avatar class="mr-3"></b-avatar>
              <span class="mr-auto">じゅーるふとし</span>
            </b-list-group-item>
            <b-list-group-item class="d-flex align-items-center">
              <b-avatar class="mr-3"></b-avatar>
              <span class="mr-auto">じゅーるふとし</span>
            </b-list-group-item>
          </b-list-group>
        </div>
      </div>
      <div class="example">
        <b-form-group label="  役割">
          <b-form-radio-group
            v-model="selected"
            name="radios-stacked"
            stacked
            :options="options"
          ></b-form-radio-group>
        </b-form-group>
        <div>
          <b-button variant="outline-secondary"
            >メンバーの役割を初期化</b-button
          >
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
  padding-bottom: 342px;
}
.example {
  font-size: 50px;
}
.teMto {
  background-color: #616161;
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
</style>
