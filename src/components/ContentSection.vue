<template>
  <div class="pt-20 pb-32 bg-gray-100 h-auto w-full border-t-4 border-blue-700">
    <h2 class="text-3xl text-gray-800 font-bold max-w-md ml-64 pl-20">
      Our cleaning services stand out <span class="text-blue-700">above the rest.</span>
    </h2>
    <ContentBlocks />
  </div>
</template>

<script>
import ContentBlocks from '~/components/ContentBlocks'
export default {
  name: 'ContentSection',
  components: {
    ContentBlocks
  }
}
</script>
