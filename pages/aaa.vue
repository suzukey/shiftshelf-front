<template>
  <ul>
    <li v-for="(link, i) in links" :key="`bad-sample_${i}`">
      <a href="javascript:void(0)" @click.prevent="onClick(link.path)">
        {{ link.label }}
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { label: '内部リンク', path: '/groups/1/admin/shifts/1' },
        { label: '外部リンク(HAFILOGサイト)', path: 'https://hafilog.com' },
      ],
    }
  },
  methods: {
    isInternalLink(path) {
      return !/^https?:\/\//.test(path)
    },
    onClick(path) {
      if (this.isInternalLink(path)) {
        this.$router.push(path)
      } else {
        location.href = path
      }
    },
  },
}
</script>
<style scoped>
a {
  background-color: #a2f5bf;
  color: #333;
  text-decoration: none;
  display: block;
  font-size: 100px;
}
</style>
