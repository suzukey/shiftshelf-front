<template>
  <div class="home">
    <div class="main-header">
      <div class="center-actions">
        <div class="arrow">
          <i class="mdi mdi-chevron-left" />
        </div>
        <div class="calendar-month">
          2020年 11月
        </div>
        <div class="arrow">
          <i class="mdi mdi-chevron-right" />
        </div>
      </div>
      <div class="print">
        <i class="mdi mdi-printer" />
      </div>
    </div>
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
      <div class="weeks">
        <div class="week">
          <div class="day"></div>
          <div class="day"></div>
          <div class="day"></div>
          <div class="day"></div>
          <div class="day"></div>
          <div class="day"></div>
          <div class="day"></div>
        </div>
        <div class="week">
          <div class="day"></div>
          <div class="day"></div>
          <div class="day"></div>
          <div class="day"></div>
          <div class="day"></div>
          <div class="day"></div>
          <div class="day"></div>
        </div>
        <div class="week">
          <div class="day"></div>
          <div class="day"></div>
          <div class="day"></div>
          <div class="day"></div>
          <div class="day"></div>
          <div class="day"></div>
          <div class="day"></div>
        </div>
        <div class="week">
          <div class="day"></div>
          <div class="day"></div>
          <div class="day"></div>
          <div class="day"></div>
          <div class="day"></div>
          <div class="day"></div>
          <div class="day"></div>
        </div>
        <div class="week">
          <div class="day"></div>
          <div class="day"></div>
          <div class="day"></div>
          <div class="day"></div>
          <div class="day"></div>
          <div class="day"></div>
          <div class="day"></div>
        </div>
        <div class="week">
          <div class="day"></div>
          <div class="day"></div>
          <div class="day"></div>
          <div class="day"></div>
          <div class="day"></div>
          <div class="day"></div>
          <div class="day"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'home',
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

.calendar {
  height: 100vh;
  max-height: calc(100vh - 70px - 65px);
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
  height: calc(100% / 6);
}

.calendar .day {
  border-right: 2px solid #cfcfcf;
  height: 100%;
  width: calc(100% / 7);
}

.calendar .day:last-child {
  border: none;
}
</style>
