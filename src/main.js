import { createApp } from 'vue'
import App from './App.vue'
import VueFeather from 'vue-feather';
import { MotionPlugin } from '@vueuse/motion';

import { createRouter, createWebHashHistory } from 'vue-router'
import "./index.css"
import Index from "./Index.vue"
import AboutMe from "./AboutMe.vue"
import WorkTogether from "./WorkTogether.vue"
import CaseStudies from "./CaseStudies.vue"
import Values from "./Values.vue"
import Dribbble from "./Dribbble.vue"
import Rulebook from "./Rulebook.vue"
import Gabo from "./Gabo.vue"
import Multiverse from "./Multiverse.vue"
import Privacy from "./Privacy.vue"
import Contact from "./Contact.vue"

const routes = [
    { path: '/', component: Index },
    { path: '/about-me', component: AboutMe },
    { path: '/worktogether', component: WorkTogether},
    { path: '/casestudies', component: CaseStudies},
    { path: '/values', component: Values},
    { path: '/dribbble', component: Dribbble},
    { path: '/rulebook', component: Rulebook},
    { path: '/gabo', component: Gabo},
    { path: '/multiverse', component: Multiverse},
    { path: '/privacy', component: Privacy},
    { path: '/contact', component: Contact},
  ]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

router.beforeEach(() => {
  window.scrollTo(0, 0)
})


const app = createApp(App);
app.use(router);
app.use(MotionPlugin);
app.component(VueFeather.name, VueFeather);
app.mount('#app');