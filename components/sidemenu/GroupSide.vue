<template>
  <div class="group-sidemenu">
    <SideProfile />
    <div class="group">
      <nuxt-link to="/home">
        <SvgIcon name="arrow-left" class="icon" />
      </nuxt-link>
      <span class="group-name">{{ group.name }}</span>
    </div>
    <SideBar title="メニュー" icon="apps" />
    <div class="menus">
      <nuxt-link :to="`/groups/${groupId}`">
        <SideIconMenu title="シフト" icon="calendar-range" />
      </nuxt-link>
      <nuxt-link :to="`/groups/${groupId}/posts`">
        <SideIconMenu title="シフト希望提出" icon="file" />
      </nuxt-link>
      <div>
        <SideIconMenu
          title="管理画面"
          icon="clipboard-account"
          :expand="true"
          @toggleExpand="toggleAdminExpand"
        />
        <AdminMenus :expanded="adminExpanded" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  fetch() {
    const groupId = this.groupId
    this.$axios.get(`/v1/groups/${groupId}`).then((res) => {
      const group = {
        name: res.data.group_name,
      }

      this.group = group
    })
  },
  data() {
    return {
      group: {
        name: '',
      },
      adminExpanded: false,
    }
  },
  computed: {
    groupId() {
      return this.$route.params.group_id
    },
  },
  methods: {
    toggleAdminExpand() {
      this.adminExpanded = !this.adminExpanded
    },
  },
}
</script>

<style scoped>
.group-sidemenu {
  display: flex;
  flex-direction: column;
  height: 100%;
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
  align-items: center;
  display: flex;
  font-size: 24px;
}

.group .icon {
  fill: currentColor;
  height: 22px;
  width: 22px;
}

.group .group-name {
  font-size: 18px;
  margin-left: 15px;
}

.menus {
  flex: 1;
  user-select: none;
}

.group a,
.menus a {
  color: inherit;
  text-decoration: none;
}
</style>
