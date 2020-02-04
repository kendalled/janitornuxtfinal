<template>
  <div class="bg-white">
    <SplashHeader class="splash" />
    <ContentSection />
    <VideoSpot />
    <SecondSection />
    <RespFooter />
  </div>
</template>

<script>
import VideoSpot from '~/components/VideoSpot'
import SplashHeader from '~/components/SplashHeader'
import ContentSection from '~/components/ContentSection'
import SecondSection from '~/components/SecondSection'
import RespFooter from '~/components/RespFooter'

export default {
  components: {
    VideoSpot,
    SecondSection,
    SplashHeader,
    ContentSection,
    RespFooter
  }
}
</script>
