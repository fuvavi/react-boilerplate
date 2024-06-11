import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import NotFound from '@/pages/404';
import RequireAuth from './RequireAuth';
import { routes, privateRoutes } from './routes';
import CommonError from '@/shared/components/CommonError';

const Routings = () => {
  return (
    <Suspense>
      <ErrorBoundary fallback={<CommonError />}>
        <Routes>
          {routes.map((routeProps) => (
            <Route {...routeProps} key={routeProps.path as string} />
          ))}
          {privateRoutes.map(({ element, ...privateRouteProps }) => (
            <Route
              element={
                <RequireAuth
                  redirectTo={`/login?from=${privateRouteProps.path}`}
                >
                  {element}
                </RequireAuth>
              }
              {...privateRouteProps}
              key={`privateRoute-${privateRouteProps.path}`}
            />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ErrorBoundary>
    </Suspense>
  );
};

export default Routings;
