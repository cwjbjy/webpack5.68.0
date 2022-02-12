Vue.use(VueRouter);

const Home = () => import( /* webpackChunkName: "Home" */ '@/views/home.vue')
const About = () => import( /* webpackChunkName: "About" */ '@/views/about.vue')

const routes = [{
    path: '/',
    component: Home
}, {
    path: '/about',
    component: About
}]

const router = new VueRouter({
    routes
})

export default router