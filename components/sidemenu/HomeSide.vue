<template>
  <div class="sidemenu home-sidemenu">
    <div class="sidemenu-content">
      <SideProfile :userinfo="user" />
      <SideDivider />
      <SideIconMenu />
      <SideBar />
      <div class="groups">
        <SideIconMenu />
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
      groups: [
        {
          name: 'ドミノピザ',
        },
        {
          name: 'ミスタードーナツ',
        },
        {
          name: '未来屋書店',
        },
      ],
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
</style>
