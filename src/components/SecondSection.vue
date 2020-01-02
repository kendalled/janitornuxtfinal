<template>
  <section class="sectionTwo">
    <!-- Two columns -->
    <div class="flex mb-4 text-center">
      <div class="w-1/2 bg-gray-400 h-12">
        text content paragraph
      </div>
      <div class="w-1/2 bg-gray-500 h-12">
        video rounded popup
      </div>
    </div>

    <!-- Three columns -->
    <div class="flex mb-4">
      <div v-for="l in 3" :key="l" class="w-1/3 bg-gray-400 h-12 text-center">
        testimonial
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SecondSection'
}
</script>
