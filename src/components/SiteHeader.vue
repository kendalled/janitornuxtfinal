<template>
  <header class="bg-white border-b sm:flex sm:items-center sm:justify-between xl:bg-white" style="height:auto; max-height: 57px;">
    <div class="flex justify-between px-4 py-3 headerRoot xl:w-72 xl:justify-center xl:py-5">
      <nuxt-link to="/">
        <img class="w-auto" style="height:auto; max-height: 37.5px;" alt="Janitor Utah Logo" src="~assets/img/logo.png">
      </nuxt-link>
      <div class="flex sm:hidden">
        <button type="button" class="px-2 text-gray-600 hover:text-blue-600 focus:outline-none focus:text-gray-500" @click="toggle">
          <svg class="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path v-if="isOpen" fill-rule="evenodd" clip-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
            <path v-if="!isOpen" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
          </svg>
        </button>
      </div>
    </div>
    <nav class="sm:flex sm:items-center sm:px-4 xl:flex-1 xl:justify-between" :class="{ 'hidden': !isOpen, 'block': isOpen }">
      <div class="hidden xl:block xl:relative xl:max-w-xs xl:w-full">
        <!-- <div class="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg class="w-6 h-6 text-gray-600 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.32 14.9l1.1 1.1c.4-.02.83.13 1.14.44l3 3a1.5 1.5 0 0 1-2.12 2.12l-3-3a1.5 1.5 0 0 1-.44-1.14l-1.1-1.1a8 8 0 1 1 1.41-1.41l.01-.01zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" /></svg>
        </div>
        <input class="block w-full py-2 pl-10 pr-4 text-gray-900 bg-gray-200 border border-transparent rounded-lg focus:outline-none focus:bg-white focus:border-gray-300" placeholder="Search by keywords"> -->
      </div>
      <div class="sm:flex sm:items-center">
        <div class="px-2 pt-2 pb-5 border-b border-gray-800 navitems sm:flex sm:border-b-0 sm:py-0 sm:px-0">
          <nuxt-link to="/" class="block px-3 py-1 font-semibold tracking-tight text-gray-600 transition-colors rounded xl:text-sm hover:text-blue-600 hover:text-white sm:text-sm sm:px-2 xl:text-gray-800">
            Services
          </nuxt-link>
          <nuxt-link to="/" class="block px-3 py-1 font-semibold tracking-tight text-gray-600 transition-colors rounded xl:text-sm hover:text-blue-600 hover:text-white sm:text-sm sm:px-2 xl:text-gray-800">
            Our Work
          </nuxt-link>
          <nuxt-link to="/" class="block px-3 py-1 font-semibold tracking-tight text-gray-600 transition-colors rounded xl:text-sm hover:text-blue-600 hover:text-white sm:text-sm sm:px-2 xl:text-gray-800">
            About Us
          </nuxt-link>
        </div>
        <div class="relative px-5 py-5 sm:py-0 sm:ml-4 sm:px-0">
          <div class="flex items-center sm:hidden">
            <!-- mobile ul -->
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="object-cover w-8 h-8 px-1 text-blue-600 border-2 border-gray-600 rounded-full fill-current icon-user"><path class="primary" d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10z" /><path class="secondary" d="M21 20v-1a5 5 0 0 0-5-5H8a5 5 0 0 0-5 5v1c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2z" /></svg>
            <span class="ml-4 font-semibold text-gray-700 sm:hidden">Your Account</span>
          </div>
          <div class="mt-5 sm:hidden">
            <a href="#account" class="block text-gray-600 transition-colors xs:hover:text-blue-600 xs:hover:text-white">Account settings</a>
            <a href="#support" class="block mt-3 text-gray-600 transition-colors xs:hover:text-blue-600 xs:hover:text-white">Support</a>
            <nuxt-link to="login" class="block mt-3 text-gray-600 transition-colors xs:hover:text-blue-600 xs:hover:text-white">
              Sign In
            </nuxt-link>
          </div>
          <Dropdown class="hidden sm:block">
            <template #trigger="{ hasFocus, isOpen }">
              <span
                class="block w-8 h-8 px-1 overflow-hidden border-2 rounded-full "
                :class="[(hasFocus || isOpen) ? 'border-white md:border-blue-500' : 'border-gray-300 xl:border-gray-300']"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="object-cover w-full h-full text-blue-600 fill-current icon-user"><path class="primary" d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10z" /><path class="secondary" d="M21 20v-1a5 5 0 0 0-5-5H8a5 5 0 0 0-5 5v1c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2z" /></svg>

              </span>
            </template>
            <template #dropdown>
              <div class="w-48 py-2 mt-3 bg-white rounded-lg shadow-xl xl:border">
                <a href="#account" class="block px-4 py-2 text-gray-800 hover:text-white hover:bg-blue-500">Account settings</a>
                <a href="#support" class="block px-4 py-2 mt-0 text-gray-800 hover:text-white hover:bg-blue-500">Support</a>
                <nuxt-link to="login" class="block px-4 py-2 mt-0 text-gray-800 hover:text-white hover:bg-blue-500">
                  Sign In
                </nuxt-link>
              </div>
            </template>
          </Dropdown>
        </div>
      </div>
    </nav>
    <!-- <Cart /> -->
  </header>
</template>

<script>
import Dropdown from '~/components/Dropdown'
export default {
  components: { Dropdown },
  props: [],
  data () {
    return {
      isOpen: false
    }
  },
  methods: {
    toggle () {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style scoped>
@media (min-width: 1280px) and (min-height: 900px) {
  .headerRoot {
    height: 8vh;
  }
}
</style>
