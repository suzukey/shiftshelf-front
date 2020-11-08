<template>
  <div>
    {{ profile }}
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const profile = await $axios.$get('/v1/profiles/me')
    return { profile }
  },
}
</script>
