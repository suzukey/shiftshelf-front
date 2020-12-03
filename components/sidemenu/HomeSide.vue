<template>
  <CoreSide>
    <div class="home-sidemenu">
      <SideProfile />
      <SideDivider />
      <div class="payroll">
        <nuxt-link to="/payroll">
          <SideIconMenu title="給与計算" icon="mdi-chart-box" />
        </nuxt-link>
      </div>
      <SideBar title="グループ" icon="mdi-account-multiple" />
      <div class="groups">
        <nuxt-link
          v-for="group in groups"
          :key="group.id"
          :to="`/groups/${group.id}`"
        >
          <SideIconMenu :title="group.name" />
        </nuxt-link>
      </div>
    </div>
  </CoreSide>
</template>

<script>
export default {
  fetch() {
    this.$axios.get('/v1/groups/me').then((res) => {
      const groups = res.data.map((group) => ({
        id: group.group_id,
        name: group.group_name,
        icon_url: group.icon_url,
      }))

      this.groups = groups
    })
  },
  data() {
    return {
      groups: [],
    }
  },
}
</script>

<style scoped>
.home-sidemenu {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.groups {
  flex: 1;
}

.groups a,
.payroll a {
  color: inherit;
  text-decoration: none;
}
</style>
