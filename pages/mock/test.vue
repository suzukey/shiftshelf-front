<template>
  <div>
    {{ profile }}
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    // const profile = await $axios.$get('/v1/profiles/me')
    const profile = await $axios.$get('/v1/groups/1/survey')
    return { profile }
  },
}
</script>
