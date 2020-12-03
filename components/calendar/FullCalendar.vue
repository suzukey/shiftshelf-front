<template>
  <div class="calendar">
    <div class="day-of-week">
      <div class="sun">日</div>
      <div class="mon">月</div>
      <div class="tue">火</div>
      <div class="wed">水</div>
      <div class="thu">木</div>
      <div class="fri">金</div>
      <div class="sat">土</div>
    </div>
    <div class="weeks" :class="{ long: weeks.length > 5 }">
      <div v-for="(week, weekIdx) in weeks" :key="weekIdx" class="week">
        <div
          v-for="(day, dayIdx) in week"
          :key="dayIdx"
          class="day"
          :class="{
            prev: day.prevMonth,
            next: day.nextMonth,
            today: day.isToday,
          }"
          @click="selectDay(day)"
        >
          <div class="date">
            <span>{{ day.date.get('date') }}</span>
          </div>
          <div class="datas">
            <div
              v-for="(data, idx) in getDatasOfDay(day.date)"
              :key="idx"
              class="data"
            >
              {{ data.group_name }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    target: {
      type: Object,
      required: true,
    },
    calendarData: {
      type: Array,
      required: true,
    },
  },
  computed: {
    range() {
      const startOfMonth = this.target.startOf('month')
      const endOfMonth = this.target.endOf('month')

      const start = startOfMonth.subtract(startOfMonth.get('day'), 'day')
      const end = endOfMonth.add(7 - 1 - endOfMonth.get('day'), 'day')

      return {
        start,
        end,
      }
    },
    weeks() {
      const weeks = []

      const now = this.$dayjs()
      const start = this.range.start
      const end = this.range.end
      const rangeDays = end.diff(start, 'day') + 1

      weeks.push([])
      let weekIdx = 0
      let currentDay = start

      for (let i = 0; i < rangeDays; i++) {
        if (weeks[weekIdx].length >= 7) {
          weeks.push([])
          weekIdx++
        }

        const isToday = currentDay.isSame(now, 'day')
        const diffOfMonth = currentDay
          .startOf('month')
          .diff(this.target.startOf('month'), 'month')

        weeks[weekIdx].push({
          date: currentDay,
          isToday,
          prevMonth: diffOfMonth < 0,
          nextMonth: diffOfMonth > 0,
        })

        currentDay = currentDay.add(1, 'day')
      }

      return weeks
    },
  },
  methods: {
    getDatasOfDay(day) {
      const datasOfDay = this.calendarData.filter((data) =>
        day.isSame(this.$dayjs(data.date), 'day')
      )
      return datasOfDay
    },
    selectDay(day) {
      this.$emit('select-day', day.date)
    },
  },
}
</script>

<style scoped>
.calendar {
  color: #373737;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}

.day-of-week {
  align-items: center;
  border-bottom: 2px solid #cfcfcf;
  color: #8e8e8e;
  display: flex;
  font-size: 14px;
  font-weight: 700;
  height: 40px;
  justify-content: space-around;
  user-select: none;
}

.day-of-week .sat {
  color: #39f;
}

.day-of-week .sun {
  color: #f36;
}

.weeks {
  flex: 1;
}

.week {
  display: flex;
  border-bottom: 2px solid #cfcfcf;
  height: calc(100% / 5);
}

.weeks.long .week {
  height: calc(100% / 6);
}

.day {
  border-right: 2px solid #cfcfcf;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden auto;
  text-align: center;
  width: calc(100% / 7);
}

.day:last-child {
  border-right-color: rgba(255, 255, 255, 0);
}

.day .date {
  align-items: center;
  display: flex;
  font-size: 18px;
  font-weight: 700;
  height: 45px;
  justify-content: center;
  user-select: none;
}

.day .date span {
  border-radius: 50%;
  height: 35px;
  line-height: 35px;
  width: 35px;
}

.day.today .date span {
  background-color: #00897b;
  color: #fff;
}

.day.prev .date,
.day.next .date {
  color: #cfcfcf;
}

.day .datas {
  align-items: stretch;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
  padding: 10px;
  padding-top: 5px;
}

.day .datas .data {
  background-color: #8e8e8e;
  border-radius: 3px;
  color: #fff;
  font-size: 13px;
  margin-top: 3px;
  overflow: hidden;
  padding: 5px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.day .datas .data:first-child {
  margin-top: 0;
}
</style>
