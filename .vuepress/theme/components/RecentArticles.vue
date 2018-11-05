<template>
    <section class="py-8 bg-white">
        <div class="container sm:mx-auto sm:flex sm:flex-wrap font-serif font-semibold">

            <div class="w-1/4 p-4 sm:max-w-xs my-4">

                <h3 class="text-blue text-left mb-3 text-3xl">
                    Projects &amp; insights.
                </h3>

                <p class="text-green font-sans-serif font-medium text-left text-base">
                    Pragmatica brings a fresh approach to consulting through investing in our partnerships with clients and sharing in the value we help create.
                </p>

                <router-link
                    class="no-underline font-serif font-semibold text-lg text-white block bg-green border-2 border-blue w-64 py-2 px-4 my-4 mt-8 text-center shadow-blue hover:bg-blue hover:shadow-green"
                    :to="$withBase('/projects.html')"
                >see all content</router-link>

            </div>

            <div class="w-3/4 flex flex-wrap">
                <ArticleCard v-for="article in articles" :article="article" :key="article.title" />
            </div>
            <!-- <router-link class="text-blue block no-underline mx-4 p-4 sm:max-w-xs my-4 border-2 border-green shadow-green hover:bg-blue hover:text-white" :to="article.path" >
                <h4 class="pb-4 border-b-3 border-green  text-3xl leading-tight">
                    {{ article.frontmatter.title }}
                </h4>
                <p class="text-base py-2 pb-4 border-b-3 border-green font-sans-serif font-normal">
                    {{ article.frontmatter.description }}
                </p>

                <p class="text-base py-2 text-green">{{ article.frontmatter.tags }}</p>
            </router-link> -->

        </div>
    </section>
</template>

<script>
import ArticleCard from './ArticleCard.vue'

export default {
    components: { ArticleCard },
    computed: {
        articles() {
            return this.$site.pages
                .filter(x => x.path.startsWith('/projects/') && !x.frontmatter.blog_index)
                .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))
                .slice(0,4);
        }
    }
}
</script>