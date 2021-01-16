<template>
  <div class="iconImage">
    <img v-if="imageURL" :src="imageURL" alt="iconImage" />
    <SvgIcon v-else name="account-circle" />
  </div>
</template>

<script>
export default {
  props: {
    imageURL: {
      type: String,
      required: false,
      default: '',
    },
  },
}
</script>

<style scoped>
.iconImage {
  background: #fff;
  border-radius: 50%;
  min-height: 20px;
  min-width: 20px;
  height: 50px;
  width: 50px;
}

.iconImage img {
  border-radius: 50%;
  height: 100%;
  object-fit: cover;
  width: 100%;
}

.iconImage svg {
  fill: #8e8e8e;
  height: 100%;
  width: 100%;
}
</style>
