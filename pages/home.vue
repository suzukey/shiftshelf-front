<template>
  <div class="top">
    <HomeHeader />
    <div class="content">
      <div class="sidemenu">
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
      <main>
        <b-calendar
          selected-variant="success"
          today-variant="info"
          nav-button-variant="primary"
          hide-header
          width="100%"
        >
        </b-calendar>
      </main>
    </div>
  </div>
</template>

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
  background-color: #616161;
}

main {
  width: 100%;
}
</style>

<style>
.b-calendar {
  width: 100%;
  height: calc(100vh - 70px);
}

.b-calendar .b-calendar-grid {
  height: calc(100% - 60px) !important;
}

.b-calendar .row {
  height: calc(calc(100vh - 160px) / 6) !important;
}

.b-calendar .col {
  border: 1px solid #cacaca;
}

.b-calendar .btn {
  width: 50px !important;
  height: 50px !important;
}

.b-calendar span {
  font-size: 30px !important;
}

.b-calendar footer {
  display: none !important;
}
</style>
