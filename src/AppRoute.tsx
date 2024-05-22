import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RequireAuth from '@/RequiredAuth';
import Login from '@/pages/login';

const AppRouter = (): React.ReactElement => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <RequireAuth>
            <div>Home</div>
          </RequireAuth>
        }
      />
      <Route path="*" element={<div>Not found</div>} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
