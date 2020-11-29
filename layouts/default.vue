<template>
  <div>
    <Nuxt />
  </div>
</template>

<style>
html {
  font-size: 16px;
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
#__layout,
#__layout > div {
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
  --font-base: 'Lato', 'Helvetica Neue', Arial, 'Noto Sans JP',
    'Hiragino Kaku Gothic ProN', 'Hiragino Sans', Meiryo, sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
}
</style>
