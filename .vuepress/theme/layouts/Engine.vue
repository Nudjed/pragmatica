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
        <div class="flex-1 w-auto mx-auto md:w-1/2">
          <img src="/rocket.svg" class="w-full">
        </div>
      </header>
    </div>

    <section
      class="font-sans-serif text-smooth bg-white antialiased leading-normal mx-auto p-8 bg-repeat bg-full"
      style="background-image: url('/dot.svg');"
    >
      <div class="p-8">
        <h1 class="font-serif border-b-4 border-green mx-8">
          Processes:
          <span class="font-sans text-xl font-light italic text-blue-light">The Cylinder</span>
        </h1>

        <div class="flex flex-wrap items-top">
          <!--col1-->
          <div class="md:w-1/3 mx-8">
            <p
              class="py-4"
            >Not every engine has the same specification, some are built for speed, some for efficiency, some for longevity. Our model allows your organisation to tailor its approach, based on the resources available and the strategic direction you set.</p>
            <!--Engine cycles-->
            <div class="text-xs bg-blue-lightest rounded p-4">
              <h4 class="text-lg text-blue-darkest">Engine Cycles:</h4>
              <p class="border-b-2 border-green my-2 py-2">
                <span class="font-bold text-base">1. Project Inception -</span>working with your team from strategy to operations to define project requirements
              </p>
              <p class="border-b-2 border-green my-2 py-2">
                <span class="font-bold text-base">2. Project Hot-Housing -</span> rapidly developing solutions through our network and your capabilities
              </p>
              <p class="border-b-2 border-green my-2 py-2">
                <span class="font-bold text-base">3. Product Management -</span> expert support in design, infrastructure, development and regulatory awareness e.g. GDPR
              </p>
              <p class="border-b-2 border-green my-2 py-2">
                <span class="font-bold text-base">4. Pilot Go-to-Market -</span> leveraging your market position to validate models and generate digital P&L
              </p>
              <p class="border-b-2 border-green my-2 py-2">
                <span class="font-bold text-base">5. Innovation Accounting -</span> ensuring your processes and KPIs are aligned to measure value return over time
              </p>
            </div>
            <!--./Engine cycles-->
            <p>
              <a
                href="/projects"
                class="no-underline font-serif font-semibold text-lg text-blue block bg-white w-64 py-2 px-4 my-4 mb-8 mx-auto text-center shadow-green border-2 border-green hover:bg-green hover:shadow-white hover:text-white"
              >see our engine running</a>
            </p>
          </div>
          <!--./col1-->
          <!--col2-->
          <div class="p-8 md:flex-1">
            <img src="/engineprocess.svg" class="w-full mx-auto">
          </div>
          <!--./col2-->
        </div>
      </div>
      <div class="p-8">
        <h1 class="font-serif border-b-4 border-green mx-8">
          Network:
          <span class="font-sans text-xl font-light italic text-blue-light">The Fuel</span>
        </h1>
        <div class="flex flex-wrap items-top">
          <!--col1-->
          <div class="md:w-1/3 mx-8">
            <p class="py-4">
              Our portfolio companies bring a unique perspective on how traditional markets are changing and what bricks and mortar businesses can do to leverage their brand and reach to deliver digital P&L through partnerships with our ecosystem companies. We have direct access to a network of over 30 transformative thinkers (and a reach of hundreds more).
              Take a look at our portfolio/network >
            </p>
            <!--Engine cycles-->
            <div class="text-xs bg-blue-lightest rounded p-4">
              <h4 class="text-lg text-green-darker">Markets we cover:</h4>
              <ul class="border-b-2 border-green my-2 py-2">
                <li>Energy</li>
                <li>Healthcare</li>
                <li>Insurance</li>
                <li>Automotive</li>
                <li>Crypto & Digital Assets</li>
                <li>Public Services</li>
                <li>Advertising</li>
                <li>Information Technology</li>
                <li>Telecoms</li>
                <li>Utilities</li>
              </ul>
            </div>
            <p>
              <a
                href="/projects"
                class="no-underline font-serif font-semibold text-lg text-blue block bg-white w-64 py-2 px-4 my-4 mb-8 mx-auto text-center shadow-green border-2 border-green hover:bg-green hover:shadow-white hover:text-white"
              >take a look at our network</a>
            </p>
            <!--./Engine cycles-->
          </div>
          <!--./col1-->
          <!--col2-->
          <div class="p-4 md:flex-1 md:m-8">
            <img src="/globalskills.svg" class="w-full mx-auto">
          </div>
        </div>
        <!--./col2-->
      </div>

      <div class="p-8">
        <h1 class="font-serif border-b-4 border-green mx-8">
          Platform:
          <span class="font-sans text-xl font-light italic text-blue-light">The Controls</span>
        </h1>
        <div class="flex flex-wrap items-top">
          <!--col1-->
          <div class="md:w-1/3 mx-8">
            <p
              class="py-4"
            >Multi-group Stakeholder Management is key to starting and sustaining an innovation engine. We bring tools designed to ease communication, decision making and promotion, allowing to press the right pedal as you travel.</p>
            <!--Engine cycles-->
            <div class="text-xs bg-blue-lightest rounded p-4">
              <h4 class="text-lg text-green-darker">Platform Stakeholders:</h4>
              <ul>
                <li>Global Leadership - ensuring strategic alignment and support through clear metrics and evidence-based insights</li>
                <li>Internal Teams - platforms to promote buy-in and encourage support and further insights from internal teams</li>
                <li>Market Influencers - communicate innovation value throughout project-pipeline</li>
                <li>External Innovators - engaging and managing your innovation partners to ensure alignment, compliance and delivery</li>
                <li>Customers - identifying and engaging key customer groups as you begin go-to-market activities</li>
                <li>Regulators - ensuring well-documented audit and compliance trails exist for each project</li>
              </ul>
            </div>
            <!--./Engine cycles-->
          </div>
          <!--./col1-->
          <!--col2-->
          <div class="p-4 md:flex-1 md:m-8">
            <img src="/enginemetrics.svg" class="w-full mx-auto">
          </div>
        </div>
        <!--./col2-->
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