import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFound from '@/pages/404';
import RequireAuth from './RequireAuth';
import { routes, privateRoutes } from './routes';

const Routings = () => {
  return (
    <Suspense>
      <Routes>
        {routes.map((routeProps) => (
          <Route {...routeProps} key={routeProps.path as string} />
        ))}
        {privateRoutes.map(({ element, ...privateRouteProps }) => (
          <Route
            element={
              <RequireAuth redirectTo={`/login?from=${privateRouteProps.path}`}>
                {element}
              </RequireAuth>
            }
            {...privateRouteProps}
            key={`privateRoute-${privateRouteProps.path}`}
          />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default Routings;
