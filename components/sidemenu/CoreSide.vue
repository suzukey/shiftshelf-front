<template>
  <div class="sidemenu">
    <nav class="sidemenu-content">
      <slot></slot>
    </nav>
    <SideFooter />
  </div>
</template>

<script>
export default {}
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
  width: 350px;
  z-index: 4;
}

@media screen and (max-width: 1023px) {
  .sidemenu {
    display: none;
  }
}

.sidemenu-content {
  flex: 1;
  width: 100%;
}
</style>
