<template>
  <div class="about">
    <TopHeader />
    <div class="descriotion">
      <div class="container">
        <div class="about-catch">
          <h3>SHIFSHELとは</h3>
          <h2>共有・カレンダー機能のあるシフト管理</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            accusamus aliquam nobis non quas tenetur dolorem minima. Eius non
            dignissimos eos asperiores, eaque assumenda harum, corrupti
            laboriosam eligendi quis ut!
          </p>
        </div>
        <div style="margin: 30px 0;">
          <div style="display: flex;">
            <div style="width: 50%;">
              <img
                src="~/assets/svg/team_work.svg"
                alt=""
                style="
                  display: block;
                  padding: 2.5rem 0;
                  width: 50%;
                  margin: 0 auto;
                "
                loading="lazy"
              />
            </div>
            <div style="width: 50%; display: flex; align-items: center;">
              <div>
                <h3>シフト共有</h3>
                <p style="margin-top: 10px;">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur minus, nulla nemo tempore a mollitia nesciunt
                  veniam ipsam, error rerum delectus excepturi dolores inventore
                  praesentium quia veritatis animi non. Eius.
                </p>
              </div>
            </div>
          </div>

          <div style="display: flex; flex-direction: row-reverse;">
            <div style="width: 50%;">
              <img
                src="~/assets/svg/team_work.svg"
                alt=""
                style="
                  display: block;
                  padding: 2.5rem 0;
                  width: 50%;
                  margin: 0 auto;
                "
                loading="lazy"
              />
            </div>
            <div style="width: 50%; display: flex; align-items: center;">
              <div>
                <h3>シフト共有</h3>
                <p style="margin-top: 10px;">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur minus, nulla nemo tempore a mollitia nesciunt
                  veniam ipsam, error rerum delectus excepturi dolores inventore
                  praesentium quia veritatis animi non. Eius.
                </p>
              </div>
            </div>
          </div>
          <div style="display: flex;">
            <div style="width: 50%;">
              <img
                src="~/assets/svg/team_work.svg"
                alt=""
                style="
                  display: block;
                  padding: 2.5rem 0;
                  width: 50%;
                  margin: 0 auto;
                "
                loading="lazy"
              />
            </div>
            <div style="width: 50%; display: flex; align-items: center;">
              <div>
                <h3>シフト共有</h3>
                <p style="margin-top: 10px;">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur minus, nulla nemo tempore a mollitia nesciunt
                  veniam ipsam, error rerum delectus excepturi dolores inventore
                  praesentium quia veritatis animi non. Eius.
                </p>
              </div>
            </div>
          </div>

          <div style="display: flex; flex-direction: row-reverse;">
            <div style="width: 50%;">
              <img
                src="~/assets/svg/team_work.svg"
                alt=""
                style="
                  display: block;
                  padding: 2.5rem 0;
                  width: 50%;
                  margin: 0 auto;
                "
                loading="lazy"
              />
            </div>
            <div style="width: 50%; display: flex; align-items: center;">
              <div>
                <h3>シフト共有</h3>
                <p style="margin-top: 10px;">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur minus, nulla nemo tempore a mollitia nesciunt
                  veniam ipsam, error rerum delectus excepturi dolores inventore
                  praesentium quia veritatis animi non. Eius.
                </p>
              </div>
            </div>
          </div>
        </div>
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

.about-catch {
  margin: 20px 0;
  text-align: center;
}

.about-catch h2,
.about-catch p {
  margin-top: 10px;
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
