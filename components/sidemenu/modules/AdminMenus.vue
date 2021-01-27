<template>
  <div v-if="expanded" class="expanded">
    <nuxt-link :to="`/groups/${groupId}/admin/surveys`">
      <span>シフト募集</span>
    </nuxt-link>
    <nuxt-link :to="`/groups/${groupId}/admin/shifts`">
      <span>シフト作成</span>
    </nuxt-link>
    <nuxt-link :to="`/groups/${groupId}/admin/roles`">
      <span>権限</span>
    </nuxt-link>
    <nuxt-link :to="`/groups/${groupId}/admin/members`">
      <span>メンバー</span>
    </nuxt-link>
    <nuxt-link :to="`/groups/${groupId}/admin/group`">
      <span>グループ</span>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    expanded: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    groupId() {
      return this.$route.params.group_id
    },
  },
}
</script>

<style scoped>
.expanded {
  background: #fff;
  transition: 300ms;
}

.expanded a {
  color: #000;
  display: block;
  text-decoration: none;
  padding: 10px 100px;
}

.expanded a:hover {
  background: #ececec;
}
</style>
