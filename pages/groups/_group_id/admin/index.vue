<template>
  <div class="admin">
    <div class="main-header">
      <div class="page-title">
        管理メニュー
      </div>
    </div>
    <div class="links">
      <div class="link">
        <nuxt-link :to="`/groups/${groupId}/admin/surveys`">
          シフト希望調査
        </nuxt-link>
      </div>
      <div class="link">
        <nuxt-link :to="`/groups/${groupId}/admin/shifts`">
          シフト作成
        </nuxt-link>
      </div>
      <div class="link">
        <nuxt-link :to="`/groups/${groupId}/admin/wishes`">
          シフト希望閲覧
        </nuxt-link>
      </div>
      <div class="link">
        <nuxt-link :to="`/groups/${groupId}/admin/roles`">
          権限
        </nuxt-link>
      </div>
      <div class="link">
        <nuxt-link :to="`/groups/${groupId}/admin/members`">
          メンバー
        </nuxt-link>
      </div>
      <div class="link">
        <nuxt-link :to="`/groups/${groupId}/admin/group`">
          グループ
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'group',
  computed: {
    groupId() {
      return this.$route.params.group_id
    },
  },
}
</script>

<style scoped>
.main-header {
  align-items: center;
  background-color: #00897b;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  color: #fff;
  display: flex;
  height: 65px;
  padding: 0 30px;
  position: relative;
  z-index: 3;
}

.main-header .page-title {
  font-size: 20px;
}

.links {
  color: #616161;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  padding: 30px;
}

.links .link {
  align-items: center;
  display: flex;
  font-size: 20px;
  font-weight: 700;
  justify-content: center;
}

.links a {
  align-items: center;
  box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.2);
  color: inherit;
  display: flex;
  height: 135px;
  justify-content: center;
  text-decoration: none;
  transition: 300ms;
  width: 240px;
}

.links a:hover {
  background-color: #f6f6f6;
}
</style>
