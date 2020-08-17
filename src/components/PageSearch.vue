<template>
  <div>
    <input v-model="query" type="search" autocomplete="off">

    <ul class="h-32 mt-5 bg-gray-200 rounded-sm">
      <li v-for="article of articles" :key="article.slug">
        <nuxt-link :to="'/' + article.slug">
          {{ article.title }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      query: '',
      articles: []
    }
  },
  watch: {
    async query (query) {
      if (!query) {
        this.articles = []
        return
      }

      this.articles = await this.$content('articles')
        .only(['title', 'slug'])
        .sortBy('createdAt', 'asc')
        .limit(12)
        .search(query)
        .fetch()
    }
  }
}
</script>
