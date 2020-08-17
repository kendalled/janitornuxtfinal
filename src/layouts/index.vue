<template>
  <div id="app">
    <nuxt />
    <FloatingBanner />
  </div>
</template>

<style>
html {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: #f1f1f1;
}
</style>
<script>
import FloatingBanner from '~/components/FloatingBanner'
export default {
  name: 'Index',
  components: {
    FloatingBanner
  }
}
</script>
