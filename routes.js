import Home from "./src/components/Home.vue";
import Header from "./src/components/Shared/Header.vue";

const User = resolve => {
    require.ensure(['./src/components/User/User.vue'], () => {
        resolve(require('./src/components/User/User.vue'));
    }, 'user');
};

const UserStart = resolve => {
    require.ensure(['./src/components/User/UserStart.vue'], () => {
        resolve(require('./src/components/User/UserStart.vue'));
    }, 'user');
};

const UserEdit = resolve => {
    require.ensure(['./src/components/User/UserEdit.vue'], () => {
        resolve(require('./src/components/User/UserEdit.vue'));
    }, 'user');
};

const UserDetail = resolve => {
    require.ensure(['./src/components/User/UserDetail.vue'], () => {
        resolve(require('./src/components/User/UserDetail.vue'));
    }, 'user');
};

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
            {
                path: ':id', component: UserDetail, beforeEnter: (to, from, next) => {
                    console.log('Inside route setup, beforeEnter');
                    next();
                }
            },
            {path: ':id/edit', component: UserEdit, name: 'userEdit'}
        ]
    },
    {
        path: '/redirect-me', redirect: {name: 'userEdit', params: {id: 2}, query: {locale: 'en', q: 100}}
    },
    {
        path: '*', redirect: '/'
    }
];
