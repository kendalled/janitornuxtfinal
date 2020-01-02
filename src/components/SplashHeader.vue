<template>
  <div class="antialiased thatimage flex items-center flex-col">
    <!-- hero root -->
    <div class="firstbox flex flex-row w-full h-full items-center pt-12 text-white">
      <div class="w-3/5 flex flex-col ml-3 pl-16 pb-12 pt-8">
        <h1 class="text-white text-left font-black tracking-tight max-w-2xl text-4xl mt-8">
          Professional Cleaning Services for Schools Made Simple.
        </h1>
        <p class="text-xl text-gray-200 font-medium">
          This is the subheading that will convince you.
        </p>
        <div class="mt-3">
          <button class="bg-white transition-bg hover:bg-gray-100 text-gray-800 font-semibold py-3 px-6 border border-gray-400 rounded tracking-tight shadow">
            Learn More
          </button>
          <nuxt-link to="/testing">
            <button class="px-6 py-3 inline-block ml-4 bg-blue-600 hover:bg-blue-700 rounded text-white font-semibold transition-bg tracking-tight shadow-md focus:outline-none">
              Get a Quote
            </button>
          </nuxt-link>
        </div>
      </div>
      <div class="hidden w-2/5 h-auto lg:flex bg-transparent justify-center items-center px-12">
        <TinyQuote />
      </div>
    </div>
    <div class="secondbox flex w-full h-auto items-center py-12 mt-16 text-white">
      <IconCard v-for="i in 3" :key="i" :class="{'border-r-2 border-gray-200': i <= 2}" />
    </div>
  </div>
</template>

<script>
import TinyQuote from '~/components/TinyQuote'
import IconCard from '~/components/IconCard'
export default {
  name: 'SplashHeader',
  components: {
    TinyQuote,
    IconCard
  }
}
</script>

<style scoped>
.thatimage {
  background-image: linear-gradient(rgba(25, 22, 103, 0.62), rgba(25, 22, 103, 0.85)),
    url('../static/saltlakecity3.jpg');
  min-height: calc(60vh + 7rem);
  background-size: auto, cover;
  background-position: center;
  background-attachment: fixed;
}
.firstbox {
  background-color: transparent;
}
.secondbox {
  background-color: rgba(0, 0, 0, 0.51);
}
</style>
