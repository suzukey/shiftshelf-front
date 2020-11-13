<template>
  <div class="sidemenu group-sidemenu">
    <div class="sidemenu-content">
      <SideProfile :userinfo="user" />
      <div class="group">
        <nuxt-link to="/home"><i class="icon mdi mdi-arrow-left" /></nuxt-link>
        <span class="group-name">ミスタードーナツ</span>
      </div>
      <SideBar title="メニュー" icon="mdi-apps" />
      <div class="menus">
        <nuxt-link :to="`/groups/${groupId}/shifts`">
          <SideIconMenu title="シフト" icon="mdi-calendar-range" />
        </nuxt-link>
        <nuxt-link :to="`/groups/${groupId}/survay`">
          <SideIconMenu title="シフト希望提出" icon="mdi-file" />
        </nuxt-link>
        <nuxt-link :to="`/groups/${groupId}/admin`">
          <SideIconMenu title="管理画面" icon="mdi-clipboard-account" />
        </nuxt-link>
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
  computed: {
    groupId() {
      return this.$route.params.group_id
    },
  },
}
</script>

<style scoped>
.sidemenu {
  background-color: #9b9b9b;
  box-shadow: 2px 0 5px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  height: calc(100vh - 70px);
  max-height: calc(100vh - 70px);
  min-width: 350px;
  position: relative;
  width: 350px;
  z-index: 4;
}

.sidemenu-content {
  flex: 1;
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

.menus {
  max-height: calc(100vh - calc(70px + 120px + 100px + 50px + 30px));
  min-height: 150px;
  overflow-y: auto;
  scrollbar-width: thin;
}

.menus::-webkit-scrollbar {
  width: 10px;
}

.menus::-webkit-scrollbar-track {
  background: #fff;
  border-left: solid 1px #ececec;
}

.menus::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 10px;
  box-shadow: inset 0 0 0 2px #fff;
}

.menus a {
  color: inherit;
  text-decoration: none;
}
</style>
