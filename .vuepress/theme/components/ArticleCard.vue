<template>
  <div class="md:flex-1 md:max-w-xs mx-auto">
    <router-link
      class="bg-white text-blue block no-underline mx-4 p-4 my-4 border-2 border-green shadow-green hover:bg-blue hover:text-white"
      :to="article.path"
    >
      <h4
        class="pb-4 border-b-3 border-green text-3xl leading-tight"
      >{{ article.frontmatter.title }}</h4>
      <p
        class="text-base py-2 pb-4 border-b-3 border-green font-sans-serif font-normal"
      >{{ article.frontmatter.description }}</p>

      <p class="text-base py-2 text-green">{{ article.frontmatter.tags.toString() }}</p>
      <!-- <p v-for="(tag, index) in article.frontmatter.tags" :key="index">{{ tag }}</p> -->
    </router-link>
  </div>
</template>
<script>
export default {
  props: {
    article: {
      type: Object,
      required: true
    }
  }
};
</script>