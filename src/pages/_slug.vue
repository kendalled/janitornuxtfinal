<template>
  <div class="mx-auto prose-sm prose sm:prose lg:prose-lg xl:prose-2xl">
    <nuxt-content :document="article" />
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params, error }) {
    const slug = params.slug || 'index'
    const article = await $content('articles', slug)
      .fetch()
      .catch((err) => {
        error({ statusCode: 404, message: 'Page not found' + err })
      })

    return {
      article
    }
  },
  head () {
    return {
      title: this.article.title,
      meta: [
        { hid: 'description', name: 'description', content: this.article.description },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: this.article.title },
        { hid: 'og:description', property: 'og:description', content: this.article.description },
        // Twitter Card
        { hid: 'twitter:title', name: 'twitter:title', content: this.article.title },
        { hid: 'twitter:description', name: 'twitter:description', content: this.article.description }
      ]
    }
  }
}
</script>
