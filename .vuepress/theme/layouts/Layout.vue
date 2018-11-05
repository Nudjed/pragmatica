<template>
    <div class="font-sans-serif text-smooth bg-blue antialiased leading-normal" v-cloak>

        <div v-bind:style="{ backgroundImage: 'url(' + this.$page.frontmatter.heroImage + ')' }" class="container mx-auto h-full bg-right-bottom bg-no-repeat">

            <header class="text-white container mx-auto pb-8">

                <Navbar v-if="shouldShowNavbar"/>

                <div class="mb-8 pb-8">
                    <div class="mb-8 pb-8">
                        <h1 class="font-serif font-semibold text-5xl max-w-sm py-6 border-b-3 border-green leading-tight">
                        {{ this.$page.frontmatter.title }}
                        </h1>
                        <p class="font-sans-serif font-medium text-lg max-w-xs py-6 mb-8 pb-8">
                        {{ this.$page.frontmatter.description }}
                        </p>
                    </div>
                </div>
            </header>
        </div>

        <section class="py-8 bg-green">
            <div class="bg-white container sm:mx-auto sm:flex p-4 -mt-32 font-sans-serif font-normal text-blue text-lg">
                <Content />
            </div>
        </section>

        <ContactForm />
        <Footer />

    </div>

</template>

<script>
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar.vue'

export default {
    components: { Footer, ContactForm, Navbar },
    computed: {
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
    },
}
</script>