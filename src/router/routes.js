export default [
  {
    path: '/',
    component: () => import('@/layouts/DashboardLayout'),
    children: [
      {
        path: '/',
        name: 'Dashboard',
        component: () => import('@/views/Index'),
      },
      {
        path: '/pages/blank',
        name: 'Blank',
        component: () => import('@/views/pages/Blank'),
      },
    ],
  },
  {
    path: '/auth',
    name: 'Auth',
    component: () => import('@/layouts/AuthenticationLayout'),
    children: [
      {
        path: '/auth/login',
        name: 'Login',
        component: () => import('@/views/auth/Login'),
      },
      {
        path: '/auth/register',
        name: 'Register',
        component: () => import('@/views/auth/Register'),
      },
      {
        path: '/auth/forgot-password',
        name: 'ForgotPassword',
        component: () => import('@/views/auth/ForgotPassword'),
      },
      {
        path: '/auth/reset-password',
        name: 'ResetPassword',
        component: () => import('@/views/auth/ResetPassword'),
      },
      {
        path: '/auth/confirm-password',
        name: 'ConfirmPassword',
        component: () => import('@/views/auth/ConfirmPassword'),
      },
      {
        path: '/auth/verify-email',
        name: 'VerifyEmail',
        component: () => import('@/views/auth/VerifyEmail'),
      },
    ],
  },
]
