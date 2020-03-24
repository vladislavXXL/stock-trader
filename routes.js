import User from "./src/components/User/User.vue";
import Home from "./src/components/Home.vue";
import UserStart from "./src/components/User/UserStart.vue";
import UserEdit from "./src/components/User/UserEdit.vue";
import UserDetail from "./src/components/User/UserDetail.vue";
import Header from "./src/components/Shared/Header.vue";

export const routes = [
    {
        path: '', name: 'home', components: {
            default: Home,
            'header-top': Header
        }
    },
    {
        path: '/user/', components: {
            default: User,
            'header-bottom': Header
        }, children: [
            {path: '', component: UserStart},
            {path: ':id', component: UserDetail},
            {path: ':id/edit', component: UserEdit, name: 'userEdit'}
        ]
    },
];
