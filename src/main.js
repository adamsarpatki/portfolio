import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createWebHashHistory } from 'vue-router'
import "./index.css"
import Index from "./Index.vue"
import AboutMe from "./AboutMe.vue"
import Contact from "./Contact.vue"
import WorkTogether from "./WorkTogether.vue"
import Rulebook from "./Rulebook.vue"


const routes = [
    { path: '/', component: Index },
    { path: '/about-me', component: AboutMe },
    { path: '/contact', component: Contact },
    { path: '/worktogether', component: WorkTogether},
    { path: '/rulebook', component: Rulebook},
  ]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

const app = createApp(App);
app.use(router);
app.mount('#app');