<template>
  <div class="side-bar">
    <i class="mdi icon" :class="icon" />
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
    },
    icon: {
      type: String,
      reqired: true,
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
  font-size: 20px;
}

.side-bar .title {
  font-size: 15px;
  margin-left: 10px;
}
</style>
