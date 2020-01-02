<template>
  <!-- Three columns bg-red-500 -->
  <div class="flex mb-4 w-full mx-5 h-full items-center justify-center">
    <!-- bg-gray-500 -->
    <div class="w-1/3 h-auto flex justify-center">
      <div class="rounded-full h-16 w-16 flex items-center justify-center bg-blue-600 hover:bg-blue-700 transition-bg">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-calendar-date w-8 h-auto text-white fill-current"><path class="primary" d="M5 4h14a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2zm0 5v10h14V9H5z" /><path class="secondary" d="M13 13h3v3h-3v-3zM7 2a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1zm10 0a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1z" /></svg>
      </div>
    </div>
    <!-- bg-gray-500 -->
    <div class="w-2/3 h-auto">
      <div class="h-auto w-auto text-gray-100 text-left">
        <h2 class="text-lg font-semibold">
          Available 365 days a year.
        </h2>
      </div>
      <div class="h-auto w-auto text-gray-300 text-left font-medium">
        <h2 class="text-lg">
          Let us handle the cleaning.
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IconCard'
}
</script>
