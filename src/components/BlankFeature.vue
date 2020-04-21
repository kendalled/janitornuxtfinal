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
      imgs: ['https://images.unsplash.com/photo-1554232456-8727aae0cfa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80', 'https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80',
        'https://images.unsplash.com/photo-1503423571797-2d2bb372094a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80', 'https://images.unsplash.com/photo-1563219125-1db796e20ff2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80']
    }
  }
}
</script>
