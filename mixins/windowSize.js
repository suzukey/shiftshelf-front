export default {
  mounted() {
    this.$nextTick(() => {
      this.getWindowSize()
      window.addEventListener('resize', this.getWindowSize)
    })
  },
  methods: {
    getWindowSize() {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    },
  },
}
