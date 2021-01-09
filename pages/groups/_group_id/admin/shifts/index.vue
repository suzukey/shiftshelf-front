<template>
  <div class="admin">
    <div class="main-header">
      <div class="page-title">
        シフト作成画面
      </div>
    </div>
    <div>
      <!-- 対象のシフト募集を選択する -->
      <div class="links">
        <div class="link">
          <nuxt-link :to="`/groups/1/admin/shifts/1/days`">
            12月1週目
          </nuxt-link>
        </div>
        <div class="link">
          <nuxt-link :to="`/groups/1/admin/shifts/1/days`">
            12月2週目
          </nuxt-link>
        </div>
        <div class="link">
          <nuxt-link :to="`/groups/1/admin/shifts/1/days`">
            12月3週目
          </nuxt-link>
        </div>
        <div class="link">
          <nuxt-link :to="`/groups/1/admin/shifts/1/days`">
            12月4週目
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'group',
  data() {
    return {}
  },
}
</script>
<style scoped>
.main-header {
  align-items: center;
  background-color: #00897b;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  color: #fff;
  display: flex;
  height: 65px;
  padding: 0 30px;
  position: relative;
  z-index: 3;
}

.main-header .page-title {
  font-size: 20px;
}
a {
  /* background-color: #a2f5bf; */
  color: #333;
  text-decoration: none;
  display: block;
  font-size: 30px;
}
.links {
  color: #616161;
  padding: 30px;
  margin: 30px 30px;
}

.links .link {
  align-items: center;
  display: flex;
  font-size: 20px;
  font-weight: 700;
  justify-content: center;
  margin-bottom: 20px;
}

.links a {
  align-items: center;
  box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.2);
  color: inherit;
  display: flex;
  height: 135px;
  justify-content: center;
  text-decoration: none;
  transition: 300ms;
  width: 800px;
}

.links a:hover {
  background-color: #f6f6f6;
}
</style>
