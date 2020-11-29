<template>
  <transition name="show-overlay">
    <div v-if="$dayjs.isDayjs(target)" class="overlay" @click="close">
      <div class="overlay-wrapper">
        <div class="day-card" @click.stop>
          <div class="header">
            <div class="date">
              <time :datetime="getDateTime(target)">{{
                target.format('YYYY/MM/DD')
              }}</time>
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
              <div class="close-btn" @click="close">
                <i class="mdi mdi-close"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    target: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getDateTime(day) {
      return day.format('YYYY-M-D')
    },
    close() {
      this.$emit('close')
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

.day-card .header .date time {
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
