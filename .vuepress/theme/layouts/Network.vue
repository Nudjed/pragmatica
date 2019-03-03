<template>
  <div class="font-sans-serif text-smooth bg-blue antialiased leading-normal">
    <Navbar v-if="shouldShowNavbar" />
    <header class="md:flex text-white container mx-auto pb-8 px-4">
      <div class="flex-1 md:max-w-xs">
        <h1 class="font-serif font-semibold text-4xl max-w-xs py-6 border-b-3 border-green leading-tight">{{ data.title
          }}</h1>
        <p class="font-sans-serif font-medium text-lg max-w-xs py-6">{{ data.description }}</p>
        <p v-if="data.actionText && data.actionLink">
          <router-link class="no-underline font-serif font-semibold text-lg text-blue block bg-white w-64 py-2 px-4 my-4 mb-8 text-center shadow-green border-2 border-green hover:bg-green hover:shadow-white hover:text-white"
            :to="actionLink.link">{{ actionLink.text }}</router-link>
        </p>
      </div>
      <div class="flex-1 w-auto mx-auto md:w-1/2">
        <img src="/enginecylinder.svg" class="w-full">
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
  import Home from "./Home.vue";
  import Navbar from "../components/Navbar.vue";
  import Footer from "../components/Footer";
  import ContactForm from "../components/ContactForm";

  export default {
    components: {
      Home,
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