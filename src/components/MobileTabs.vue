<template>
  <div class="mt-4 mb-1 relative z-20">
    <div class="block lg:hidden">
      <select v-model="stringInput" aria-label="Selected tab" class="form-select block w-full">
        <option selected>
          Our Services
        </option>
        <option>Projects</option>
        <option selected>
          Team Members
        </option>
        <option>Pricing</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MobileTabs',
  data () {
    return {
      stringInput: 'Our Services',
      selected: 0
    }
  },
  watch: {
    stringInput (newVal, oldVal) {
      // todo: adjust timing
      // console.log('new:' + newVal)
      // console.log('old:' + oldVal)
      switch (newVal) {
        // services
        case 'Our Services':
          this.selected = 0
          break
          // projects
        case 'Projects':
          this.selected = 1
          break
          // team
        case 'Team Members':
          this.selected = 2
          break
          // pricing
        case 'Pricing':
          this.selected = 3
          break
          // else
        default:
          this.selected = 0
          break
      }
      this.showChange(this.selected)
    }
  },
  methods: {
    showChange (num) {
      console.log('change seen')
      this.$emit('changed', num)
    }
  }
}
</script>
