<template>
  <div>
    <div class="sidemenu" :class="{ active: active }">
      <nav class="sidemenu-content">
        <slot></slot>
      </nav>
      <SideFooter />
    </div>

    <div
      class="side-overlay"
      :class="{ active: active }"
      @click="toggleActive"
    />
  </div>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    toggleActive() {
      this.$emit('toggle')
    },
  },
}
</script>

<style scoped>
.sidemenu {
  background-color: #9b9b9b;
  bottom: 0;
  box-shadow: 2px 0 5px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  left: 0;
  min-width: 350px;
  overflow-y: auto;
  position: absolute;
  top: 0;
  transform: translate3d(-100%, 0, 0);
  transition: transform 300ms;
  width: 350px;
  z-index: 40;
}

.sidemenu.active {
  transform: translate3d(0, 0, 0);
}

.sidemenu-content {
  flex: 1;
  width: 100%;
}

.side-overlay.active {
  background-color: rgba(0, 0, 0, 0.5);
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  transition: 300ms;
  z-index: 35;
}

@media screen and (min-width: 1024px) {
  .sidemenu {
    transform: translate3d(0, 0, 0);
    transition: transform 0ms;
  }
}
</style>
