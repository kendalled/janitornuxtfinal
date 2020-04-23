<template>
  <div class="mt-10 sm:grid sm:grid-cols-2 sm:col-gap-8 sm:row-gap-10 lg:col-span-2 lg:mt-0">
    <div v-for="(person, j) in people" :key="person.name" style="height: 172px" class="pt-3 flex-col border-l-4 border-blue-100 rounded bg-white shadow relative z-20" :class="[j !== 0 ? 'mt-10 sm:mt-0' : 'mt-0']">
      <!-- picture row -->
      <div class="flex justify-center">
        <img class="h-16 w-16 rounded-full shadow-md" :src="person.image">
      </div>
      <!-- title row -->
      <div class="mt-1 flex-col">
        <p class="text-center leading-4 font-semibold text-gray-600">
          {{ person.name }}
        </p>
        <p class="text-center leading-6 font-semibold text-blue-500">
          {{ person.occupation }}
        </p>
      </div>
      <!-- button row -->
      <div class="mt-1 flex justify-center">
        <button type="button" class="inline-flex items-center py-2 px-3 border border-blue-300 text-sm leading-4 font-medium rounded-md shadow-sm text-blue-700 bg-blue-100 hover:bg-blue-50 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-blue-200 transition ease-in-out duration-150">
          Contact us
        </button>
        <span class="ml-3 inline-flex rounded-md shadow-sm">
          <button type="button" class="inline-flex items-center px-3 py-2 border border-gray-300 text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150">
            Learn more
          </button>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeamFeature',
  data () {
    return {
      people: [
        {
          name: 'Tim Smith',
          occupation: 'Team Leader',
          image: require('~/assets/img/big1.jpg')
        },
        {
          name: 'John Wayne',
          occupation: 'Team Member',
          image: require('~/assets/img/big2.jpg')
        },
        {
          name: 'David O\'leary',
          occupation: 'Head of Projects',
          image: require('~/assets/img/big3.jpg')
        },
        {
          name: 'Julio Gonzalez',
          occupation: 'Assistant Manager',
          image: require('~/assets/img/big4.jpg')
        }
      ]
    }
  }
}
</script>
