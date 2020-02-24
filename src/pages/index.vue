<template>
  <div class="bg-white">
    <SplashHeader class="splash" />
    <ContentSection2 />
    <VideoSpot />
    <SecondSection />
    <RespFooter />
  </div>
</template>

<script>
import VideoSpot from '~/components/VideoSpot'
import SplashHeader from '~/components/SplashHeader'
import ContentSection2 from '~/components/ContentSection2'
import SecondSection from '~/components/SecondSection'
import RespFooter from '~/components/RespFooter'

export default {
  components: {
    VideoSpot,
    SecondSection,
    SplashHeader,
    ContentSection2,
    RespFooter
  }
}
</script>
