<template>
  <div class="font-sans-serif text-smooth bg-blue antialiased leading-normal">
    <div style="background-image: url('/planet.svg');" class="w-100 h-full bg-right-bottom bg-no-repeat">
      <Navbar v-if="shouldShowNavbar"/>

      <header class="text-white container mx-auto pb-8">

        <h1 class="font-serif font-semibold text-5xl max-w-xs py-6 border-b-3 border-green leading-tight">
          {{ data.title }}
        </h1>

        <p class="font-sans-serif font-medium text-lg max-w-xs py-6">
          {{ data.description }}
        </p>

        <p v-if="data.actionText && data.actionLink">
          <router-link
            class="no-underline font-serif font-semibold text-lg text-blue block bg-white w-64 py-2 px-4 my-4 mb-8 text-center shadow-green border-2 border-green hover:bg-green hover:shadow-white hover:text-white"
            :to="actionLink.link">
              {{ actionLink.text }}
          </router-link>
        </p>

      </header>
    </div>

    <RecentArticles />

    <Content custom/>

    <ContactForm />

    <Footer />
  </div>
</template>

<script>
import Home from './Home.vue'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import RecentArticles from '../components/RecentArticles';

export default {
  components: { Home, Navbar, Footer, ContactForm, RecentArticles },

  computed: {
    data () {
      return this.$page.frontmatter
    },

    actionLink () {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      }
    },

    shouldShowNavbar () {
      const { themeConfig } = this.$site
      const { frontmatter } = this.$page
      if (
        frontmatter.navbar === false ||
        themeConfig.navbar === false) {
        return false
      }

      return true
    },
  }
}
</script>