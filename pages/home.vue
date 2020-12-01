<template>
  <div class="home">
    <MainHeader :is-side="true">
      <div class="center-actions">
        <div class="arrow" @click="prevMonth">
          <i class="mdi mdi-chevron-left" />
        </div>
        <div class="calendar-month">
          {{ targetMonth }}
        </div>
        <div class="arrow" @click="nextMonth">
          <i class="mdi mdi-chevron-right" />
        </div>
      </div>
      <!-- <div class="print">
        <i class="mdi mdi-printer" />
      </div> -->
    </MainHeader>
    <div class="calendar-canvas">
      <FullCalendar
        :target="target"
        :calendar-data="calendarData"
        @select-day="setCalendarOverlay($event)"
      />
      <CalendarOverlay v-model="selectedDay" :datas-of-day="sameDayData" />
    </div>
  </div>
</template>

<script>
export default {
  layout: 'home',
  async asyncData({ $dayjs, $axios }) {
    const res = await $axios.get('/v1/calendar/me')
    const calendarData = res.data

    return {
      target: $dayjs(),
      calendarData,
    }
  },
  data() {
    return {
      selectedDay: {},
    }
  },
  computed: {
    targetMonth() {
      return this.target.format('YYYY年 MM月')
    },
    sameDayData() {
      let datasOfDay = []
      if (this.$dayjs.isDayjs(this.selectedDay)) {
        datasOfDay = this.calendarData.filter((data) =>
          this.selectedDay.isSame(this.$dayjs(data.date), 'day')
        )
      }
      return datasOfDay
    },
  },
  methods: {
    nextMonth() {
      this.target = this.target.add(1, 'month')
    },
    prevMonth() {
      this.target = this.target.subtract(1, 'month')
    },
    setCalendarOverlay(day) {
      this.selectedDay = day
    },
  },
}
</script>

<style scoped>
.main-header .center-actions {
  align-items: center;
  display: flex;
  flex: 1;
  font-size: 20px;
  justify-content: center;
}

.main-header .center-actions .calendar-month {
  margin: 0 75px;
}

.main-header .arrow,
.main-header .print {
  font-size: 24px;
  transition: 300ms;
}

.main-header .arrow {
  align-items: center;
  display: flex;
  height: 35px;
  justify-content: center;
  width: 70px;
}

.main-header .print {
  align-items: center;
  border-radius: 50%;
  display: flex;
  height: 50px;
  justify-content: center;
  width: 50px;
}

.main-header .arrow:hover,
.main-header .print:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

.calendar-canvas {
  height: 100vh;
  max-height: calc(100vh - 70px - 65px);
}
</style>
