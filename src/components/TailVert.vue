<template>
  <!-- no width utilities needed? -->
  <div class="flex w-full max-w-xs justify-center -mt-64 z-20 absolute hidden lg:block">
    <!-- w-56 -->
    <nav id="nav" class="w-full relative">
      <span
        class="z-10 absolute h-10 w-full bg-white rounded-lg shadow ease-out transition-transform duration-300"
        :style="{ transform: `translateY(calc(100% * ${selected}))` }"
      />
      <ul class="relative z-20">
        <li v-for="(tab, j) in tabs" :key="j">
          <button
            type="button"
            :aria-selected="selected === j"
            class="py-2 px-3 w-full flex items-center focus:outline-none focus-visible:underline"
            @click="changeTab(j)"
          >
            <svg
              v-if="tab === 'Services'"
              :class="selected === j ? 'text-blue-400' : 'text-gray-500'"
              class="h-6 w-6 transition-all ease-out duration-300"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10M9 21h6" />
            </svg>
            <svg
              v-if="tab === 'Projects'"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              :class="selected === 1 ? 'text-blue-400' : 'text-gray-500'"
              class="h-6 w-6 transition-all ease-out duration-300"
            ><path d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg>
            <svg
              v-if="tab === 'Team'"
              :class="selected === j ? 'text-blue-400' : 'text-gray-500'"
              class="h-6 w-6 transition-all ease-out duration-300"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <svg
              v-if="tab === 'Pricing'"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              :class="selected === 3 ? 'text-blue-400' : 'text-gray-500'"
              class="h-6 w-6 transition-all ease-out duration-300"
            ><path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span
              :class="selected === j ? 'text-blue-600' : 'text-gray-700'"
              class="ml-2 text-sm font-medium transition-all ease-out duration-300"
            >
              {{ tab }}
            </span>
          </button>
        </li>
        <!-- <li>
          <button
            type="button"
            :aria-selected="selected === 1"
            class="py-2 px-3 w-full flex items-center focus:outline-none focus-visible:underline"
            @click="changeTab(1)"
          >
            <span
              :class="selected === 1 ? 'text-blue-600' : 'text-gray-700'"
              class="ml-2 text-sm font-medium transition-all ease-out duration-300"
            >
              Projects
            </span>
          </button>
        </li> -->
        <!-- todo: implement hover state on text and bounding box  :class="[selected === 3 ? '' : 'transition-colors duration-300 hover:bg-gray-100 rounded']" -->
      </ul>
    </nav>
  </div>
</template>

<style scoped>
.focus-visible.focus-visible\:underline {
  text-decoration: underline;
}
</style>

<script>
export default {
  name: 'TailVert',
  data () {
    return {
      selected: 0,
      tabs: ['Services', 'Projects', 'Team', 'Pricing']
    }
  },
  methods: {
    changeTab (value) {
      // alert('this worked')
      this.$emit('diff', value)
      this.selected = value
    }
  }
}
</script>
