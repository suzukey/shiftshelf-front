<template>
  <div id="app">
    <!-- ボックス -->
    <table>
      <tr v-for="(shift, user_idx) in shifts" :key="user_idx">
        <th>{{ shift.user }}</th>
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
</template>

<script>
export default {
  layout: 'group',

  data() {
    return {
      a: 30,
      shifts: [
        {
          user: '上野天夢人',
          shift: [
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
          user: '加藤創',
          shift: [],
        },
        {
          user: '大宮永遠',
          shift: [
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
            true,
            false,
            true,
            false,
          ],
        },
      ],
    }
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
}
.td1 {
  border: 1px solid #ccc;
  user-select: none;
}

.timebox {
  height: 30px;
}
</style>
