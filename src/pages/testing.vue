<template>
  <div style="height: 280px;" class="bg-blue-600 flex w-full justify-around">
    <IconCard v-for="i in 3" :key="i" />
  </div>
</template>

<script>
import IconCard from '~/components/IconCard'
export default {
  name: 'SplashHeader',
  components: {
    IconCard
  }
}
</script>

<style>
/* Style goes here */
</style>
