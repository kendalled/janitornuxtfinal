<template>
  <div class="relative bg-white">
    <div class="absolute inset-0">
      <div class="absolute inset-y-0 left-0 w-1/2 bg-blue-800" />
    </div>
    <div class="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
      <div class="bg-blue-800 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
        <div class="max-w-lg mx-auto">
          <h2 class="text-2xl leading-8 font-extrabold tracking-tight text-gray-100 sm:text-3xl sm:leading-9">
            Get in touch
          </h2>
          <p class="text-blue-50 mt-3 text-lg leading-6 text-gray-500">
            Our quote request makes cleaning your business simple. With no hidden fees, you're guaranteed to get the best price.
          </p>
          <dl class="mt-8 text-base leading-6 text-gray-500">
            <div>
              <dt class="sr-only">
                Postal address
              </dt>
              <dd class="text-blue-50">
                <p>742 Evergreen Terrace</p>
                <p>Springfield, UT 12445</p>
              </dd>
            </div>
            <div class="mt-6">
              <dt class="sr-only">
                Phone number
              </dt>
              <dd class="flex text-blue-50">
                <svg
                  class="flex-shrink-0 h-6 w-6 text-blue-50"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span class="ml-3 text-blue-50">
                  +1 (555) 123-4567
                </span>
              </dd>
            </div>
            <div class="mt-3">
              <dt class="sr-only">
                Email
              </dt>
              <dd class="flex">
                <svg class="flex-shrink-0 h-6 w-6 text-blue-50" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span class="ml-3 text-blue-50">
                  support@janitorutah.com
                </span>
              </dd>
            </div>
          </dl>
          <p class="mt-6 text-base leading-6 text-blue-50">
            Looking for custom pricing?
            <a href="#" class="font-medium text-gray-100 underline">Contact Us</a>.
          </p>
        </div>
      </div>
      <div class="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
        <div class="max-w-lg mx-auto lg:max-w-none">
          <div class="grid grid-cols-1">
            <h2 class="text-2xl leading-8 font-extrabold text-gray-900 sm:text-3xl sm:leading-9">
              Quote Request
            </h2>
          </div>
          <form ref="quote" name="Quote Request" action="https://formspree.io/xrganlwa" method="POST" class="md:h-64 h-full mt-4 grid grid-cols-1 row-gap-6 sm:grid-cols-2 sm:col-gap-8">
            <div v-show="isStepOne">
              <label for="first_name" class="block text-sm font-medium leading-5 text-gray-700">First name</label>
              <div class="mt-1 relative rounded-md shadow-sm">
                <input id="first_name" name="fName" class="form-input block w-full transition ease-in-out duration-150 sm:text-sm sm:leading-5">
              </div>
            </div>
            <div v-show="isStepOne">
              <label for="last_name" class="block text-sm font-medium leading-5 text-gray-700">Last name</label>
              <div class="mt-1 relative rounded-md shadow-sm">
                <input id="last_name" name="lName" class="form-input block w-full transition ease-in-out duration-150 sm:text-sm sm:leading-5">
              </div>
            </div>
            <div v-show="isStepOne" class="sm:col-span-2">
              <label for="email" class="block text-sm font-medium leading-5 text-gray-700">Email</label>
              <div class="mt-1 relative rounded-md shadow-sm">
                <input id="email" name="email" type="email" class="form-input block w-full transition ease-in-out duration-150 sm:text-sm sm:leading-5">
              </div>
            </div>
            <div v-show="isStepOne" class="sm:col-span-2">
              <div class="flex justify-between">
                <label for="phone" class="block text-sm font-medium leading-5 text-gray-700">Phone</label>
                <span class="text-sm leading-5 text-gray-500">Optional</span>
              </div>
              <div class="mt-1 relative rounded-md shadow-sm">
                <input id="phone" name="phone" class="form-input block w-full transition ease-in-out duration-150 sm:text-sm sm:leading-5">
              </div>
            </div>
            <!-- <div v-if="false" class="sm:col-span-2">
                <div class="flex justify-between">
                  <label for="how_can_we_help" class="block text-sm font-medium leading-5 text-gray-700">How can we help you?</label>
                  <span class="text-sm leading-5 text-gray-500">Max. 500 characters</span>
                </div>
                <div class="mt-1 relative rounded-md shadow-sm">
                  <textarea id="how_can_we_help" rows="4" class="form-textarea block w-full transition ease-in-out duration-150 sm:text-sm sm:leading-5" />
                </div>
              </div> -->
            <div v-show="isStepTwo" class="sm:col-span-2">
              <div class="flex justify-between">
                <label for="how_can_we_help" class="block text-sm font-medium leading-5 text-gray-700">How can we help you?</label>
                <span class="text-sm leading-5 text-gray-500">Max. 500 characters</span>
              </div>
              <div class="mt-1 relative rounded-md shadow-sm">
                <textarea id="how_can_we_help" rows="3" placeholder="Please be as specific as possible." class="form-textarea block w-full transition ease-in-out duration-150 sm:text-sm sm:leading-5" />
              </div>
            </div>
            <fieldset v-show="isStepTwo" class="md:-mt-3 mb-2 sm:col-span-2">
              <legend class="block text-sm font-medium leading-5 text-gray-700">
                Area Size <span class="text-gray-500">(square feet)</span>
              </legend>
              <div class="mt-4 grid grid-cols-1 row-gap-4">
                <div class="flex items-center">
                  <input id="budget_under_25k" name="budget" value="under_25k" type="radio" class="form-radio h-4 w-4 text-blue-600 transition duration-150 ease-in-out">
                  <label for="budget_under_25k" class="ml-3">
                    <span class="block text-sm leading-5 text-gray-700">Less than 25K</span>
                  </label>
                </div>
                <div class="flex items-center">
                  <input id="budget_25k-50k" name="budget" value="25k-50k" type="radio" class="form-radio h-4 w-4 text-blue-600 transition duration-150 ease-in-out">
                  <label for="budget_25k-50k" class="ml-3">
                    <span class="block text-sm leading-5 text-gray-700">25K – 50K</span>
                  </label>
                </div>
                <div class="flex items-center">
                  <input id="budget_over_100k" name="budget" value="over_100k" type="radio" class="form-radio h-4 w-4 text-blue-600 transition duration-150 ease-in-out">
                  <label for="budget_over_100k" class="ml-3">
                    <span class="block text-sm leading-5 text-gray-700">100K+</span>
                  </label>
                </div>
              </div>
            </fieldset>
            <!-- <div class="text-right sm:col-span-2">
            </transition>
          </div> -->
          </form>
          <div class="flex justify-between mt-4">
            <span class="inline-flex rounded-md shadow-sm">
              <button v-show="isStepTwo" type="button" class="inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150" @click.prevent="changeFormStep(formStep - 1)">
                Go back
              </button>
            </span>
            <span class="inline-flex rounded-md shadow-sm">
              <button v-show="isStepOne" type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition duration-150 ease-in-out" @click.prevent="changeFormStep(formStep + 1)">
                Continue
              </button>
              <button v-show="isStepTwo" type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition duration-150 ease-in-out" @click.prevent="this.$refs.quote.submit()">
                Submit Quote
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactSection',
  data () {
    return {
      formStep: 0
    }
  },
  computed: {
    isStepOne () {
      return (this.formStep === 0)
    },
    isStepTwo () {
      return (this.formStep === 1)
    }
  },
  methods: {
    changeFormStep (step) {
      this.formStep = step
    }
  }
}
</script>
