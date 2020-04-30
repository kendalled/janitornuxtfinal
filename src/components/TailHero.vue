<template>
  <div x-data="{ open: false }" class="relative bg-white overflow-hidden">
    <div class="max-w-screen-xl mx-auto">
      <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-48">
        <div class="pt-6 px-4 sm:px-6 lg:px-8">
          <nav class="relative flex items-center justify-between sm:h-10 lg:justify-start">
            <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
              <div class="flex items-center justify-between w-full md:w-auto">
                <nuxt-link to="/" title="Homepage">
                  <img class="h-8 w-auto sm:h-10 sm:w-auto" src="~assets/img/logo.png" alt="">
                </nuxt-link>
                <div class="-mr-2 flex items-center md:hidden">
                  <button aria-label="Open menu" type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out" @click="open = true">
                    <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div class="hidden md:block md:ml-10 md:pr-4 md:pt-2">
              <a href="#" class="font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out">Product</a>
              <a href="#" class="ml-8 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out">Features</a>
              <a href="#" class="ml-8 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out">Company</a>
              <a href="#" class="ml-8 font-medium text-blue-600 hover:text-blue-900 focus:outline-none focus:text-blue-700 transition duration-150 ease-in-out">Get Started</a>
            </div>
          </nav>
        </div>
        <!-- v-transition:enter="duration-150 ease-out"
          v-transition:enter-start="opacity-0 scale-95"
          v-transition:enter-end="opacity-100 scale-100"
          v-transition:leave="duration-100 ease-in"
          v-transition:leave-start="opacity-100 scale-100"
          v-transition:leave-end="opacity-0 scale-95" -->
        <transition
          enter-class="transform opacity-0 scale-95"
          enter-active-class="transition ease-out duration-200"
          enter-to-class="transform opacity-100 scale-100"
          leave-class="transform opacity-100 scale-100"
          leave-active-class="transition ease-in duration-75"
          leave-to-class="transform opacity-0 scale-95"
        >
          <div
            v-show="open"
            class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            style="display: none;"
          >
            <div class="rounded-lg shadow-md">
              <div class="rounded-lg bg-white shadow-xs overflow-hidden">
                <div class="px-5 pt-4 flex items-center justify-between">
                  <div>
                    <img class="h-8 w-auto" src="~assets/img/logo.png" alt="">
                  </div>
                  <div class="-mr-2">
                    <button aria-label="Close menu" type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out" @click="open = false">
                      <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div class="px-2 pt-2 pb-3">
                  <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out">Product</a>
                  <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out">Features</a>
                  <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out">Marketplace</a>
                  <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out">Company</a>
                </div>
                <div>
                  <a href="#" class="block w-full px-5 py-3 text-center font-medium text-blue-600 bg-gray-50 hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:bg-gray-100 focus:text-blue-700 transition duration-150 ease-in-out">
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </transition>

        <div class="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-32">
          <div class="sm:text-center lg:text-left">
            <h2 class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
              Industrial grade
              <br class="xl:hidden">
              <span class="text-blue-600">cleaning services.</span>
            </h2>
            <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              For over 20 years, we have provided janitorial services for businesses big and small. Get started with a free quote.
            </p>
            <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div class="rounded-md shadow">
                <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                  Get started
                </a>
              </div>
              <div class="mt-3 sm:mt-0 sm:ml-3">
                <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-blue-700 bg-blue-100 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                  Watch video
                </a>
              </div>
            </div>
          </div>
        </div>
        <svg class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>
      </div>
    </div>
    <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <picture data-not-lazy>
        <source srcset="~assets/img/janitor.webp" type="image/webp">
        <source srcset="~assets/img/janitor.jpg" type="image/jpeg">
        <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="~assets/img/janitor.jpg" alt="Janitorial equipment">
      </picture>
      <!-- <picture data-not-lazy>
        <source srcset="~assets/img/janitor.webp" type="image/webp">
        <source srcset="~assets/img/janitor.jpg" type="image/jpeg">
        <img data-not-lazy class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full hidden md:block" src="~assets/img/janitor.jpg" alt="Janitorial equipment">
      </picture> -->
      <div class="absolute inset-0 bg-cool-gray-700 opacity-50 h-full flex flex-col" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TailHero',
  data () {
    return {
      open: false
    }
  }
}
</script>
