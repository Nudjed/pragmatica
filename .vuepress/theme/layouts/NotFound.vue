<template>
  <div class="bg-blue h-screen font-sans-serif text-smooth bg-blue antialiased leading-normal">
    <div class="pt-8 mx-auto container text-white text-3xl">
      <h1 class="text-5xl">404</h1>
      <blockquote>{{ getMsg() }}</blockquote>
      <router-link to="/" class="text-white hover:no-underline">Take me home.</router-link>
    </div>
  </div>
</template>

<script>
const msgs = [
  `There's nothing here.`,
  `How did we get here?`,
  `That's a Four-Oh-Four.`,
  `Looks like we've got some broken links.`
];

export default {
  methods: {
    getMsg() {
      return msgs[Math.floor(Math.random() * msgs.length)];
    }
  }
};
</script>
