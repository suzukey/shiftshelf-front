<template>
  <div>
    <h2>[{{ group.name }}]&nbsp;&nbsp;シフト希望調査</h2>
    <div class="moji">
      <div v-for="post in posts" :key="post">
        <td>
          <nuxt-link :to="`/groups/1/posts/${post.shift_wish_id}`">{{
            post.shift_wish_name
          }}</nuxt-link>
        </td>
      </div>
      <!-- <div class="calendar-canvas">
      <FullCalendar :target="target" />
    </div> -->
    </div>
  </div>
</template>

<script>
export default {
  layout: 'group',
  fetch() {
    const groupId = this.groupId
    this.$axios.get(`/v1/groups/${groupId}`).then((res) => {
      const group = {
        name: res.data.group_name,
      }

      this.group = group
    })
  },
  async asyncData({ $axios, $dayjs }) {
    const posts = await $axios.$get('/v1/groups/1/posts')
    return { posts, target: $dayjs() }
  },
  data() {
    return {
      group: {},
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
.calendar-canvas {
  height: 100vh;
  max-height: calc(100vh - 70px - 65px);
}

a {
  font-size: 25px;
  padding: 10px 20px;
}
.moji {
  display: flex;
}
</style>
