<template>
  <div class="admin">
    <div class="main-header">
      <div class="page-title">
        シフト希望閲覧画面
      </div>
    </div>
    <div>
      <div class="selectTime"></div>
      <div id="mitei_if">
        <table>
          <h2>未提出者</h2>
          <tr v-for="menbar in mitei" :key="menbar.usarname">
            <td>
              {{ menbar.usarname }}
            </td>
          </tr>
          <h2>提出者</h2>
          <tr v-for="menbar in teitei" :key="menbar.usarname">
            <td>
              {{ menbar.usarname }}
            </td>
          </tr>
        </table>
      </div>
      <!-- 次回提出者と未提出者を横並びに -->
      <div class="teMto">
        <div class="right">
          <div class="ppap">保存していない変更があります</div>
          <button @click="members[1] == NULL">未提出者一覧</button>
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
      menbars: [
        {
          usarname: '電波創',
          shiftFlag: 0,
        },
        {
          usarname: '電波峻',
          shiftFlag: 1,
        },
        {
          usarname: '電波電',
          shiftFlag: 0,
        },
        {
          usarname: '電波ッパ',
          shiftFlag: 0,
        },
        {
          usarname: '電電',
          shiftFlag: 1,
        },
        {
          usarname: '峻',
          shiftFlag: 1,
        },
      ],
    }
  },
  computed: {
    mitei() {
      const miteisyutu = this.menbars.filter(function (member) {
        return member.shiftFlag === 0
      })
      return miteisyutu
    },

    teitei() {
      const teiteisyutu = this.menbars.filter(function (member) {
        return member.shiftFlag === 1
      })
      return teiteisyutu
    },
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
.inline-block {
  display: inline-block; /* インラインブロック要素にする */
}
td {
  user-select: none;
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
table th {
  padding: 30px 100px;
}

table td {
  padding: 30px 100px;
  border: 1px solid #616161;
}
</style>
