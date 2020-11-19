<template>
  <div>
    <div class="selectTime"></div>
    <table v-for="survay in survays" :key="survay">
      <tr>
        <td>{{ toDate(survay.date) }}{{ toDay(survay.date) }}</td>
        <td>
          <div class="kuhaku">
            <div class="time">
              <div class="inline-block">
                <STime :time="survay.open_time" />
              </div>
              ~
              <div class="inline-block">
                <STime :time="survay.close_time" />
              </div>
            </div>
          </div>
        </td>
      </tr>
    </table>
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
      survays: [
        {
          date: '2020/11/16',
          open_time: '9:00',
          close_time: '22:00',
          holiday_flag: false,
        },
        {
          date: '2020/11/17',
          open_time: '9:00',
          close_time: '22:00',
          holiday_flag: false,
        },
        {
          date: '2020/11/18',
          open_time: '9:00',
          close_time: '22:00',
          holiday_flag: true,
        },
      ],
    }
  },
  methods: {
    toDate(strDate) {
      return this.$dayjs(strDate).get('date')
    },
    toDay(strDate) {
      const day = this.$dayjs(strDate).get('day')
      switch (day) {
        case 0:
          return '日'
        case 1:
          return '月'
        case 2:
          return '火'
        case 3:
          return '水'
        case 4:
          return '木'
        case 5:
          return '金'
        case 6:
          return '土'
      }
    },
  },
}
</script>

<style scoped>
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
</style>
