<template>
  <div class="side-icon-menu" @click="toggleExpand">
    <div class="icon">
      <SvgIcon v-if="icon" :name="icon" />
    </div>

    <div class="menu">
      {{ title }}
    </div>

    <div v-if="expand" class="icon">
      <SvgIcon name="chevron-down" />
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
    expand: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    toggleExpand() {
      return this.$emit('toggleExpand')
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
  padding: 0 10px;
}

.side-icon-menu:hover {
  background-color: #eee;
}

.side-icon-menu .icon {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 75px;
}

.side-icon-menu .icon svg {
  color: #8e8e8e;
  fill: currentColor;
  height: 28px;
  width: 28px;
}

.side-icon-menu .menu {
  align-items: center;
  display: flex;
  flex-grow: 1;
  font-size: 20px;
}
</style>
