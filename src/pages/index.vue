<template>
  <div class="pageroot bg-gray-100 antialiased font-sans">
    <TailHero />
    <TailFeat />
    <TailStats />
    <ThreeColFeat />
    <PricingTiers />
    <TailTest />
    <DarkNewsletter />
    <TailFoot />
  </div>
</template>

<script>
import TailHero from '~/components/TailHero'
import TailFeat from '~/components/TailFeat'
import TailTest from '~/components/TailTest'
import TailStats from '~/components/TailStats'
import ThreeColFeat from '~/components/ThreeColFeat'
import DarkNewsletter from '~/components/DarkNewsletter'
import PricingTiers from '~/components/PricingTiers'
import TailFoot from '~/components/TailFoot'
export default {
  components: {
    TailHero,
    TailFeat,
    TailTest,
    TailStats,
    ThreeColFeat,
    DarkNewsletter,
    PricingTiers,
    TailFoot
  }
}
</script>
