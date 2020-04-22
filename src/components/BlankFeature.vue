<template>
  <div class="mt-10 sm:grid sm:grid-cols-2 sm:col-gap-8 sm:row-gap-10 lg:col-span-2 lg:mt-0">
    <div v-for="(img, j) in imgs" :key="img" style="height: 172px" class="h-full w-full rounded shadow overflow-hidden relative z-20" :class="[j !== 0 ? 'mt-10 sm:mt-0' : 'mt-0']">
      <img draggable="false" :src="img" class="object-cover h-full w-full">
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlankFeature',
  data () {
    return {
      imgs: [require('~/static/jan1.jpg'), require('~/static/jan2.jpg'), require('~/static/jan3.jpg'), require('~/static/jan4.jpg')]
    }
  }
}
</script>
