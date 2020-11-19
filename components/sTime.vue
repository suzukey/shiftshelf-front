<template>
  <div class="time">
    <span class="border p-1">
      <select v-model="hours" @change="onChange">
        <option></option>
        <option
          v-for="(text, value) in options(24)"
          :key="text"
          :value="value"
          v-text="text"
        ></option>
      </select>
      <span>：</span>
      <select v-model="minutes" @change="onChange">
        <option></option>
        <option
          v-for="(text, value) in options2(4)"
          :key="text"
          :value="value"
          v-text="text"
        ></option>
      </select>
      <input :name="name" type="hidden" v-model="value" />
    </span>
  </div>
</template>

<script>
export default {
  props: {
    time: {
      type: String,
      default: '0:00',
    },
  },
  data() {
    return {}
  },
  methods: {
    // 「時・分」が変更されたら実行
    onChange() {
      let time = ''
      if (this.hours && this.minutes) {
        time =
          this.hours.toString().padStart(2, '0') +
          ':' +
          this.minutes.toString().padStart(2, '0')
      }
      this.$emit('input', time)
    },
    // 「時・分」の選択肢
    options(limitValue) {
      const options = {}
      for (let i = 0; i < limitValue; i++) {
        options[i] = i.toString().padStart(2, '0')
      }
      return options
    },
    options2(limitValue) {
      const options2 = {}
      for (let i = 0; i < limitValue; i++) {
        options2[i] = (i * 15).toString().padStart(2, '0')
      }
      return options2
    },
  },
}
</script>

<style scoped>
body {
  padding: 10px;
  font-size: 0.75rem;
  background: #20262e;
}
</style>
