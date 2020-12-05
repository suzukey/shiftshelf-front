<template>
  <div class="side-bar">
    <SvgIcon class="icon" :name="icon" />
    <div class="title">
      <span>{{ title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      reqired: true,
      default: '',
    },
    icon: {
      type: String,
      reqired: true,
      default: '',
    },
  },
}
</script>

<style>
.side-bar {
  align-items: center;
  background-color: #616161;
  color: #fff;
  display: flex;
  height: 30px;
  padding: 0 20px;
}

.side-bar .icon {
  fill: currentColor;
  font-size: 20px;
  height: 18px;
  width: 18px;
}

.side-bar .title {
  font-size: 15px;
  margin-left: 5px;
}
</style>
