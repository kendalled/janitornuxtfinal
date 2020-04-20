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
        <div class="mt-10 sm:grid sm:grid-cols-2 sm:col-gap-8 sm:row-gap-10 lg:col-span-2 lg:mt-0">
          <div>
            <div class="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
              <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6"><path fill-rule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clip-rule="evenodd" /></svg>
            </div>
            <div class="mt-5">
              <h5 class="text-lg leading-6 font-medium text-gray-900">
                Offices and Factories
              </h5>
              <p class="mt-2 text-base leading-6 text-gray-500">
                We are certified to clean your office for the lowest cost. We pride ourselves on 24 hour turnaround time.
              </p>
            </div>
          </div>
          <div class="mt-10 sm:mt-0">
            <div class="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
              <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6"><path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" /></svg>
            </div>
            <div class="mt-5">
              <h5 class="text-lg leading-6 font-medium text-gray-900">
                Hospitals
              </h5>
              <p class="mt-2 text-base leading-6 text-gray-500">
                From regular cleaning to disinfection, we've got you covered. We also serve private practices and dental offices.
              </p>
            </div>
          </div>
          <div class="mt-10 sm:mt-0">
            <div class="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
              <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" /></svg>
            </div>
            <div class="mt-5">
              <h5 class="text-lg leading-6 font-medium text-gray-900">
                Schools and Colleges
              </h5>
              <p class="mt-2 text-base leading-6 text-gray-500">
                Cleanliness is a guarantee for your establishment. The safety of your students and staff is our main priority.
              </p>
            </div>
          </div>
          <div class="mt-10 sm:mt-0">
            <div class="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
              <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 310" class="w-6 h-6">
                <path d="M253.381 206.25v93.215H310v-60.488zM0 299.465h56.619v-93.287L0 238.977zM66.619 174.559v124.598h58.047v-52.825c0-16.568 13.432-30 30-30h.668c16.568 0 30 13.432 30 30v52.825h58.047V174.559L155 101.247l-88.381 73.312z" />
                <path d="M27.502 161.587l14.996 18.198L155 87.083l112.502 92.702 14.996-18.198L162 62.297V40.202h21.631v-14H162V10.535h-14v15.667h-21.631v14H148v22.095z" />
              </svg>
            </div>
            <div class="mt-5">
              <h5 class="text-lg leading-6 font-medium text-gray-900">
                Churches
              </h5>
              <p class="mt-2 text-base leading-6 text-gray-500">
                We know that keeping your space clean should be the standard. First and foremost, that standard is our top focus.
              </p>
            </div>
          </div>
        </div>
      </div>
      <TailVert />
    </div>
  </div>
</template>

<script>
import TailVert from '~/components/TailVert'
export default {
  name: 'TailFeat',
  components: {
    TailVert
  }
}
</script>
