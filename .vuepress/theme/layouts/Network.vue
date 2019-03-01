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

    <h2
      class="font-serif font-semibold text-5xl py-6 border-b-3 border-green leading-tight"
    >Partners</h2>
    <section class="px-4 flex flex-wrap">
      <!--Start of a Profile-->
      <div class="block bg-white shadow-green border-2 border-green w-64 md:mx-4 p-4 m-2">
        <div class="mx-auto">
          <img src="/paul-pressshot-sm.png" class="rounded-full w-64">
        </div>
        <h3 class="font-serif font-semibold text-2xl my-4 leading-tight border-b-2 border-green">
          Paul Teather -
          <span class="text-xl font-normal italic">Principle Partner</span>
        </h3>
        <p>Paul is a founding partner in Pragmatica bringing a wealth of experience from Oracle, KPMG and Atos where he sat on the board.</p>
      </div>
      <!--/End of a Profile-->
      <!--Start of a Profile-->
      <div class="block bg-white shadow-green border-2 border-green w-64 md:mx-4 p-4 m-2">
        <div class="mx-auto">
          <img src="/paul-pressshot-sm.png" class="rounded-full w-64">
        </div>
        <h3 class="font-serif font-semibold text-2xl my-4 leading-tight border-b-2 border-green">
          Paul Teather -
          <span class="text-xl font-normal italic">Principle Partner</span>
        </h3>
        <p>Paul is a founding partner in Pragmatica bringing a wealth of experience from Oracle, KPMG and Atos where he sat on the board.</p>
      </div>
      <!--/End of a Profile-->
    </section>
    <h2
      class="font-serif font-semibold text-5xl py-6 border-b-3 border-green leading-tight"
    >Portfolio</h2>
    <section class="px-4 flex flex-wrap">
      <!--Start of a Profile-->
      <div class="block bg-white shadow-green border-2 border-green w-64 md:mx-4 p-4 m-2">
        <div class="mx-auto">
          <img src="/paul-pressshot-sm.png" class="rounded-full w-64">
        </div>
        <h3 class="font-serif font-semibold text-2xl my-4 leading-tight border-b-2 border-green">
          Paul Teather -
          <span class="text-xl font-normal italic">Principle Partner</span>
        </h3>
        <p>Paul is a founding partner in Pragmatica bringing a wealth of experience from Oracle, KPMG and Atos where he sat on the board.</p>
      </div>
      <!--/End of a Profile-->
      <!--Start of a Profile-->
      <div class="block bg-white shadow-green border-2 border-green w-64 md:mx-4 p-4 m-2">
        <div class="mx-auto">
          <img src="/paul-pressshot-sm.png" class="rounded-full w-64">
        </div>
        <h3 class="font-serif font-semibold text-2xl my-4 leading-tight border-b-2 border-green">
          Paul Teather -
          <span class="text-xl font-normal italic">Principle Partner</span>
        </h3>
        <p>Paul is a founding partner in Pragmatica bringing a wealth of experience from Oracle, KPMG and Atos where he sat on the board.</p>
      </div>
      <!--/End of a Profile-->
      <!--Start of a Profile-->
      <div class="block bg-white shadow-green border-2 border-green w-64 md:mx-4 p-4 m-2">
        <div class="mx-auto">
          <img src="/paul-pressshot-sm.png" class="rounded-full w-64">
        </div>
        <h3 class="font-serif font-semibold text-2xl my-4 leading-tight border-b-2 border-green">
          Paul Teather -
          <span class="text-xl font-normal italic">Principle Partner</span>
        </h3>
        <p>Paul is a founding partner in Pragmatica bringing a wealth of experience from Oracle, KPMG and Atos where he sat on the board.</p>
      </div>
      <!--/End of a Profile-->
      <!--Start of a Profile-->
      <div class="block bg-white shadow-green border-2 border-green w-64 md:mx-4 p-4 m-2">
        <div class="mx-auto">
          <img src="/paul-pressshot-sm.png" class="rounded-full w-64">
        </div>
        <h3 class="font-serif font-semibold text-2xl my-4 leading-tight border-b-2 border-green">
          Paul Teather -
          <span class="text-xl font-normal italic">Principle Partner</span>
        </h3>
        <p>Paul is a founding partner in Pragmatica bringing a wealth of experience from Oracle, KPMG and Atos where he sat on the board.</p>
      </div>
      <!--/End of a Profile-->
      <!--Start of a Profile-->
      <div class="block bg-white shadow-green border-2 border-green w-64 md:mx-4 p-4 m-2">
        <div class="mx-auto">
          <img src="/paul-pressshot-sm.png" class="rounded-full w-64">
        </div>
        <h3 class="font-serif font-semibold text-2xl my-4 leading-tight border-b-2 border-green">
          Paul Teather -
          <span class="text-xl font-normal italic">Principle Partner</span>
        </h3>
        <p>Paul is a founding partner in Pragmatica bringing a wealth of experience from Oracle, KPMG and Atos where he sat on the board.</p>
      </div>
      <!--/End of a Profile-->
      <!--Start of a Profile-->
      <div class="block bg-white shadow-green border-2 border-green w-64 md:mx-4 p-4 m-2">
        <div class="mx-auto">
          <img src="/paul-pressshot-sm.png" class="rounded-full w-64">
        </div>
        <h3 class="font-serif font-semibold text-2xl my-4 leading-tight border-b-2 border-green">
          Paul Teather -
          <span class="text-xl font-normal italic">Principle Partner</span>
        </h3>
        <p>Paul is a founding partner in Pragmatica bringing a wealth of experience from Oracle, KPMG and Atos where he sat on the board.</p>
      </div>
      <!--/End of a Profile-->
      <!--Start of a Profile-->
      <div class="block bg-white shadow-green border-2 border-green w-64 md:mx-4 p-4 m-2">
        <div class="mx-auto">
          <img src="/paul-pressshot-sm.png" class="rounded-full w-64">
        </div>
        <h3 class="font-serif font-semibold text-2xl my-4 leading-tight border-b-2 border-green">
          Paul Teather -
          <span class="text-xl font-normal italic">Principle Partner</span>
        </h3>
        <p>Paul is a founding partner in Pragmatica bringing a wealth of experience from Oracle, KPMG and Atos where he sat on the board.</p>
      </div>
      <!--/End of a Profile-->
    </section>
    <h2 class="font-serif font-semibold text-5xl py-6 border-b-3 border-green leading-tight">Network</h2>
    <section class="px-4 flex flex-wrap">
      <!--Start of a Profile-->
      <div class="block bg-white shadow-green border-2 border-green w-64 md:mx-4 p-4 m-2">
        <div class="mx-auto">
          <img src="/paul-pressshot-sm.png" class="rounded-full w-64">
        </div>
        <h3 class="font-serif font-semibold text-2xl my-4 leading-tight border-b-2 border-green">
          Paul Teather -
          <span class="text-xl font-normal italic">Principle Partner</span>
        </h3>
        <p>Paul is a founding partner in Pragmatica bringing a wealth of experience from Oracle, KPMG and Atos where he sat on the board.</p>
      </div>
      <!--/End of a Profile-->
      <!--Start of a Profile-->
      <div class="block bg-white shadow-green border-2 border-green w-64 md:mx-4 p-4 m-2">
        <div class="mx-auto">
          <img src="/paul-pressshot-sm.png" class="rounded-full w-64">
        </div>
        <h3 class="font-serif font-semibold text-2xl my-4 leading-tight border-b-2 border-green">
          Paul Teather -
          <span class="text-xl font-normal italic">Principle Partner</span>
        </h3>
        <p>Paul is a founding partner in Pragmatica bringing a wealth of experience from Oracle, KPMG and Atos where he sat on the board.</p>
      </div>
      <!--/End of a Profile-->
      <!--Start of a Profile-->
      <div class="block bg-white shadow-green border-2 border-green w-64 md:mx-4 p-4 m-2">
        <div class="mx-auto">
          <img src="/paul-pressshot-sm.png" class="rounded-full w-64">
        </div>
        <h3 class="font-serif font-semibold text-2xl my-4 leading-tight border-b-2 border-green">
          Paul Teather -
          <span class="text-xl font-normal italic">Principle Partner</span>
        </h3>
        <p>Paul is a founding partner in Pragmatica bringing a wealth of experience from Oracle, KPMG and Atos where he sat on the board.</p>
      </div>
      <!--/End of a Profile-->
      <!--Start of a Profile-->
      <div class="block bg-white shadow-green border-2 border-green w-64 md:mx-4 p-4 m-2">
        <div class="mx-auto">
          <img src="/paul-pressshot-sm.png" class="rounded-full w-64">
        </div>
        <h3 class="font-serif font-semibold text-2xl my-4 leading-tight border-b-2 border-green">
          Paul Teather -
          <span class="text-xl font-normal italic">Principle Partner</span>
        </h3>
        <p>Paul is a founding partner in Pragmatica bringing a wealth of experience from Oracle, KPMG and Atos where he sat on the board.</p>
      </div>
      <!--/End of a Profile-->
      <!--Start of a Profile-->
      <div class="block bg-white shadow-green border-2 border-green w-64 md:mx-4 p-4 m-2">
        <div class="mx-auto">
          <img src="/paul-pressshot-sm.png" class="rounded-full w-64">
        </div>
        <h3 class="font-serif font-semibold text-2xl my-4 leading-tight border-b-2 border-green">
          Paul Teather -
          <span class="text-xl font-normal italic">Principle Partner</span>
        </h3>
        <p>Paul is a founding partner in Pragmatica bringing a wealth of experience from Oracle, KPMG and Atos where he sat on the board.</p>
      </div>
      <!--/End of a Profile-->
      <!--Start of a Profile-->
      <div class="block bg-white shadow-green border-2 border-green w-64 md:mx-4 p-4 m-2">
        <div class="mx-auto">
          <img src="/paul-pressshot-sm.png" class="rounded-full w-64">
        </div>
        <h3 class="font-serif font-semibold text-2xl my-4 leading-tight border-b-2 border-green">
          Paul Teather -
          <span class="text-xl font-normal italic">Principle Partner</span>
        </h3>
        <p>Paul is a founding partner in Pragmatica bringing a wealth of experience from Oracle, KPMG and Atos where he sat on the board.</p>
      </div>
      <!--/End of a Profile-->
    </section>

    <Content/>
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