<template>
  <div class="admin">
    <div class="main-header">
      <div class="page-title">
        <nuxt-link to="/groups/_admin/admin/shifts/_days">
          <SvgIcon name="arrow-left" class="icon" />
        </nuxt-link>
        シフト作成画面
      </div>
    </div>
    <div class="doraM">
      12月{{ this.$route.params.day }}日
      <div class="majime">
        <div id="app">
          <!-- ボックス -->
          <table>
            <tr>
              <th>
                名&nbsp;&nbsp;前&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </th>
              <td v-for="time in times" :key="time">
                {{ time }}
              </td>
            </tr>
            <tr v-for="(shift, user_idx) in shifts" :key="user_idx">
              <th>
                {{ shift.user }}
              </th>
              <td
                v-for="(user_shift, shift_idx) in shift.shift"
                :key="shift_idx"
                :class="{ wht: !user_shift, red: user_shift }"
                class="timebox"
                @click="toggle_switch(user_idx, shift_idx)"
              ></td>
            </tr>
          </table>
        </div>
      </div>
      <div class="teMto">
        <div class="right">
          <div class="ppap">保存していない変更があります</div>

          <a :href="`/groups/${groupId}`" class="ppap">
            リセット
          </a>
          <a :href="`/groups/${groupId}`" class="kakunin">
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
      a: 30,
      times: [
        '0:00',
        '0:30',
        '1:00',
        '1:30',
        '2:00',
        '2:30',
        '3:00',
        '3:30',
        '4:00',
        '4:30',
        '5:00',
        '5:30',
        '6:00',
        '6:30',
        '7:00',
        '7:30',
        '8:00',
        '8:30',
        '9:00',
        '9:30',
        '10:00',
        '10:30',
        '11:00',
        '11:30',
        '12:00',
        '12:30',
        '13:00',
        '13:30',
        '14:00',
        '14:30',
        '15:00',
        '15:30',
        '16:00',
        '16:30',
        '17:00',
        '17:30',
        '18:00',
        '18:30',
        '19:00',
        '19:30',
        '20:00',
        '20:30',
        '21:00',
        '21:30',
        '22:00',
        '22:30',
        '23:00',
        '23:30',
      ],
      shifts: [
        {
          user: '加藤創',
          shift: [
            false,
            false,
            false,
            false,
            false,
            false,
            true,
            true,
            true,
            true,
            true,
            true,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
          ],
        },
        {
          user: '上野天夢人',
          shift: [
            false,
            false,
            false,
            false,
            false,
            false,
            true,
            true,
            true,
            true,
            true,
            true,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
          ],
        },
        {
          user: '大宮永遠',
          shift: [
            false,
            false,
            false,
            false,
            false,
            false,
            true,
            true,
            true,
            true,
            true,
            true,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
          ],
        },
        {
          user: '宇都宮峻',
          shift: [
            false,
            false,
            false,
            false,
            false,
            false,
            true,
            true,
            true,
            true,
            true,
            true,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
          ],
        },
      ],
    }
  },
  computed: {
    groupId() {
      return this.$route.params.group_id
    },
  },
  methods: {
    toggle_switch(userIdx, shiftIdx) {
      const rev = !this.shifts[userIdx].shift[shiftIdx]
      this.shifts[userIdx].shift.splice(shiftIdx, 1, rev)
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
.majime {
  flex: 1;
}

.red {
  background-color: red;
}
.wht {
  background-color: white;
}
table {
  border: 1px solid #ccc;
  border-collapse: collapse;
  user-select: none;
  width: 100%;
}

th,
td {
  border: 1px solid #ccc;
  user-select: none;
  padding: 0.1em;
  /* isplay: inline-block; */
}
.td1 {
  border: 1px solid #ccc;
  user-select: none;
}
s .timebox {
  height: 30px;
  flex: 1;
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
.icon {
  color: #fff;
  fill: currentColor;
}
</style>
