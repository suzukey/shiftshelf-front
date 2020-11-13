<template>
  <div class="side-icon-menu">
    <div class="icon">
      <i v-if="icon" class="mdi" :class="icon" />
      <b-avatar v-else></b-avatar>
    </div>

    <div class="menu">
      <div>{{ title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped>
.side-icon-menu {
  background-color: #fff;
  display: flex;
  height: 75px;
  transition: 400ms;

  /* min-height: 100px; */
}

.side-icon-menu:hover {
  background-color: #eee;
}

.side-icon-menu .icon {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100px;
}

.side-icon-menu .icon i {
  color: #8e8e8e;
  font-size: 32px;
}

.side-icon-menu .menu {
  font-size: 20px;
  line-height: 75px;
}
</style>
