<template>
  <div class="layout-error">
    <section class="error">
      <h2>{{ error.statusCode }}</h2>
      <div class="article-body">
        <p v-if="error.statusCode === 404">
          アクセスされたページが見つかりませんでした。
          アクセスされたページは存在しないか、すでに削除されています。
        </p>

        <p v-else>
          エラーが発生しました
        </p>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style scoped>
.layout-error {
  max-width: 610px;
  margin: auto;
  padding: 0 10px;
}
section.error {
  margin: 80px 0;
}
h2 {
  line-height: 1.5;
  font-size: 22px;
  margin-bottom: 16px;
}
</style>
