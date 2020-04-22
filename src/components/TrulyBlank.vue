<template>
  <div class="mt-10 sm:grid sm:grid-cols-2 sm:col-gap-8 sm:row-gap-10 lg:col-span-2 lg:mt-0">
    <div v-for="(j) in 4" :key="j" style="height: 172px" class="flex items-center justify-center h-full w-full rounded shadow overflow-hidden relative border z-20" :class="[j !== 1 ? 'mt-10 sm:mt-0' : 'mt-0']">
      <p class="text-sm font-semibold text-gray-600">
        Coming soon!
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TrulyBlank'
}
</script>
