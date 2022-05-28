import Vue from 'vue';
import VueRouter from 'vue-router';
import Dec2bin from '../views/Dec2bin.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Dec2bin',
        component: Dec2bin,
    },
    {
        path: '/bin2dec',
        name: 'Bin2dec',
        component: () => import('../views/Bin2dec.vue'),
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
