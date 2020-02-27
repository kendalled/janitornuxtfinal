<template>
  <div class="pageroot bg-gray-100 antialiased font-sans">
    <TailHero />
    <TailFeat />
    <TailTest />
    <TailStats />
    <TailSub />
    <TailFoot />
  </div>
</template>

<script>
import TailHero from '~/components/TailHero'
import TailFeat from '~/components/TailFeat'
import TailTest from '~/components/TailTest'
import TailStats from '~/components/TailStats'
import TailSub from '~/components/TailSub'
import TailFoot from '~/components/TailFoot'
export default {
  name: 'index2',
  layout: 'checkout',
  components: {
    TailHero,
    TailFeat,
    TailTest,
    TailStats,
    TailSub,
    TailFoot
  }
}
</script>
