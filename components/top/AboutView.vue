<template>
  <div class="about">
    <TopHeader />
    <div class="descriotion">
      <div class="container">
        <img
          class="demo-img"
          src="~/assets/top_demo.png"
          alt=""
          loading="lazy"
        />
        <img
          src="~/assets/svg/team_work.svg"
          alt=""
          style="display: block; padding: 2.5rem 0; width: 50%; margin: 0 auto;"
          loading="lazy"
        />
        <img
          class="demo-img"
          src="~/assets/top_demo.png"
          alt=""
          loading="lazy"
        />
      </div>
    </div>
    <LetsBegin />
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.demo-img {
  padding-top: 50px;
  width: 100%;
}

.container {
  height: 100%;
  margin: 0 auto;
  overflow: hidden;
  width: 90%;
}

@media screen and (max-width: 767px) {
  .container {
    width: 100%;
  }

  .demo-img {
    padding-top: 20px;
  }
}
</style>
