<template>
  <form class="w-full max-w-lg bg-white px-4 pb-12 pt-4 rounded shadow-md">
    <h2 class="text-lg mb-4 font-semibold text-gray-800 text-center border-b-2 w-2/3 mx-auto">
      Free Quote Request
    </h2>
    <div class="flex flex-wrap -mx-3 mb-4">
      <div class="w-full md:w-1/2 px-4 mb-4 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-1" for="grid-first-name">
          Business Name
        </label>
        <input id="grid-first-name" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Jane">
      </div>
      <div class="w-full md:w-1/2 px-4">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-1" for="grid-last-name">
          Your Name
        </label>
        <input id="grid-last-name" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Doe">
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-1">
      <div class="w-full md:w-1/3 px-4 mb-4 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-1" for="grid-city">
          City
        </label>
        <input id="grid-city" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Albuquerque">
      </div>
      <div class="w-full md:w-1/3 px-4 mb-4 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-1" for="grid-state">
          State
        </label>
        <div class="relative">
          <select id="grid-state" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
            <option>New Mexico</option>
            <option selected>
              Missouri
            </option>
            <option>Texas</option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/3 px-4 mb-4 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-1" for="grid-zip">
          Zip
        </label>
        <input id="grid-zip" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="90210">
      </div>
      <div class="mt-6 flex justify-end w-full px-4 -mb-4">
        <nuxt-link to="/testing">
          <button class="px-6 py-3 inline-block ml-4 bg-blue-600 hover:bg-blue-700 rounded text-white font-semibold transition-bg tracking-tight shadow-md focus:outline-none">
            Submit
          </button>
        </nuxt-link>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: 'TinyQuote'
}
</script>
