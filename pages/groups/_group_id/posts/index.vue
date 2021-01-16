<template>
  <div class="admin">
    <div class="main-header">
      <div class="page-title">
        シフト希望提出画面
      </div>
    </div>
    <div>
      <h2>[{{ group.name }}]&nbsp;&nbsp;シフト希望調査</h2>
      <div v-for="post in posts" :key="post" class="links">
        <div class="link">
          <nuxt-link :to="`/groups/1/posts/${post.shift_wish_id}`">{{
            post.shift_wish_name
          }}</nuxt-link>
        </div>
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
.links {
  color: #616161;
  margin: 30px 30px;
}

.links .link {
  align-items: center;
  display: flex;
  font-size: 20px;
  font-weight: 700;
  justify-content: center;
  margin-bottom: 20px;
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
  width: 800px;
}

.links a:hover {
  background-color: #f6f6f6;
}
</style>
