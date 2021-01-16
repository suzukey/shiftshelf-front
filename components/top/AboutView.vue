<template>
  <div class="about">
    <TopHeader />
    <div class="description">
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
        <div class="strength">
          <div class="strength-item">
            <div class="strength-item_content">
              <SampleSvg class="strength-item_image" />
            </div>
            <div class="strength-item_content">
              <div class="strength-item_lines">
                <h3>シフト共有</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur minus, nulla nemo tempore a mollitia nesciunt
                  veniam ipsam, error rerum delectus excepturi dolores inventore
                  praesentium quia veritatis animi non. Eius.
                </p>
              </div>
            </div>
          </div>

          <div class="strength-item rev">
            <div class="strength-item_content">
              <SampleSvg class="strength-item_image" />
            </div>
            <div class="strength-item_content">
              <div class="strength-item_lines">
                <h3>シフト共有</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur minus, nulla nemo tempore a mollitia nesciunt
                  veniam ipsam, error rerum delectus excepturi dolores inventore
                  praesentium quia veritatis animi non. Eius.
                </p>
              </div>
            </div>
          </div>
          <div class="strength-item">
            <div class="strength-item_content">
              <SampleSvg class="strength-item_image" />
            </div>
            <div class="strength-item_content">
              <div class="strength-item_lines">
                <h3>シフト共有</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur minus, nulla nemo tempore a mollitia nesciunt
                  veniam ipsam, error rerum delectus excepturi dolores inventore
                  praesentium quia veritatis animi non. Eius.
                </p>
              </div>
            </div>
          </div>

          <div class="strength-item rev">
            <div class="strength-item_content">
              <SampleSvg class="strength-item_image" />
            </div>
            <div class="strength-item_content">
              <div class="strength-item_lines">
                <h3>シフト共有</h3>
                <p>
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
import SampleSvg from '~/assets/svg/team_work.svg?inline'

export default {
  components: {
    SampleSvg,
  },
}
</script>

<style scoped>
.container {
  height: 100%;
  margin: 0 auto;
  overflow: hidden;
  width: 90%;
  max-width: 900px;
}

.about-catch {
  margin: 20px 0;
  text-align: center;
}

.about-catch h2,
.about-catch p {
  margin-top: 10px;
}

.strength {
  margin: 30px 0;
}

.strength-item_image {
  display: block;
  padding: 2.5rem 2rem;
  margin: 0 auto;
  width: 60%;
}

.strength-item_content {
  width: 100%;
  display: flex;
  align-items: center;
}

.strength-item_lines {
  margin: 0 auto;
  max-width: 90%;
}

.strength-item_lines p {
  margin-top: 10px;
}

@media screen and (min-width: 768px) {
  .container {
    width: 90%;
  }

  .strength-item {
    display: flex;
  }

  .strength-item.rev {
    flex-direction: row-reverse;
  }

  .strength-item_image {
    width: 80%;
  }

  .strength-item_content {
    width: 50%;
  }
}
</style>
