<template>
  <div class="sidemenu home-sidemenu">
    <nav class="sidemenu-content">
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
    </nav>
    <SideFooter />
  </div>
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

.groups {
  max-height: calc(100vh - calc(70px + 120px + 100px + 1px + 75px + 30px));
  min-height: 187.5px;
  overflow-y: auto;
}

.groups a,
.payroll a {
  color: inherit;
  text-decoration: none;
}
</style>
