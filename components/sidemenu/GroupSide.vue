<template>
  <div class="sidemenu group-sidemenu">
    <div class="sidemenu-content">
      <SideProfile :userinfo="user" />
      <div class="group">
        <nuxt-link to="/home">←</nuxt-link>
        <span class="group-name">ミスタードーナツ</span>
      </div>
      <SideBar />
      <div class="menus">
        <SideIconMenu />
        <SideIconMenu />
        <SideIconMenu />
      </div>
    </div>
    <SideFooter />
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: '電波太郎',
        email: 'aaa@aaa.email',
      },
    }
  },
}
</script>

<style scoped>
.sidemenu {
  height: clac(100vh - 70px);
  max-height: clac(100vh - 70px);
  min-width: 350px;
  width: 350px;
  background-color: #9b9b9b;
  display: flex;
  flex-direction: column;
}

.sidemenu-content {
  width: 100%;
}

.group {
  align-items: center;
  background-color: #373737;
  color: #fff;
  display: flex;
  height: 50px;
  padding: 0 20px;
}

.group a {
  color: #fff;
  font-size: 24px;
  text-decoration: none;
}

.group .group-name {
  font-size: 18px;
  margin-left: 15px;
}
</style>
