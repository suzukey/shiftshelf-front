<template>
  <component :is="targetIcon" />
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      targetIcon: '',
    }
  },

  computed: {
    loader() {
      return () => import(`~/assets/svg/icons/${this.name}.svg?inline`)
    },
  },

  created() {
    this.loader().then((res) => {
      this.targetIcon = res
    })
  },
}
</script>
