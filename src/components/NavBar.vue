<template>
  <nav class="relative" :class="currentRoute ? 'h-0' : 'bg-gray'">
    <div
      class="md:container w-full md:space-x-20 pt-6 text-lightColor md:px-12 flex items-center justify-between shadow-sm pb-4"
    >
      <div class="logo">
        <!-- <img src="../assets/images/logo.png" alt="logo" /> -->
        <h2 class="text-center text-lightGreen font-bold text-2xl">
          AVCD Pysycology
        </h2>
      </div>
      <ul class="space-x-6 grow justify-center hidden md:flex">
        <li :class="!dir ? 'mx-6 ' : ''">
          <router-link :to="{ name: 'home' }"> {{ $t("home") }}</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'about' }">{{ $t("about") }}</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'courses' }">{{
            $t("courses")
          }}</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'gallery' }">{{
            $t("gallery")
          }}</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'contact' }">{{
            $t("contact")
          }}</router-link>
        </li>
      </ul>
      <button
        class="hidden lg:block lg:py-2 lg:px-4 rounded-xl bg-lightGreen outline-none border-none xl:text-lg text-sm font-mono hover:bg-redColor"
      >
        {{ $t("apply") }}
      </button>
      <locale-switcher></locale-switcher>
      <!-- ............. -->
      <!-- hamburger menu -->
      <button
        @click="show"
        class="hamburger md:hidden focus:outline-none"
        :class="showMenu ? 'open ' : ''"
      >
        <span class="bamburger-top"></span>
        <span class="bamburger-middle"></span>
        <span class="bamburger-bottom"></span>
      </button>

      <!-- meneu -->
      <div class="md:hidden">
        <div
          v-show="showMenu"
          class="menu absolute flex flex-col items-center bg-veryLightGray space-y-6 font-bold mt-6 drop-shadow-md right-6 py-5 left-6 rounded-lg bg-black/80 mx-auto w-3/4"
        >
          <router-link to="#" href="" class="hover:text-brightRed"
            >Home
          </router-link>
          <router-link to="#" href="" class="hover:text-brightRed"
            >About</router-link
          >
          <router-link to="#" href="" class="hover:text-brightRed"
            >About as</router-link
          >
          <router-link to="#" href="" class="hover:text-brightRed"
            >Community</router-link
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import LocaleSwitcher from "./lang/LocaleSwitcher.vue";
export default {
  components: { LocaleSwitcher },
  name: "navBar",
  data() {
    return {
      showMenu: false,
    };
  },
  computed: {
    currentRoute() {
      return this.$route.name == "home";
    },
    dir() {
      return this.$store.getters.getDir == "ltr";
    },
  },

  methods: {
    show() {
      this.showMenu = !this.showMenu;
    },
  },
};
</script>

<style scoped lang="scss">
nav {
  z-index: 9999;
  .logo {
    width: 230px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  ul {
    li {
      transition: 0.2s all ease-in-out;
      letter-spacing: 1px;

      &:hover {
        color: #16b0a6;
      }
    }
    li a.router-link-active,
    li a.router-link-exact-active {
      color: #16b0a6;
      position: relative;
      &::after {
        position: absolute;
        content: "";
        width: 50px;
        height: 1px;
        background: #16b0a6;
        left: 0;
        bottom: -2px;
      }
    }
  }
  button {
    transition: all 0.2s ease-in-out;
  }
  /* hamburger */
  .hamburger {
    position: relative;
    margin-left: 10rem;
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
  .bamburger-top,
  .bamburger-middle,
  .bamburger-bottom {
    position: absolute;
    top: 0;
    left: 0;
    width: 26px;
    height: 2px;
    background: white;
    transform: rotate(0);
    transition: all 0.5s;
  }

  .bamburger-middle {
    transform: translateY(7px);
  }
  .bamburger-bottom {
    transform: translateY(14px);
  }

  .open {
    transform: rotate(90deg);
    transform: translateY(0);
  }

  .open .bamburger-top {
    transform: rotate(45deg) translateY(6px) translate(6px);
  }
  .open .bamburger-middle {
    display: none;
  }
  .open .bamburger-bottom {
    transform: rotate(-45deg) translateY(6px) translate(-6px);
  }

  a {
    &:hover {
      color: #16b0a6;
    }
  }
}
</style>
