<template>
  <div>
    <div class="box">
      <table>
        <tr>
          <td><a href="/groups/1/admin/shifts/1/days/1">12月1日</a></td>
        </tr>
        <tr>
          <td><a href="/groups/1/admin/shifts/1/days/2">12月2日</a></td>
        </tr>
        <tr>
          <td><a href="/groups/1/admin/shifts/1/days/3">12月3日</a></td>
        </tr>
        <tr>
          <td><a href="/groups/1/admin/shifts/1/days/4">12月4日</a></td>
        </tr>
        <tr>
          <td><a href="/groups/1/admin/shifts/1/days/5">12月5日</a></td>
        </tr>
        <tr>
          <td><a href="/groups/1/admin/shifts/1/days/6">12月6日</a></td>
        </tr>
        <tr>
          <td><a href="/groups/1/admin/shifts/1/days/7">12月7日</a></td>
        </tr>
        <tr>
          <td><a href="/groups/1/admin/shifts/1/days/8">12月8日</a></td>
        </tr>
        <tr>
          <td><a href="/groups/1/admin/shifts/1/days/9">12月9日</a></td>
        </tr>
        <tr>
          <td><a href="/groups/1/admin/shifts/1/days/10">12月10日</a></td>
        </tr>
      </table>
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
a {
  /* background-color: #a2f5bf; */
  color: #333;
  text-decoration: none;
  display: block;
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
</style>
