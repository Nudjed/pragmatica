<template>
  <nav
    class="flex items-center justify-between flex-wrap pt-8 text-white container mx-auto pb-8 px-4 sm:px-0"
  >
    <div class="flex items-center flex-no-shrink text-white mr-6">
      <router-link :to="$localePath" class>
        <svg
          class="h-16"
          viewBox="0 0 239 255"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <g
            id="Logo/sq-icon-white-green"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            <rect id="Rectangle-6-Copy-3" fill="#00A89F" x="30" y="30" width="209" height="225"></rect>
            <rect id="Rectangle-6-Copy-2" fill="#FFFFFF" x="0" y="0" width="209" height="225"></rect>
            <path
              d="M121.23392,101.057756 C121.23392,107.497333 120.434248,113.060855 118.83488,117.748488 C117.235512,122.436121 115.095213,126.342423 112.41392,129.467512 C109.732627,132.592601 106.628018,134.912708 103.1,136.427902 C99.5719824,137.943097 95.8793793,138.700683 92.02208,138.700683 C88.2588612,138.700683 84.7308965,137.848399 81.43808,136.143805 C78.1452635,134.439211 75.4640103,132.450548 73.39424,130.177756 L73.39424,157.024976 L59,164.553561 L59,62.5625366 L73.39424,62.5625366 L73.39424,69.6649756 C76.1225736,67.2027844 79.0390245,65.1430977 82.14368,63.4858537 C85.2483355,61.8286096 88.7763002,61 92.72768,61 C96.6790598,61 100.395183,61.7575859 103.87616,63.2727805 C107.357137,64.7879751 110.391187,67.1554311 112.9784,70.3752195 C115.565613,73.595008 117.588313,77.738056 119.04656,82.8044878 C120.504807,87.8709196 121.23392,93.9552816 121.23392,101.057756 Z M106.69856,101.483902 C106.69856,92.0139364 105.263854,85.148314 102.3944,80.8868293 C99.5249457,76.6253445 95.4089868,74.4946341 90.0464,74.4946341 C86.5654226,74.4946341 83.3667346,75.4652911 80.45024,77.4066341 C77.5337454,79.3479772 75.1347294,81.5497113 73.25312,84.0119024 L73.25312,115.404683 C74.0998442,116.541079 75.1347139,117.677458 76.35776,118.813854 C77.5808061,119.95025 78.9449525,120.99193 80.45024,121.938927 C81.9555275,122.885923 83.5548715,123.667184 85.24832,124.282732 C86.9417685,124.89828 88.7292706,125.206049 90.61088,125.206049 C95.8793863,125.206049 99.8777464,123.24106 102.60608,119.311024 C105.334414,115.380988 106.69856,109.438674 106.69856,101.483902 Z"
              id="Combined-Shape"
              fill="#012C51"
            ></path>
            <circle id="Oval" fill="#00A89F" cx="145" cy="124" r="15"></circle>
          </g>
        </svg>
      </router-link>
    </div>
    <div class="block sm:hidden">
      <button
        @click="toggle"
        class="flex items-center px-3 py-2 border-2 rounded text-white border-white-light hover:text-white hover:border-white"
      >
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </button>
    </div>

    <div
      :class="open ? 'block': 'hidden'"
      class="w-full flex-grow sm:flex sm:items-center sm:w-auto sm:justify-end"
      v-if="userLinks.length"
    >
      <div class="nav-item" v-for="item in userLinks" :key="item.link">
        <router-link
          class="font-serif font-semibold text-xl block mt-4 lg:inline-block lg:mt-0 text-blue-lighter sm:ml-8 no-underline hover:text-grey-lighter hover:underline"
          :to="item.link"
        >{{ item.text }}</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      open: false
    };
  },
  methods: {
    toggle() {
      this.open = !this.open;
    }
  },
  computed: {
    userLinks() {
      return this.$themeLocaleConfig.nav || this.$site.themeConfig.nav || [];
    }
  }
};
</script>
