
export default [
  {
    path: '/',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/index') }
    ]
  },

  {
    name: 'not-found',
    path: '/not-found',
    component: () => import('@/pages/not-found')
  },

  // State routes
  {
    name: 'draft',
    path: '/draft',
    component: () => import('@/pages/draft')
  },

  {
    name: 'paused',
    path: '/paused',
    component: () => import('@/pages/paused')
  },

  {
    name: 'ended',
    path: '/ended',
    component: () => import('@/pages/ended')
  },

  // Your routes begin here

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
