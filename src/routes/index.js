import Dashboard from '../components/views/dashboard.vue';

const routes = [
    {
        path: '/',
        redirect: {
            name: 'dashboard'
        }
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard
    }
];

export default routes;