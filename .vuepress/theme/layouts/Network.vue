<template>
  <div class="font-sans-serif text-smooth bg-blue antialiased leading-normal bg-repeat bg-full"
  style="background-image: url('/globalmap.svg');">
    <Navbar v-if="shouldShowNavbar" />
    <header class="md:flex text-white container mx-auto pb-8 px-4">
      <div class="md:max-w-sm mx-auto px-4">
        <h1 class="font-serif font-semibold text-4xl py-6 border-b-3 border-green leading-tight">{{ data.title
          }}</h1>
        <p class="font-sans-serif font-medium text-lg py-6">Our portfolio companies bring a unique perspective on how traditional markets are changing and what bricks and mortar businesses can do to leverage their brand and reach to deliver digital P&L through partnerships with our ecosystem companies.</p>
        <p v-if="data.actionText && data.actionLink">
          <router-link class="no-underline font-serif font-semibold text-lg text-blue block bg-white w-64 py-2 px-4 my-4 mb-8 text-center shadow-green border-2 border-green hover:bg-green hover:shadow-white hover:text-white"
            :to="actionLink.link">{{ actionLink.text }}</router-link>
        </p>
      </div>
           <div class="text-center mx-auto">
        <img src="/fuel.svg" class="w-full">
      </div>
    </header>
    <div class="bg-white px-4 bg-repeat bg-full -m-4" style="background-image: url('/dot.svg');">
      <Content custom />
    </div>
    <ContactForm />
    <Footer />
  </div>
</template>

<script>
  import Network from "./Network.vue";
  import Navbar from "../components/Navbar.vue";
  import Footer from "../components/Footer";
  import ContactForm from "../components/ContactForm";

  export default {
    components: {
      Network,
      Navbar,
      Footer,
      ContactForm
    },

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
        const {
          themeConfig
        } = this.$site;
        const {
          frontmatter
        } = this.$page;
        if (frontmatter.navbar === false || themeConfig.navbar === false) {
          return false;
        }

        return true;
      }
    }
  };
</script>