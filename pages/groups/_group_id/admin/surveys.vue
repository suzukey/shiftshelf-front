<template>
  <div class="admin">
    <div class="main-header">
      <div class="page-title">
        <nuxt-link to="/groups/_admin/admin">
          <SvgIcon name="arrow-left" class="icon" />
        </nuxt-link>
        <!-- シフト希望調査画面 -->
      </div>
    </div>
    <div class="survey">
      <!-- 一段目 -->
      <div class="kuhaku">
        <div class="inline-block">
          <div class="start">募集名</div>
          <input type="text" />
        </div>
      </div>
      <!-- 二段目 -->
      <div class="kuhaku">
        <div class="inline-block">
          <div class="start">開始日</div>
          <input type="date" name="calendar" max="9999-12-31" />
        </div>
        ~
        <div class="inline-block">
          <div class="start">終了日</div>
          <input type="date" name="calendar" max="9999-12-31" />
        </div>
      </div>
      <!-- 三段目 -->
      <div class="kuhaku">
        <div class="inline-block">
          <div class="start">締切日時</div>
          <input type="date" name="calendar" max="9999-12-31" />
        </div>
      </div>
      <div id="mini-calendar">
        <div class="calendar-head">
          <p class="calendar-year-month"></p>
        </div>
        <table>
          <!-- <thead>
            <tr>
              <th class="calendar-sun">日</th>
              <th>月</th>
              <th>火</th>
              <th>水</th>
              <th>木</th>
              <th>金</th>
              <th class="calendar-sat">土</th>
            </tr>
          </thead> -->
          <div class="calendarpotision">
            <tbody>
              <tr v-for="day in days" :key="day">
                <td class="calendar-none">&nbsp;</td>
                <td>
                  <i class="calendar-day-number">{{ day.day }}</i>
                  <div
                    v-for="event in day.events"
                    :key="event"
                    class="calendar-labels"
                  >
                    <span class="calender-label-blue">{{ event }}</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </div>
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
</template>

<script>
export default {
  layout: 'group',
  data() {
    return {
      days: [
        { day: '2月1日(月)', events: ['10:00~23:00'] },
        { day: '2月2日(火)', events: ['定休日'] },
        { day: '2月3日(水)', events: ['10:00~23:00'] },
        { day: '2月4日(木)', events: ['10:00~23:00'] },
        { day: '2月4日(金)', events: ['10:00~23:00'] },
        { day: '2月5日(土)', events: ['10:00~23:00'] },
        { day: '2月6日(日)', events: ['10:00~23:00'] },
        { day: '(祝日)', events: ['定休日'] },
      ],
    }
  },
  computed: {
    groupId() {
      return this.$route.params.group_id
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

.survey {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.inline-block {
  display: inline-block; /* インラインブロック要素にする */
}
.kuhaku {
  padding: 2%;
  padding-left: 4%;
  /* font-size: 2vw; */
}
#mini-calendar thead {
  display: none;
}
#mini-calendar th,
#mini-calendar td {
  display: block;
  width: 100%;
  padding: 0;
  border-collapse: collapse;
  border: 1px solid #ccc;
  line-height: 1.5;
}
#mini-calendar td {
  height: auto;
  display: flex;
}
#mini-calendar .calendar-none {
  display: none;
}

#mini-calendar .calendar-labels {
  padding: 5px;
}
#mini-calendar [class*='calender-label'] {
  display: inline-block;
  padding: 5px;
  margin-top: 0;
  margin-right: 5px;
  font-size: 20px;
}

/* 日付 */
#mini-calendar td .calendar-day-number {
  font-weight: normal;
  padding: 7px;
  font-size: 18px;
  display: block;
  background: #f2e6cd;
  margin-bottom: 0;
  width: 120px;
  height: auto;
}
#mini-calendar td.calendar-holiday .calendar-day-number,
#mini-calendar td.calendar-sun .calendar-day-number {
  background: #f8c7c7;
}
#mini-calendar td.calendar-sat .calendar-day-number {
  background: #c8ebfe;
}
.calendarpotision {
  padding: 3px 10px 10px 32px;
}

.teMto {
  background-color: #616161;
  position: sticky;
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
