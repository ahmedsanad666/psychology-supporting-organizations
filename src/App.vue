<template>
  <div class="main">
    <nav-bar />
    <router-view />
    <the-footer/>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
export default {
  components: { NavBar },
  methods: {
    lang() {
      const currentLang = localStorage.getItem("lang");
      console.log(currentLang);
      if (currentLang === "ar") {
        this.$i18n.locale = "ar";
        document.querySelector("html").dir = "rtl";
      } else {
        this.$i18n.locale = "en";
        document.querySelector("html").dir = "ltr";
      }
    },
  },
  
  created() {
    this.lang();
  },

  // },
};
</script>

<style src="./assets/tailwind.css"></style>
