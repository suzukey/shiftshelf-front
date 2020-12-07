<template>
  <div class="home">
    <div class="doraM">
      <div class="mana">
        <div class="kana">
          役割
          <div class="box scrolly">
            <b-list-group style="max-width: 300px;">
              <div class="midori">
                <span class="mr-auto"><p>管理者</p></span>
                <span class="mr-auto"><p>社員</p></span>
              </div>
              <div class="kiiro">
                <span class="mr-auto"><p>アルバイト</p></span>
                <span class="mr-auto"><p>アルバイト</p></span>
                <span class="mr-auto"><p>アルバイト</p></span>
                <span class="mr-auto"><p>アルバイト</p></span>
                <span class="mr-auto"><p>アルバイト</p></span>
                <span class="mr-auto"><p>アルバイト</p></span>
                <span class="mr-auto"><p>アルバイト</p></span>
                <span class="mr-auto"><p>アルバイト</p></span>
                <span class="mr-auto"><p>アルバイト</p></span>
                <span class="mr-auto"><p>アルバイト</p></span>
              </div>
              <span class="mr-auto"><p>デフォルト</p></span>
            </b-list-group>
          </div>
        </div>
        <div class="example">
          <p>役割名</p>
          <div>
            <p>
              <b-form-input v-model="text"></b-form-input>
            </p>
          </div>
          <div class="border-big"></div>
          <p>役割の設定</p>

          <b-form-checkbox-group
            v-model="selected"
            :options="options"
            plain
            stacked
          ></b-form-checkbox-group>
          <div class="border-big"></div>
          <p>管理メニュー</p>
          <b-form-checkbox-group
            v-model="selected"
            :options="options2"
            plain
            stacked
          ></b-form-checkbox-group>
          <div>
            <b-button variant="outline-secondary"
              >メンバーの役割を初期化</b-button
            >
            <b-button variant="outline-danger">役割を削除</b-button>
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
      selected: [], // Must be an array reference!
      options: [{ text: 'シフト募集対象に含める', value: 'A' }],
      options2: [
        { text: 'グループ情報の管理', value: 'B' },
        { text: '参加者の管理', value: 'C' },
        { text: '役割んの管理', value: 'D' },
        { text: 'シフトの編集', value: 'E' },
        { text: 'シフト希望の募集', value: 'F' },
        { text: 'シフト希望の閲覧', value: 'G' },
      ],
    }
  },
}
</script>

<style scoped>
.home {
  height: 100%;
  width: 100%;
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
.midori {
  color: #0097a7;
}
.kiiro {
  color: #e6c610;
}
.example {
  font-size: 25px;
}
.border-big {
  padding: 5px 1px 5px 1px;
  border-bottom: 2px solid grey;
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
</style>
