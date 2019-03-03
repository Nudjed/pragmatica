<template>
  <div class="font-sans-serif text-smooth bg-blue antialiased leading-normal bg-repeat bg-full" style="background-image: url('/globalmap.svg');">
    <Navbar v-if="shouldShowNavbar" />
    <header class="md:flex text-white container mx-auto pb-8 px-4">
      <div class="md:max-w-sm mx-auto px-4">
        <h1 class="font-serif font-semibold text-4xl py-6 border-b-3 border-green leading-tight">{{ data.title
          }}</h1>
        <p class="font-sans-serif font-medium text-lg py-6">Organisations are being transformed by digital. Often this is driven by their customers, sometimes by
their team and occasionally by their competition. We get involved when you, the leadership decides it’s time for
change.</p>
      </div>
      <div class="text-center">
        <img src="/transport.svg" class="w-full">
      </div>
    </header>
    <div class="bg-white px-4 bg-repeat bg-full -m-4" style="background-image: url('/dot.svg');">
      <Content custom />
      <ContactForm />
      <Footer />
    </div>
  </div>
</template>

<script>
  import Projects from "./Projects.vue";
  import Navbar from "../components/Navbar.vue";
  import Footer from "../components/Footer";
  import ContactForm from "../components/ContactForm";

  export default {
    components: {
      Projects,
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