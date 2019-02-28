<template>
  <div class="font-sans-serif text-smooth bg-white antialiased leading-normal">

    <div class="bg-blue">
      <div style="background-image: url('/city.svg');" class="container mx-auto h-full bg-right-bottom bg-no-repeat">
        <header class="text-white pb-8 mb-8">

          <Navbar v-if="shouldShowNavbar"/>

          <h1 class="font-serif font-semibold text-5xl max-w-xs py-6 border-b-3 border-green leading-tight">
            {{ this.$page.frontmatter.title }}
          </h1>
          <p class="font-sans-serif font-medium text-lg max-w-xs py-6 pb-8 mb-8">
            {{ this.$page.frontmatter.description }}
          </p>

        </header>
      </div>
    </div>

    <section class="px-4">
        <h1 class="font-serif font-semibold text-4xl py-6 leading-tight text-center">Build around our Innovation Engine.</h1>
    <p class="text-lg text-center max-w-lg mx-auto pb-6">All organanisations are being transformed by technology. Often this is driven by customers, sometimes by team and occasionally by competition. We get involved when your organisation decides it needs to link these forces together.</p>
    <div class="md:flex">
    <div class="block bg-white md:flex-1 md:mx-4 py-2 px-4 my-4 mb-8 shadow-green border-2 border-green max-w-xs">
        <img src="/paul-pressshot-sm.png" class="-mt-8 w-48 h-48 rounded-full border-4 border-green mx-auto">
    <h3 class="font-serif font-semibold text-2xl py-4 leading-tight">Paul Teather - Principle Partner</h3>
    <p>Paul brings a wealth of experience.</p>
    <p>Contact Paul</p>
    </div>
    <div class="block bg-white md:flex-1 md:mx-4 py-2 px-4 my-4 mb-8 shadow-green border-2 border-green">
    <h3 class="font-serif font-semibold text-2xl py-4 leading-tight">A Leading Network</h3>
    <p>Our portfolio companies bring a unique perspective on how traditional markets are changing and what bricks and mortar businesses can do to leverage their brand and reach to deliver digital P&L through partnership with our ecosystem companies.</p> 
    <p class="no-underline font-serif font-semibold text-lg text-blue block bg-white my-4 hover:text-blue-lighter hover:underline">Meet our network ></p>
    </div>
    <div class="block bg-white md:flex-1 md:mx-4 py-2 px-4 my-4 mb-8 shadow-green border-2 border-green">
    <h3 class="font-serif font-semibold text-2xl py-4 leading-tight">A Proven Model</h3>
    <p>Innovation should be measured by the value it creates. We support you to develop the investment model to sustain your own innovation ecosystem. One that supports your organisation to create new capabilities, IP and revenue generation.<p>
    <p class="no-underline font-serif font-semibold text-lg text-blue block bg-white my-4 hover:text-blue-lighter hover:underline">Read more about our ecosystem model ></p>
    </div></div>
    </section>

    <Content />

  </div>
</template>

<script>
import Home from './Home.vue'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

export default {
  components: { Home, Navbar, Footer, ContactForm },

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