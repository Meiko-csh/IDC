<template>
  <div id="app">
    <router-view />
  
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isRouterAlive: true
      }
    },
    mounted() {

      function checkIE() {
        return (
          "-ms-scroll-limit" in document.documentElement.style &&
          "-ms-ime-align" in document.documentElement.style

        );
      }
      if (checkIE()) {
        window.addEventListener(
          "hashchange",
          () => {
            var currentPath = window.location.hash.slice(1);
            if (this.$route.path !== currentPath) {
              this.$router.push(currentPath);
            }
          },
          false
        );
      }
    },
   
  }
</script>

<style scoped>
  html,
  body {
    width: 100%;
    height: 100%;

  }

  #app {
    height: 100%;
  }
</style>