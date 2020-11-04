<template>
  <transition name="menu-list">
    <div v-if="isActive" class="list-items">
      <router-link class="list-item" to="/settings">
        設定
      </router-link>
      <router-link class="list-item" to="/help">
        ヘルプ
      </router-link>
      <router-link class="list-item" to="/contact">
        お問い合わせ
      </router-link>
      <div class="list-separator" />
      <div class="list-item" @click="logout">ログアウト</div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    isActive: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    logout() {
      this.$router.push({ path: '/' })
    },
  },
}
</script>

<style scoped>
.list-items {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 3px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);
  padding: 10px 0;
  position: absolute;
  right: 20px;
  top: 65px;
  width: 275px;
  z-index: 10;
}

.list-item {
  color: #555;
  display: block;
  font-size: 18px;
  font-weight: 400;
  height: 50px;
  line-height: 50px;
  padding: 0 20px;
  text-decoration: none;
}

.list-item:hover {
  background-color: #eee;
}

.list-separator {
  width: 100%;
  height: 1px;
  margin: 4px 0;
  background-color: #ddd;
}

.menu-list-enter-active,
.menu-list-leave-active {
  transition: all 0.3s;
}

.menu-list-enter,
.menu-list-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
