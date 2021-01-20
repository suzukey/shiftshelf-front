<template>
  <div class="no-content">
    <nuxt />
    <p>まだ内容がありません</p>
    <nuxt-link v-if="isLoggedin" to="/home">ホームに戻る</nuxt-link>
    <nuxt-link v-else to="/">トップに戻る</nuxt-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'NoContentLayout',
  computed: {
    ...mapGetters({
      isLoggedin: 'user/isLoggedin',
    }),
  },
}
</script>

<style scoped>
.no-content {
  margin: 20px auto;
  text-align: center;
}

.no-content h1 {
  font-size: 2rem;
}

.no-content p {
  padding-top: 10px;
  font-size: 1.1rem;
}

.no-content a {
  font-size: 1.5rem;
}
</style>
