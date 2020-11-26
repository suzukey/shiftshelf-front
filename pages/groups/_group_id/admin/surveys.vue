<template>
  <div class="survey">
    <!-- 一段目 -->
    <div class="kuhaku">
      <div class="inline-block">
        <div class="start">希望調査名</div>
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
      </table>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'group',
  data() {
    return {
      days: [
        { day: '1', events: ['〇'] },
        { day: '2', events: ['✕'] },
        { day: '3', events: ['〇'] },
        { day: '4', events: ['✕'] },
        { day: '5', events: ['〇'] },
        { day: '6', events: ['〇'] },
      ],
    }
  },
}
</script>

<style scoped>
.content {
  display: flex;
  height: calc(100vh - 70px);
}

.list-group-item {
  height: 75px;
}

.sidemenu {
  height: 100%;
  width: 350px;
  background-color: #9b9b9b;
}

.sidemenu-content {
  height: calc(100% - 76px);
}

.sidemenu-content .profile {
  border-bottom: 1px solid #9b9b9b;
}

.sidemenu-content .profile .list-group-item {
  height: 100px;
}

.sidemenu-content .groups {
  height: 30px;
  background-color: #616161;
}

main {
  width: 100%;
}

.rinc-rowson {
  background-color: #373737;
}
.inline-block {
  display: inline-block; /* インラインブロック要素にする */
}
.kuhaku {
  padding: 2%;
  padding-left: 4%;
  font-size: 2vw;
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
  display: -webkit-flex;
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
  font-size: 12px;
}

/* 日付 */
#mini-calendar td .calendar-day-number {
  font-weight: normal;
  padding: 7px;
  font-size: 18px;
  display: block;
  background: #f2e6cd;
  margin-bottom: 0;
  width: 75px;
  height: auto;
}
#mini-calendar td.calendar-holiday .calendar-day-number,
#mini-calendar td.calendar-sun .calendar-day-number {
  background: #f8c7c7;
}
#mini-calendar td.calendar-sat .calendar-day-number {
  background: #c8ebfe;
}
</style>
