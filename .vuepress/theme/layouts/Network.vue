<template>
  <div class="font-sans-serif text-smooth bg-white antialiased leading-normal">
    <div class="bg-blue">
      <div
        style="background-image: url('/globalmap.svg');"
        class="container mx-auto h-full bg-center bg-cover bg-no-repeat"
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

    <Content custom/>
    <ContactForm/>
    <Footer/>
  </div>
</template>

<script>
import Home from "./Home.vue";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

export default {
  components: { Home, Navbar, Footer, ContactForm },

  computed: {
    data() {
      return this.$page.frontmatter;
    },

    actionLink() {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      };
    },

    shouldShowNavbar() {
      const { themeConfig } = this.$site;
      const { frontmatter } = this.$page;
      if (frontmatter.navbar === false || themeConfig.navbar === false) {
        return false;
      }

      return true;
    }
  }
};
</script>