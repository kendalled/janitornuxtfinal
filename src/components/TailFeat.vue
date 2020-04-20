<template>
  <div class="bg-gray-50 overflow-hidden lg:pt-20">
    <div class="relative max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <svg class="block sm:hidden z-10 absolute top-0 left-full transform -translate-x-1/2 -translate-y-3/4 lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4" width="404" height="784" fill="none" viewBox="0 0 404 784">
        <defs>
          <pattern
            id="8b1b5f72-e944-4457-af67-0c6d15a99f38"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="0"
              y="0"
              width="4"
              height="4"
              class="text-gray-200"
              fill="currentColor"
            />
          </pattern>
        </defs>
        <rect width="404" height="784" fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)" />
      </svg>
      <!-- this is vertical nav component -->
      <div class="relative lg:grid lg:grid-cols-3 lg:col-gap-8">
        <div class="lg:col-span-1">
          <h3 class="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 z-20 relative">
            Cleaning services made simple.
          </h3>
        </div>
        <transition
          enter-active-class="transition-all transition duration-150 ease-out-quad"
          leave-active-class="transition-all transition duration-200 ease-in-quad"
          enter-class="opacity-0"
          enter-to-class="opacity-100"
          leave-class="opacity-100"
          leave-to-class="opacity-0"
          mode="out-in"
        >
          <FeatureContent v-if="selected === 0" />
          <!-- @before-leave="backdropLeaving = true"
      @after-leave="backdropLeaving = false" -->
          <BlankFeature v-if="selected === 1" />
        </transition>
      </div>
      <TailVert @diff="updateSelect" />
    </div>
  </div>
</template>

<script>
import FeatureContent from '~/components/FeatureContent'
import BlankFeature from '~/components/BlankFeature'
import TailVert from '~/components/TailVert'
export default {
  name: 'TailFeat',
  components: {
    FeatureContent,
    BlankFeature,
    TailVert
  },
  data () {
    return {
      selected: 0
    }
  },
  methods: {
    updateSelect (value) {
      // updates which tab is selected
      this.selected = value
      console.log('now, selected is: (parent component)')
    }
  }
}
</script>
