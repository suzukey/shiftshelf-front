<template>
  <transition name="show-overlay">
    <div v-if="$dayjs.isDayjs(target)" class="overlay" @click="close">
      <div class="overlay-wrapper">
        <div class="day-card" @click.stop>
          <div class="header">
            <div class="date">
              <div class="actions">
                <div class="prev-btn" @click="prevDay">
                  <SvgIcon name="chevron-left" />
                </div>
              </div>
              <time :datetime="getDateTime(target)">{{
                target.format('YYYY年MM月DD日(ddd)')
              }}</time>
              <div class="actions">
                <div class="next-btn" @click="nextDay">
                  <SvgIcon name="chevron-right" />
                </div>
              </div>
            </div>
            <div class="actions">
              <div class="close-btn" @click="close">
                <SvgIcon name="close" />
              </div>
            </div>
          </div>
          <div class="card-body">
            <template v-if="datasOfDay.length">
              <div class="events">
                <div v-for="(data, idx) in datasOfDay" :key="idx" class="event">
                  <div class="times">
                    <div class="start">{{ data.shift_start_time }}</div>
                    <div class="end">{{ data.shift_end_time }}</div>
                  </div>
                  <div class="divider" />
                  <div class="name">{{ data.group_name }}</div>
                </div>
              </div>
            </template>
            <template v-else>
              <div class="no-event">予定がありません</div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  model: {
    prop: 'target',
    event: 'change',
  },
  props: {
    target: {
      type: Object,
      required: true,
    },
    datasOfDay: {
      type: Array,
      required: true,
    },
  },
  methods: {
    getDateTime(day) {
      return day.format('YYYY-M-D')
    },
    close() {
      this.$emit('change', {})
    },
    prevDay() {
      this.$emit('change', this.target.subtract(1, 'day'))
    },
    nextDay() {
      this.$emit('change', this.target.add(1, 'day'))
    },
  },
}
</script>

<style scoped>
.overlay {
  background-color: rgba(0, 0, 0, 0.3);
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 30;
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
  display: flex;
  flex-direction: column;
  height: 600px;
  max-height: 90%;
  max-width: 90%;
  width: 400px;
}

.day-card .header {
  border-bottom: 2px solid #cfcfcf;
  color: #707070;
  align-items: center;
  height: 50px;
  display: flex;
  justify-content: space-between;
  padding: 8px 16px;
}

.day-card .header .date {
  align-items: center;
  display: flex;
}

.day-card .header .date time {
  font-weight: 700;
  margin: 0 10px;
  /* margin-right: 10px; */
}

.day-card .header .actions {
  align-items: center;
  display: flex;
}

.day-card .header .prev-btn,
.day-card .header .next-btn {
  align-items: center;
  cursor: pointer;
  display: flex;
  fill: currentColor;
  font-size: 26px;
}

.day-card .header .close-btn {
  align-items: center;
  cursor: pointer;
  display: flex;
  fill: currentColor;
  font-size: 26px;
}

.prev-btn svg,
.next-btn svg,
.close-btn svg {
  height: 24px;
  width: 24px;
}

.card-body {
  height: 100%;
  padding: 10px 20px;
}

.no-event {
  align-items: center;
  color: #8e8e8e;
  display: flex;
  font-weight: 300;
  height: 100%;
  justify-content: center;
}

.event {
  align-items: center;
  display: flex;
  height: 50px;
  margin-bottom: 5px;
}

.event:last-child {
  margin-bottom: 0;
}

.event .times {
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 15px;
}

.event .times .end {
  color: #8e8e8e;
}

.event .divider {
  background-color: #00897b;
  height: 80%;
  margin: 0 12px;
  width: 3px;
}

.event .name {
  font-weight: 700;
}

.show-overlay-enter-active,
.show-overlay-leave-active,
.show-overlay-enter-active .day-card,
.show-overlay-leave-active .day-card {
  transition: 300ms;
  transition-timing-function: ease-out;
}

.show-overlay-enter,
.show-overlay-leave-to {
  opacity: 0;
}

.show-overlay-enter .day-card,
.show-overlay-leave-to .day-card {
  transform: scale(0);
}
</style>
