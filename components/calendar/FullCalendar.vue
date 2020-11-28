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
    <div class="overlay">
      <div class="overlay-wrapper">
        <div class="day-card">
          <div class="header">
            <div class="date">
              <span>{{ target.format('YYYY年MM月DD日') }}</span>
              <div class="actions">
                <div class="prev-btn">
                  <i class="mdi mdi-chevron-left"></i>
                </div>
                <div class="next-btn">
                  <i class="mdi mdi-chevron-right"></i>
                </div>
              </div>
            </div>
            <div class="actions">
              <div class="close-btn">
                <i class="mdi mdi-close"></i>
              </div>
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

.day-of-week {
  align-items: center;
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
  height: calc(100% - 40px);
}

.week {
  display: flex;
  border-top: 2px solid #cfcfcf;
  height: calc(100% / 5);
}

.weeks.long .week {
  height: calc(100% / 6);
}

.day {
  border-right: 2px solid #cfcfcf;
  display: flex;
  flex-direction: column;
  height: 100%;
  text-align: center;
  width: calc(100% / 7);
}

.day:last-child {
  border: none;
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

<style scoped>
.overlay {
  background-color: rgba(0, 0, 0, 0.3);
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 3;
}

.overlay .overlay-wrapper {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
}

.overlay .day-card {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.2);
  width: 400px;
  height: 600px;
}

.day-card .header {
  border-bottom: 2px solid #cfcfcf;
  color: #707070;
  align-items: center;
  height: 50px;
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
}

.day-card .header .date {
  align-items: center;
  display: flex;
}

.day-card .header .date span {
  font-weight: 700;
  margin-right: 10px;
}

.day-card .header .actions {
  align-items: center;
  display: flex;
}

.day-card .header .prev-btn,
.day-card .header .next-btn {
  cursor: pointer;
  font-size: 24px;
}

.day-card .header .close-btn {
  cursor: pointer;
  font-size: 24px;
}
</style>
