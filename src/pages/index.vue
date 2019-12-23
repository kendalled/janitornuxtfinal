<template>
  <div class="bg-white">
    <SplashHeader class="splash" />
    <TestimonialSection />
    <ContentSection />
    <!-- <BlankSection /> -->
    <RespFooter />
  </div>
</template>

<script>
import SplashHeader from '~/components/SplashHeader'
import ContentSection from '~/components/ContentSection'
// import BlankSection from '~/components/BlankSection'
import RespFooter from '~/components/RespFooter'
import TestimonialSection from '~/components/TestimonialSection'

export default {
  components: {
    SplashHeader,
    ContentSection,
    RespFooter,
    TestimonialSection
  }
}
</script>

<style>
/* Style goes here */
.splash {
  max-height: calc(100vh - 57px);
}
</style>
