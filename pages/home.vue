<template>
  <div class="home">
    <b-calendar
      selected-variant="success"
      today-variant="info"
      nav-button-variant="primary"
      hide-header
      width="100%"
    >
    </b-calendar>
  </div>
</template>

<script>
export default {
  layout: 'home',
  middleware: 'auth',
}
</script>

<style>
.b-calendar {
  width: 100%;
  height: calc(100vh - 70px);
}

.b-calendar .b-calendar-grid {
  height: calc(100% - 60px) !important;
}

.b-calendar .row {
  height: calc(calc(100vh - 160px) / 6) !important;
}

.b-calendar .col {
  border: 1px solid #cacaca;
}

.b-calendar .btn {
  width: 50px !important;
  height: 50px !important;
}

.b-calendar span {
  font-size: 30px !important;
}

.b-calendar footer {
  display: none !important;
}
</style>
