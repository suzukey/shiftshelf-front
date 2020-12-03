<template>
  <CoreSide>
    <div class="group-sidemenu">
      <SideProfile />
      <div class="group">
        <nuxt-link to="/home"><i class="icon mdi mdi-arrow-left" /></nuxt-link>
        <span class="group-name">{{ group.name }}</span>
      </div>
      <SideBar title="メニュー" icon="mdi-apps" />
      <div class="menus">
        <nuxt-link :to="`/groups/${groupId}`">
          <SideIconMenu title="シフト" icon="mdi-calendar-range" />
        </nuxt-link>
        <nuxt-link :to="`/groups/${groupId}/posts`">
          <SideIconMenu title="シフト希望提出" icon="mdi-file" />
        </nuxt-link>
        <nuxt-link :to="`/groups/${groupId}/admin`">
          <SideIconMenu title="管理画面" icon="mdi-clipboard-account" />
        </nuxt-link>
      </div>
    </div>
  </CoreSide>
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
  font-size: 24px;
}

.group .group-name {
  font-size: 18px;
  margin-left: 15px;
}

.menus {
  flex: 1;
}

.group a,
.menus a {
  color: inherit;
  text-decoration: none;
}
</style>
