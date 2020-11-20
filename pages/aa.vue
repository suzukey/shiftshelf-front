<template>
  <div>
    <div class="selectTime"></div>
    <table v-for="member in members" :key="member">
      <th>{{ member.user_name }}</th>
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
      days: {
        start_day: '2020/11/20',
        end_day: '2020/12/02',
      },
      members: [
        {
          user_id: 1,
          user_name: '山田',
        },
        {
          user_id: 2,
          user_name: '花子',
        },
        {
          user_id: 3,
          user_name: '達夫',
        },
      ],
      sift: [
        {
          user_id: '1',
          date: '2020/11/20',
          sift_start_time: '9:00',
          sift_end_time: '12:00',
        },
        {
          user_id: '2',
          date: '2020/11/20',
          sift_start_time: '12:00',
          sift_end_time: '18:00',
        },
        {
          user_id: '3',
          date: '2020/11/20',
          sift_start_time: '18:00',
          sift_end_time: '22:00',
        },
      ],
    }
  },
  computed: {
    listDay() {
      return []
    },
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
