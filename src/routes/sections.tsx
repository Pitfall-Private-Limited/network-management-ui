import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

import { varAlpha } from 'src/theme/styles';
import { AuthLayout } from 'src/layouts/auth';
import { DashboardLayout } from 'src/layouts/dashboard';
import LoginPage from 'src/layouts/components/loginPage';
import RegisterPage from 'src/layouts/components/RegisterPage';

// ----------------------------------------------------------------------

export const HomePage = lazy(() => import('src/pages/home'));
export const UserPage = lazy(() => import('src/pages/user'));
export const SignInPage = lazy(() => import('src/pages/sign-in'));
//export const RegisterPage = lazy(() => import('src/pages/logout'));
// export const ProductsPage = lazy(() => import('src/pages/products'));
// export const Page404 = lazy(() => import('src/pages/page-not-found'));

// ----------------------------------------------------------------------

const renderFallback = (
  <Box display="flex" alignItems="center" justifyContent="center" flex="1 1 auto">
    <LinearProgress
      sx={{
        width: 1,
        maxWidth: 320,
        bgcolor: (theme) => varAlpha(theme.vars.palette.text.primaryChannel, 0.16),
        [`& .${linearProgressClasses.bar}`]: { bgcolor: 'text.primary' },
      }}
    />
  </Box>
);

export function Router() {
  return useRoutes([
    {
          path: 'login',
          element: (
            <AuthLayout>
              <LoginPage />
            </AuthLayout>
          ),
        },
        {
          path: 'signup',
          element: (
            <AuthLayout>
              <RegisterPage />
            </AuthLayout>
          ),
        },
    {
      element: (
        <DashboardLayout>
          <Suspense fallback={renderFallback}>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { element: <HomePage />, index: true },
        { path: 'cow', element: <UserPage /> },
        // { path: 'products', element: <ProductsPage /> },
       // { path: 'logout', element: <LogoutPage/>}
        
      ],
    },
    // {
    //   path: 'cow',
    //   element: (
    //     <UserPage />
    //   ),
    // },
    // {
    //   path: 'blog',
    //   element: (
    //     <BlogPage />
    //   ),
    // },
    // {
    //   path: '404',
    //   element: <Page404 />,
    // },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);
}
