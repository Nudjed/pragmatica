<template>
  <div class="font-sans-serif text-smooth bg-white antialiased leading-normal">
    <div class="bg-blue">
      <div
        style="background-image: url('/city.svg');"
        class="container mx-auto h-full bg-right-bottom bg-no-repeat"
      >
        <header class="text-white pb-8 mb-8">
          <Navbar v-if="shouldShowNavbar"/>

          <h1
            class="font-serif font-semibold text-5xl max-w-xs py-6 border-b-3 border-green leading-tight"
          >{{ this.$page.frontmatter.title }}</h1>
          <p
            class="font-sans-serif font-medium text-lg max-w-xs py-6 pb-8 mb-8"
          >{{ this.$page.frontmatter.description }}</p>
        </header>
      </div>
    </div>

    <section class="py-8 -mt-32">
      <div class="container sm:mx-auto md:flex font-serif font-semibold">
        <div class="w-1/4">
          <div class="p-4 sm:max-w-xs my-4 bg-white">
            <h3 class="text-blue text-left mb-3 text-3xl text-center">Filter by tag:</h3>

            <div v-for="(tag,index) in tags" :key="index" class="mb-3">
              <input
                class="text-xl text-grey-dark font-sans-serif font-normal"
                type="checkbox"
                v-model="tag.checked"
                v-on:change="getfilteredData"
              >
              <label class="mr-4">{{ tag.value }}</label>
            </div>
          </div>
        </div>

        <!-- <div class="w-3/4 flex flex-wrap">
          <div class="mx-4 p-4 sm:w-1/3 my-4 border-2 border-green shadow-green bg-white">
            <h4 class="pb-4 border-b-3 border-green text-blue text-3xl leading-tight">Title of the content</h4>
            <p class="text-base py-2 pb-4 border-b-3 border-green font-sans-serif font-normal text-base">Description of the content, that is
            probably just the first 280 charachters so that it fits into this box neatly…</p>
            <p class="text-base py-2 text-green">filter1, filter2</p>
          </div>
        </div>-->
        <div class="w-3/4 flex flex-wrap">
          <ArticleCard v-for="article in filteredData" :article="article" :key="article.title"/>
        </div>
      </div>
    </section>

    <Content/>
  </div>
</template>

<script>
import ArticleCard from "../components/ArticleCard.vue";
import Navbar from "../components/Navbar.vue";

export default {
  components: { ArticleCard, Navbar },

  data() {
    return {
      filteredData: [],
      tags: [
        {
          checked: false,
          value: "tag1"
        },
        {
          checked: false,
          value: "tag6"
        }
      ]
    };
  },
  computed: {
    articles() {
      return this.$site.pages
        .filter(
          x => x.path.startsWith("/projects/") && !x.frontmatter.blog_index
        )
        .sort(
          (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
        );
    },
    uniqueTags() {
      return this.$site.pages.filter(x => x.path.startsWith("/projects/"));
    },
    selectedFilters: function() {
      let filters = [];
      let checkedFilters = this.tags.filter(obj => obj.checked);
      checkedFilters.forEach(element => {
        filters.push(element.value);
      });
      return filters;
    },
    shouldShowNavbar() {
      const { themeConfig } = this.$site;
      const { frontmatter } = this.$page;

      if (frontmatter.navbar === false || themeConfig.navbar === false) {
        return false;
      }

      return true;
    }
  },
  methods: {
    getfilteredData: function() {
      this.filteredData = this.articles;

      let filteredDataByfilters = [];

      // first check if filters where selected
      if (this.selectedFilters.length > 0) {
        filteredDataByfilters = this.filteredData.filter(obj =>
          this.selectedFilters.every(
            val => obj.frontmatter.tags.indexOf(val) >= 0
          )
        );
        this.filteredData = filteredDataByfilters;
      }
    }
  },
  mounted() {
    this.getfilteredData();
  }
};
</script>