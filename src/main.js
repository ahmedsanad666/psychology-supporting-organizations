import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagramSquare,
  // faInstagram,
  faGooglePlus,
} from "@fortawesome/free-brands-svg-icons";


import i18n from "./i18n";










// global components
import SectionHead from './components/bases/SectionHead';
import BaseButton from "./components/bases/BaseButton";
import TheFooter from  './components/layout/TheFooter';

library.add(fas, faTwitter, faFacebook, faInstagramSquare, faGooglePlus);

const app = createApp(App);

app.use(store);
app.use(router);
app.use(i18n);

// console.log(i18n)
// global components
app.component("font-awesome-icon", FontAwesomeIcon);
app.component("base-btn", BaseButton);
app.component("section-head", SectionHead);
app.component("the-footer", TheFooter);

app.mount("#app");
