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
          :class="{ prev: day.prevMonth, next: day.nextMonth }"
        >
          <div class="date">
            {{ day.date }}
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
  },
  asyncData({ $dayjs }) {
    return {
      now: $dayjs(),
    }
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

        const diffOfMonth = currentDay
          .startOf('month')
          .diff(this.target.startOf('month'), 'month')

        weeks[weekIdx].push({
          date: currentDay.get('date'),
          prevMonth: diffOfMonth < 0,
          nextMonth: diffOfMonth > 0,
        })

        currentDay = currentDay.add(1, 'day')
      }

      return weeks
    },
  },
}
</script>

<style scoped>
.calendar {
  color: #373737;
  height: 100%;
  max-height: 100%;
  max-width: 100%;
  width: 100%;
}

.calendar .day-of-week {
  align-items: center;
  color: #8e8e8e;
  display: flex;
  font-size: 14px;
  font-weight: 700;
  height: 40px;
  justify-content: space-around;
}

.calendar .day-of-week .sat {
  color: #39f;
}

.calendar .day-of-week .sun {
  color: #f36;
}

.calendar .weeks {
  height: calc(100% - 40px);
}

.calendar .week {
  display: flex;
  border-top: 2px solid #cfcfcf;
  height: calc(100% / 5);
}

.calendar .weeks.long .week {
  height: calc(100% / 6);
}

.calendar .day {
  border-right: 2px solid #cfcfcf;
  height: 100%;
  text-align: center;
  width: calc(100% / 7);
}

.calendar .day .date {
  align-items: center;
  display: flex;
  font-size: 20px;
  height: 35px;
  justify-content: center;
}

.calendar .day:last-child {
  border: none;
}

.calendar .day.prev .date,
.calendar .day.next .date {
  color: #cfcfcf;
}
</style>
