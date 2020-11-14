<template>
  <div class="side-profile">
    <div class="icon">
      <b-avatar></b-avatar>
    </div>

    <div class="info">
      <div class="user">
        <div class="name">{{ userinfo.name }}</div>
        <div class="email">{{ userinfo.email }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    userinfo() {
      return this.$store.getters['user/userinfo']
    },
  },
}
</script>

<style scoped>
.side-profile {
  background-color: #fff;
  display: flex;
  height: 100px;
  min-height: 100px;
  padding: 0 10px;
}

.side-profile .icon {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  min-width: 75px;
  width: 75px;
}

.side-profile .info {
  align-items: center;
  display: flex;
  height: 100%;
  width: 100%;
}

.user .name {
  font-size: 24px;
}

.user .email {
  font-size: 13px;
}
</style>
