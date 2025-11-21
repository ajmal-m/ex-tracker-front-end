
import { lazy, Suspense } from 'react';
import { Route, Routes} from 'react-router-dom';
import {Toaster} from 'react-hot-toast';

const LoginPage = lazy(() => import('./pages/login'));
const SignUpPage = lazy(() => import('./pages/sign-up'));
const DashboardPage = lazy(() => import('./pages/dashboard'));
const CategoryPage = lazy(() => import('./pages/category'));
const BudgetPage = lazy(() => import('./pages/budgets'));


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

        <Route path='/setting/category' 
          element={
            <Suspense fallback={<>Loading...</>} >
              <ProtectedRoute>
                <CategoryPage/>
              </ProtectedRoute>
            </Suspense>
          } 
        />

        <Route path='/setting/budgets' 
          element={
            <Suspense fallback={<>Loading...</>} >
              <ProtectedRoute>
                <BudgetPage/>
              </ProtectedRoute>
            </Suspense>
          } 
        />
      </Routes>
      <Toaster/>
    </>
  )
}

export default App
