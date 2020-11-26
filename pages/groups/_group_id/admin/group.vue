<template>
  <div class="home">
    <div class="Locustman">
      <div>
        <div class="mb-2">
          <b-avatar src="~/assets/ojisn_aka.png" size="6rem"></b-avatar>
        </div>
        <div>
          <div class="m">
            グループ名 {{ group }}
            <div class="m1">
              <b-form-input
                v-model="group"
                placeholder="グループ名"
              ></b-form-input>
            </div>
          </div>
        </div>
        <div class="m">
          始業時間 {{ start }}
          <b-form-input v-model="start" placeholder="00:00"></b-form-input>
        </div>
        ～
        <div class="m">
          終業時間{{ end }}
          <b-form-input v-model="end" placeholder="24:00"></b-form-input>
        </div>
      </div>
      <div>
        定休日
        <b-form-checkbox-group
          v-model="selected"
          :options="options"
          class="mb-3"
          value-field="item"
          text-field="name"
          disabled-field="notEnabled"
        ></b-form-checkbox-group>
      </div>
    </div>

    <div class="teMto">
      <div class="right">
        <div class="ppap">保存していない変更があります</div>

        <a href="/home" class="ppap">
          リセット
        </a>
        <a href="/home" class="kakunin">
          確定
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'group',
  data() {
    return {
      text: '',
      options: [
        { item: '月', name: '月' },
        { item: '火', name: '火' },
        { item: '水', name: '水' },
        { item: '木', name: '木' },
        { item: '金', name: '金' },
        { item: '土', name: '土' },
        { item: '日', name: '日' },
        { item: '祝', name: '祝' },
      ],
    }
  },
}
</script>
<style>
.home {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.Locustman {
  flex: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.m {
  display: inline-block;
}
.m1 {
  width: 200px;
}
.teMto {
  background-color: #616161;
  font-size: 3vw;
}

.kakunin {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #00675b;
  color: #fff;
  padding: 10px 30px;
  background-color: #00675b;
  font-size: 1vw;
}
.right {
  text-align: right;
}

.ppap {
  text-align: left;
  display: inline-block;
  font-size: 1vw;
  color: #fff;
}
</style>
