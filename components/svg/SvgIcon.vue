<template>
  <component :is="targetIcon" :class="className" />
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
    className() {
      return `icon-${this.name}`
    },
    loader() {
      return () => import(`~/assets/svg/icons/${this.name}.svg?inline`)
    },
  },

  watch: {
    name() {
      this.changeIcon()
    },
  },

  created() {
    this.changeIcon()
  },

  methods: {
    changeIcon() {
      this.loader().then((res) => {
        this.targetIcon = res
      })
    },
  },
}
</script>
