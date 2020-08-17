<template>
  <!-- TODO: sync both nav states for tabs -->
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
            Janitorial services made simple.
          </h3>
          <MobileTabs @changed="mobileTabChange" />
          <TailVert @diff="updateSelect" />
          <div class="flex items-end justify-between h-16 lg:h-24 max-w-xs relative z-20">
            <!-- new button -->
            <span class="inline-flex rounded-md shadow-sm">
              <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-6 font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition ease-in-out duration-150">
                <svg class="-ml-1 mr-3 h-5 w-5 smallSvg" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884zM18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" clip-rule="evenodd" />
                </svg>
                Free Quote
              </button>
            </span>
            <!-- end new button -->
            <!-- <span class="inline-flex rounded-md shadow-sm">
              <svg fill="currentColor" viewBox="0 0 20 20" class="-ml-1 mr-3 h-5 w-5"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
              <button type="button" class="inline-flex items-center px-4 py-2 border border-gray-300 text-base leading-6 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150">
                Contact us
              </button>
            </span> -->
            <span class="inline-flex rounded-md shadow-sm">
              <button type="button" class="inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-6 font-semibold rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150">
                <svg fill="currentColor" viewBox="0 0 20 20" class="-ml-1 mr-3 h-5 w-5 smallSvg"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                Contact Us
              </button>
            </span>
          </div>
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

          <TeamFeature v-if="selected === 2" />

          <TrulyBlank v-if="selected === 3" />
        </transition>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media screen and (max-width: 343px) {
  .smallSvg {
    display: none !important;
  }
}
</style>

<script>
import FeatureContent from '~/components/FeatureContent'
import BlankFeature from '~/components/BlankFeature'
import TeamFeature from '~/components/TeamFeature'
import TrulyBlank from '~/components/TrulyBlank'
import MobileTabs from '~/components/MobileTabs'
import TailVert from '~/components/TailVert'
export default {
  name: 'TailFeat',
  components: {
    FeatureContent,
    BlankFeature,
    TeamFeature,
    TrulyBlank,
    MobileTabs,
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
    },
    mobileTabChange (value) {
      // changes current tab if mobile input
      this.selected = value
    }
  }
}
</script>
