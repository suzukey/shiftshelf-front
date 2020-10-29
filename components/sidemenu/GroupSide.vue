<template>
  <div class="sidemenu group-sidemenu">
    <div class="sidemenu-content">
      <div class="profile">
        <b-list-group-item class="d-flex align-items-center">
          <b-avatar class="mr-3"></b-avatar>
          <span class="mr-auto">プロフィール（仮）</span>
        </b-list-group-item>
      </div>
      <b-list-group-item class="d-flex align-items-center">
        <b-avatar class="mr-3"></b-avatar>
        <span class="mr-auto">給与計算</span>
      </b-list-group-item>
      <div class="groups"></div>
      <b-list-group>
        <b-list-group-item class="d-flex align-items-center">
          <b-avatar class="mr-3"></b-avatar>
          <span class="mr-auto">ドミノピザ</span>
        </b-list-group-item>
        <b-list-group-item class="d-flex align-items-center">
          <b-avatar variant="primary" text="BV" class="mr-3"></b-avatar>
          <span class="mr-auto">ミスタードーナツ</span>
        </b-list-group-item>
        <b-list-group-item class="d-flex align-items-center">
          <b-avatar
            variant="info"
            src="https://placekitten.com/300/300"
            class="mr-3"
          ></b-avatar>
          <span class="mr-auto">未来屋書店</span>
        </b-list-group-item>
        <b-list-group-item class="d-flex align-items-center">
          <b-avatar
            variant="success"
            icon="people-fill"
            class="mr-3"
          ></b-avatar>
          <span class="mr-auto">グループ追加</span>
        </b-list-group-item>
      </b-list-group>
    </div>
    <HomeFooter />
  </div>
</template>

<style scoped>
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
  background-color: #616161;
}
</style>
