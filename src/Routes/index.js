
import Home from './routesComponents/home';
import Contact from './routesComponents/contact';
import About from './routesComponents/about';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        part: '/',
        component: Home,
        name: 'home'
    },
    {
        path: '/contact',
        component: Contact,
        name: 'contact',
    },
    {
        path: '/about',
        component: About,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;


