import { createRouter, createWebHistory } from "vue-router";
// import pages
import HomePage from "../views/HomePage";
import CoursePage from "../views/CoursePage";
import AboutPage from "../views/AboutPage";
import GalleryPage from "../views/GalleryPage";
import ContactPage from "../views/ContactPage";
import SesstionPage from "../views/SesstionPage";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: HomePage,
    meta: {
      title: "Home",
    },
  },
  {
    path: "/about",
    name: "about",
    component: AboutPage,
    meta: {
      title: "about",
    },
  },
  {
    path: "/courses",
    name: "courses",
    component: CoursePage,
    meta: {
      title: "courses",
    },
  },
  {
    path: "/gallery",
    name: "gallery",
    component: GalleryPage,
    meta: {
      title: "gallery",
    },
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactPage,
    meta: {
      title: "contact",
    },
  },
  {
    path: "/sesstions",
    name: "sesstions",
    component: SesstionPage,
    meta: {
      title: "psychological support",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, _, next) => {
  document.title = to.meta.title;
  next();
});
export default router;
