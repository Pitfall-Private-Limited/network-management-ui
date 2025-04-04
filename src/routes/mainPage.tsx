import { useRoutes } from 'react-router-dom';
import { AuthLayout } from 'src/layouts/auth';
import LoginPage from 'src/layouts/components/loginPage';

export function LoginRoute() {
  return useRoutes([
    {
      path: 'login',
      element: (
        <AuthLayout>
          <LoginPage />
        </AuthLayout>
      ),
    },
  ]);
}
