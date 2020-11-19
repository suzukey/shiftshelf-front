<template>
  <div>
    <div v-for="post in posts" :key="post">
      <nuxt-link :to="`/groups/1/posts/${post.shift_wish_id}`">{{
        post.shift_wish_name
      }}</nuxt-link>
    </div>
    <!-- <div class="calendar-canvas">
      <FullCalendar :target="target" />
    </div> -->
  </div>
</template>

<script>
export default {
  layout: 'group',
  async asyncData({ $axios, $dayjs }) {
    const posts = await $axios.$get('/v1/groups/1/posts')
    return { posts, target: $dayjs() }
  },
}
</script>
<style scoped>
.calendar-canvas {
  height: 100vh;
  max-height: calc(100vh - 70px - 65px);
}
</style>
