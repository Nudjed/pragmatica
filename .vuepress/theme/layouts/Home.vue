<template>
  <div class="font-sans-serif text-smooth bg-blue antialiased leading-normal">
    <div>
      <Navbar v-if="shouldShowNavbar"/>

      <header class="md:flex text-white container mx-auto pb-8 px-4">
        <div class="flex-1 md:max-w-xs">
          <h1
            class="font-serif font-semibold text-4xl max-w-xs py-6 border-b-3 border-green leading-tight"
          >{{ data.title }}</h1>

          <p class="font-sans-serif font-medium text-lg max-w-xs py-6">{{ data.description }}</p>

          <p v-if="data.actionText && data.actionLink">
            <router-link
              class="no-underline font-serif font-semibold text-lg text-blue block bg-white w-64 py-2 px-4 my-4 mb-8 text-center shadow-green border-2 border-green hover:bg-green hover:shadow-white hover:text-white"
              :to="actionLink.link"
            >{{ actionLink.text }}</router-link>
          </p>
        </div>
        <div class="flex-1">
          <img src="enginecylinder.svg">
        </div>
      </header>
    </div>

    <section
      class="font-sans-serif text-smooth bg-white antialiased leading-normal mx-auto p-4 bg-no-repeat bg-full"
      style="background-image: url('/blueprints.svg');"
    >
      <h1
        class="font-serif font-semibold text-4xl py-6 leading-tight text-center"
      >Build around our Innovation Engine.</h1>
      <p
        class="text-lg text-center max-w-lg mx-auto pb-6"
      >All organanisations are being transformed by technology. Often this is driven by customers, sometimes by team and occasionally by competition. We get involved when your organisation decides it needs to link these forces together.</p>
      <div class="md:flex md:flex-wrap">
        <div
          class="block bg-white md:flex-1 md:mx-4 py-2 px-4 my-4 mb-8 shadow-green border-2 border-green"
        >
          <h3 class="font-serif font-semibold text-2xl py-4 leading-tight">A Proven Model</h3>
          <p>Innovation should be measured by the value it creates. We support you to develop the investment model to sustain your own innovation ecosystem. One that supports your organisation to create new capabilities, IP and revenue generation.</p>
        </div>

        <div
          class="block bg-white md:flex-1 md:mx-4 py-2 px-4 my-4 mb-8 shadow-green border-2 border-green"
        >
          <h3 class="font-serif font-semibold text-2xl py-4 leading-tight">A Leading Network</h3>
          <p>Our portfolio companies bring a unique perspective on how traditional markets are changing and what bricks and mortar businesses can do to leverage their brand and reach to deliver digital P&L through partnership with our ecosystem companies.</p>
        </div>

        <div
          class="block bg-white md:flex-1 md:mx-4 py-2 px-4 my-4 mb-8 shadow-green border-2 border-green"
        >
          <h3 class="font-serif font-semibold text-2xl py-4 leading-tight">A Scalable Platform</h3>
          <p>Markets are being transformed by technology. Often this is driven by their customers, sometimes by their team and occasionally by their competition. We get involved when you, the leadership decides it’s time for change.</p>
        </div>
        <p>
          <a
            href="/engine"
            class="no-underline font-serif font-semibold text-lg text-blue block bg-white w-64 py-2 px-4 my-4 mb-8 text-center shadow-green border-2 border-green hover:bg-green hover:shadow-white hover:text-white"
          >Review our Engine</a>
        </p>
      </div>
    </section>

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