<template>
  <div class="admin">
    <div class="main-header">
      <div class="page-title">
        <nuxt-link to="/groups/_admin/admin">
          <SvgIcon name="arrow-left" class="icon" />
        </nuxt-link>
        権限画面
      </div>
    </div>
    <div class="home">
      <div class="mana">
        <div class="kana">
          <div class="box scrolly">
            <div class="role-list" style="max-width: 300px;">
              <div class="midori">
                <span class="mr-auto"><p>管理者</p></span>
                <span class="mr-auto"><p>社員</p></span>
              </div>
              <div class="kiiro">
                <span class="mr-auto"><p>アルバイト</p></span>
              </div>
              <span class="mr-auto"><p>デフォルト</p></span>
            </div>
          </div>
        </div>
        <div class="example">
          <p>役割名</p>
          <div>
            <p>
              <input v-model="text" />
            </p>
          </div>
          <div class="border-big"></div>
          <p>役割の設定</p>

          <div class="checkboxes">
            <div v-for="option in options1" :key="option.value">
              <input type="checkbox" />
              <label>{{ option.text }}</label>
            </div>
          </div>

          <div class="border-big"></div>
          <p>管理メニュー</p>

          <div class="checkboxes">
            <div v-for="option in options2" :key="option.value">
              <input type="checkbox" />
              <label>{{ option.text }}</label>
            </div>
          </div>
          <br />
          <div>
            <button>役割を初期化</button>
            <button>役割を削除</button>
          </div>
        </div>
      </div>
      <div class="footerkun">
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
      selected: [], // Must be an array reference!
      options1: [{ text: 'シフト募集対象に含める', value: 'A' }],
      options2: [
        { text: 'グループ情報の管理', value: 'B' },
        { text: '参加者の管理', value: 'C' },
        { text: '役割の管理', value: 'D' },
        { text: 'シフトの編集', value: 'E' },
        { text: 'シフト希望の募集', value: 'F' },
        { text: 'シフト希望の閲覧', value: 'G' },
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
.midori {
  color: #0097a7;
}
.kiiro {
  color: #e6c610;
}
.example {
  padding: 50px 20px 20px 150px;
  font-size: 25px;
}
.border-big {
  padding: 5px 1px 5px 1px;
  border-bottom: 2px solid grey;
  margin: 20px 1px 20px 1px;
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
.role-list {
  font-size: 25px;
}
.icon {
  color: #fff;
  fill: currentColor;
}
.footerkun {
  background-color: #616161;
  color: #fff;
  display: flex;
  flex-direction: column;
  height: 120px;
  justify-content: space-between;
  min-height: 120px;
  padding: 25px 20px 15px 20px;
  text-align: center;
  width: 100%;
}
</style>
