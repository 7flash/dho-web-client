
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/GettingStarted.vue') },
      { path: '/users', component: () => import('pages/Users.vue') },
      { path: '/profile', component: () => import('pages/Profile.vue') },
      { path: '/getting-started', component: () => import('pages/GettingStarted.vue') },
      { path: '/dashboard', component: () => import('pages/Dashboard.vue') },
      { path: '/roles', component: () => import('pages/Roles.vue') },
      { path: '/members', component: () => import('pages/Members.vue') },
      { path: '/assignments', component: () => import('pages/Assignments.vue') },
      { path: '/payouts', component: () => import('pages/Payouts.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
