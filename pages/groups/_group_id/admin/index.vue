<template>
  <div class="top">
    <div class="content">
      <main>
        <div class="bara1"></div>
        <div class="wrapper">
          <a href="/survey" rel="noopener noreferrer" class="one">
            <div class="btnsize" size="lg" squared variant="outline-secondary">
              希望調査
            </div>
          </a>

          <a href="/shift" rel="noopener noreferrer" class="one">
            <div class="btnsize" size="lg" squared variant="outline-secondary">
              シフト作成
            </div>
          </a>

          <a href="/survey" rel="noopener noreferrer" class="one">
            <div class="btnsize" size="lg" squared variant="outline-secondary">
              希望閲覧
            </div>
          </a>
        </div>
        <div class="bara2"></div>
        <div class="wrapper">
          <a href="/survey" rel="noopener noreferrer" class="one">
            <div class="btnsize" size="lg" squared variant="outline-secondary">
              権限付与
            </div>
          </a>
          <a href="/survey" rel="noopener noreferrer" class="one">
            <div class="btnsize" size="lg" squared variant="outline-secondary">
              メンバー
            </div>
          </a>
          <a href="/survey" rel="noopener noreferrer" class="one">
            <div class="btnsize" size="lg" squared variant="outline-secondary">
              グループ
            </div>
          </a>
        </div>
      </main>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'group',
}
</script>

<style scoped>
.content {
  display: flex;
  height: calc(100vh - 70px);
}

.list-group-item {
  height: 75px;
}

.sidemenu {
  height: 100%;
  width: 350px;
  background-color: #9b9b9b;
}

.sidemenu-content {
  height: calc(100% - 76px);
}

.sidemenu-content .profile {
  border-bottom: 1px solid #9b9b9b;
}

.sidemenu-content .profile .list-group-item {
  height: 100px;
}

.sidemenu-content .groups {
  height: 30px;
  color: #fff;
  background-color: #616161;
}
.sidemenu-content .groups1 {
  display: block;
  color: #fff;
  font-size: 30px;
  height: 60px;
  width: 100%;
  background-color: #373737;
}

main {
  width: 100%;
}

/* ボタン配置と大きさなどの設定 */

.wrapper {
  width: 640px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;
  font-size: 1.5rem;
}

.one {
  box-sizing: border-box;
  border: 2px solid #999;
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;

  /* 下線なし */
  text-decoration: none;
}
.bara1 {
  width: 100%;
  height: 200px;
}
.bara2 {
  width: 100%;
  height: 50px;
}
.wrapper a:hover {
  background-color: rgb(207, 207, 207);
  color: #fff;
}
</style>
