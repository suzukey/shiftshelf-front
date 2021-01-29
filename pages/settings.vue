<template>
  <div class="auth">
    <div id="contents">
      <div class="auth-form">
        <div class="auth-card">
          <div class="tab_box">
            <ul class="tab_list">
              <li @click="changeTAB(1)">プロフィール</li>
              <li @click="changeTAB(2)">アカウント</li>
            </ul>
            <ul class="article">
              <li v-if="isActive == 1">
                <div class="humanIcon">
                  <SvgIcon name="account-circle" />
                </div>
                <div>
                  <div class="name">宇都宮峻</div>
                </div>
              </li>
              <li v-if="isActive == 1">
                <div class="input-box">
                  <input v-model="name" type="name" placeholder="名前変更" />
                  <div lg="4" class="pb-2">
                    <button size="sm">変更</button>
                  </div>
                </div>
              </li>
              <li v-if="isActive == 2">メールアドレス</li>
              <li v-if="isActive == 2">
                <div class="input-box">
                  <input
                    v-model="email"
                    type="email"
                    placeholder="メールアドレス変更"
                  />
                  <div lg="4" class="pb-2">
                    <button size="sm">変更</button>
                  </div>
                </div>
              </li>
              <li v-if="isActive == 2">
                <div class="input-box">
                  <input
                    v-model="password"
                    type="password"
                    placeholder="パスワード変更"
                  />
                  <div lg="4" class="pb-2">
                    <button size="sm">変更</button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  el: '#contents',
  data() {
    return {
      isActive: 1,
      name: '',
      email: '',
      password: '',
    }
  },
  methods: {
    changeTAB(num) {
      this.isActive = num
    },
  },
}
</script>

<style scoped>
article {
  overflow: hidden;
  margin-top: -1px;
}
.article li {
  width: 320px;
  padding: 20px;
  border: 1px solid #ccc;
}

.tab_list {
  overflow: hidden;
}
.tab_list li {
  float: left;
  padding: 10px 20px;
  border: 1px solid #ccc;
  cursor: pointer;
  transition: 0.3s;
}
.tab_list li:not(:first-child) {
  border-left: none;
}
.tab_list li.active {
  background-color: #000;
  border-color: #000;
  color: #fff;
  cursor: auto;
}
ul {
  list-style: none;
}
.input-box {
  height: 50px;
  margin-bottom: 30px;
}

.input-box input {
  border: solid 2px #cfcfcf;
  height: 100%;
  padding: 0 10px;
  width: 100%;
}

.input-box input::placeholder {
  color: #8e8e8e;
}

.input-box input:focus {
  border: solid 2px #8e8e8e;
  outline: none;
}
.auth {
  background-color: #00897b;
  color: #fff;
  min-height: 100%;
  overflow-x: hidden;
  user-select: none;
  width: 100%;
}
.auth-form {
  display: flex;
  justify-content: center;
  margin: 40px 0;
  width: 100%;
}

.auth-card {
  background-color: #fff;
  box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.2);
  color: #333;
  max-width: 440px;
  min-height: 570px;
  padding: 50px 30px;
  width: 90%;
}
</style>
