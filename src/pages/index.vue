<template>
  <div class="pageroot bg-gray-100 antialiased font-sans">
    <TailHero />
    <ThreeColFeat />
    <TailStats />
    <TailTest />
    <TailFeat />
    <TailFoot />
  </div>
</template>

<script>
import TailHero from '~/components/TailHero'
import TailFeat from '~/components/TailFeat'
import TailTest from '~/components/TailTest'
import TailStats from '~/components/TailStats'
import ThreeColFeat from '~/components/ThreeColFeat'
import TailFoot from '~/components/TailFoot'
export default {
  layout: 'checkout',
  components: {
    TailHero,
    TailFeat,
    TailTest,
    TailStats,
    ThreeColFeat,
    TailFoot
  }
}
</script>
