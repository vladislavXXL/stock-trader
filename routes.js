import User from "./src/components/User/User.vue";
import Home from "./src/components/Home.vue";
import UserStart from "./src/components/User/UserStart.vue";
import UserEdit from "./src/components/User/UserEdit.vue";
import UserDetail from "./src/components/User/UserDetail.vue";

export const routes = [
    {path: '', component: Home},
    {
        path: '/user/', component: User, children: [
            {path: '', component: UserStart},
            {path: ':id', component: UserDetail},
            {path: ':id/edit', component: UserEdit}
        ]
    },
];
