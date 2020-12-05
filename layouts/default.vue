<template>
  <Nuxt />
</template>

<script>
export default {
  name: 'DefaultLayout',
}
</script>

<style>
html {
  font-size: 13px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  font-family: var(--font-base);
}

html,
body,
#__nuxt,
#__layout {
  width: 100%;
  height: 100%;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  scrollbar-width: thin;
  margin: 0;
}

::-webkit-scrollbar {
  height: 10px;
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #fff;
  border: solid 1px #ececec;
}

::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 10px;
  box-shadow: inset 0 0 0 2px #fff;
}

:root {
  --font-base: 'Lato', 'Helvetica Neue', Arial, 'Hiragino Kaku Gothic ProN',
    'Hiragino Sans', Meiryo, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
    'Segoe UI Symbol', 'Noto Color Emoji';
}

@media screen and (min-width: 768px) {
  html {
    font-size: 14px;
  }
}

@media screen and (min-width: 1024px) {
  html {
    font-size: 16px;
  }
}
</style>
