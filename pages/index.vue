<template>
  <div class="page">
    <TopView @scrollToAbout="scrollToAbout" />
    <AboutView />
    <TopFooter />
  </div>
</template>

<script>
export default {
  methods: {
    scrollToAbout() {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth',
      })
    },
  },
}
</script>

<style scoped>
.page {
  height: 100%;
  width: 100%;
}
</style>
