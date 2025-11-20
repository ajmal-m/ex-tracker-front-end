
import { lazy, Suspense } from 'react';
import { Route, Routes} from 'react-router-dom';
import {Toaster} from 'react-hot-toast';

const LoginPage = lazy(() => import('./pages/login'));
const SignUpPage = lazy(() => import('./pages/sign-up'));
const DashboardPage = lazy(() => import('./pages/dashboard'));

import ProtectedRoute from './components/ProtectedRoute';



function App() {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={
            <Suspense fallback={<>Loading....</>}>
              <ProtectedRoute>
                <DashboardPage/>
              </ProtectedRoute>
            </Suspense>
          }
        />
        <Route path='/login' 
          element={
            <Suspense fallback={<>Loading...</>} >
              <LoginPage/>
            </Suspense>
          } 
        />
        <Route path='/sign-up' 
          element={
            <Suspense fallback={<>Loading...</>} >
              <SignUpPage/>
            </Suspense>
          } 
        />
      </Routes>
      <Toaster/>
    </>
  )
}

export default App
