
import { lazy, Suspense } from 'react';
import { Route, Routes} from 'react-router-dom';
const LoginPage = lazy(() => import('./pages/login'));
const SignUpPage = lazy(() => import('./pages/sign-up'));


function App() {
  return (
    <>
      <Routes>
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
    </>
  )
}

export default App
