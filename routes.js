import User from "./src/components/User/User.vue";
import Home from "./src/components/Home.vue";

export const routes = [
    {path: '', component: Home},
    {path: '/user', component: User},
];
