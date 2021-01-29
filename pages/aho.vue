<template>
  <div>
    <div class="div_3">
      <span> 今月({{ moon[1] }}月)に働いた時間 </span>&nbsp;
      <div class="box">
        {{ work_time[1] }}
      </div>
      時間 <span> 時間給 </span>&nbsp;
      <div class="box">
        <p>{{ moneyy }}</p>
      </div>
      円 <span> 今月の給料 </span>&nbsp;
      <div class="box">
        <p>{{ work_time[1] * moneyy }}</p>
      </div>
      円
    </div>
  </div>
</template>

<script>
export default {
  layout: 'home',
  data() {
    return {
      name: ['電波太郎', '山中花子'],
      id: ['0', '1'],
      work_time: [34, 98],
      moneyy: 930,
      moon: ['12', '1', '2'],
      break_time: 15,
      frequency: ['15', '20'],
    }
  },
}
</script>

<style scoped>
table {
  width: 80%;
}
table th,
table td {
  border: thin solid rgba(0, 0, 0, 0.12);
}

table th {
  background: #ccc;
}

div.box {
  display: inline-block;
  padding: 2px;
  border: solid 2px #000;
  color: #000;
}
div.div_3 {
  clear: both;
}

title {
  font-size: 10px;
}
</style>
