import { createApp } from 'vue'
import App from './App.vue'
import VueFeather from 'vue-feather';

import { createRouter, createWebHashHistory } from 'vue-router'
import "./index.css"
import Index from "./Index.vue"
import AboutMe from "./AboutMe.vue"
import WorkTogether from "./WorkTogether.vue"
import Rulebook from "./Rulebook.vue"
import Privacy from "./Privacy.vue"

const routes = [
    { path: '/', component: Index },
    { path: '/about-me', component: AboutMe },
    { path: '/worktogether', component: WorkTogether},
    { path: '/rulebook', component: Rulebook},
    { path: '/privacy', component: Privacy},
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
app.component(VueFeather.name, VueFeather);
app.mount('#app');