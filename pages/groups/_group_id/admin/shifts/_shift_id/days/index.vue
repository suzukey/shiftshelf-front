<template>
  <div class="admin">
    <div class="main-header">
      <div class="page-title">
        <nuxt-link to="/groups/_admin/admin/shifts">
          <SvgIcon name="arrow-left" class="icon" />
        </nuxt-link>
        シフト作成画面
      </div>
    </div>
    <div>
      <div class="box">
        <table>
          <tr>
            <td><a href="/groups/1/admin/shifts/1/days/1">2月1日</a></td>
          </tr>
          <tr>
            <td><a href="/groups/1/admin/shifts/1/days/2">2月2日</a></td>
          </tr>
          <tr>
            <td><a href="/groups/1/admin/shifts/1/days/3">2月3日</a></td>
          </tr>
          <tr>
            <td><a href="/groups/1/admin/shifts/1/days/4">2月4日</a></td>
          </tr>
          <tr>
            <td><a href="/groups/1/admin/shifts/1/days/5">2月5日</a></td>
          </tr>
          <tr>
            <td><a href="/groups/1/admin/shifts/1/days/6">2月6日</a></td>
          </tr>
          <tr>
            <td><a href="/groups/1/admin/shifts/1/days/7">2月7日</a></td>
          </tr>
          <tr>
            <td><a href="/groups/1/admin/shifts/1/days/8">2月8日</a></td>
          </tr>
          <tr>
            <td><a href="/groups/1/admin/shifts/1/days/9">2月9日</a></td>
          </tr>
          <tr>
            <td><a href="/groups/1/admin/shifts/1/days/10">2月10日</a></td>
          </tr>
        </table>
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
  font-size: 40px;
}
table th {
  padding: 30px 100px;
}

table td {
  padding: 30px 100px;
  border: 1px solid #616161;
}
.box {
  display: flex;
}
.icon {
  color: #fff;
  fill: currentColor;
}
</style>
