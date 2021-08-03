const routes = [
  {
    path: '',
    name: 'mainLayout',
    component: () => import('../layouts/MainLayout.vue'),
    meta: {authNotRequired: true},
    children: [
      //FIRST SEEN SCREEN
      {
        path: '/',
        name: 'Home',
        component: () => import('../pages/Home.vue'),
        meta: {authNotRequired: true}
      },
      // SIGN IN - GOOGLE, EMAIL & PASSWORD
      {
        path: '/signIn',
        name: 'signIn',
        component: () => import('../pages/signIn.vue'),
        meta: {authNotRequired: true}

      },
      {
        path: '/userInfo/:id',
        name: 'userInfo',
        component: () => import('../pages/userInfo.vue'),
        meta: {authNotRequired: false}

      },
      {
        path: '/SearchForPlayers',
        name: 'SearchForPlayers',
        component: () => import('../pages/searchForPlayers.vue'),
        meta: {authNotRequired: false}

      },
      {
        path: '/chat',
        name: 'chat',
        component: () => import('../pages/chat.vue'),
        meta: {authNotRequired: false}
      },
    ],

  },
  {
    path: '/test',
    name: 'test',
    component: () => import('../pages/Test.vue'),
    meta: {authNotRequired: false}

  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
