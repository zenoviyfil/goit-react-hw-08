import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { Suspense, lazy, useEffect } from 'react'
// import { fetchContacts } from './redux/contactsOps'
import { refreshUser } from './redux/auth/operations'
import { Navigate, Route, Routes } from "react-router-dom"
import { selectUserIsError, selectUserIsLoading } from './redux/auth/selectors'

// import Layout from './components/Layout/Layout'
// import WelcomePage from './pages/WelcomePage'
// import HomePage from './pages/HomePage'
// import LoginPage from './pages/LoginPage'
// import RegisterPage from './pages/RegisterPage'
// import ContactsPage from './pages/ContactsPage'
// import Loader from './components/Loader/Loader'
const WelcomePage = lazy(() => import("./pages/WelcomePage"));
const HomePage = lazy(() => import("./pages/HomePage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage"));
const Loader = lazy(() => import("./components/Loader/Loader"))
const Layout = lazy(() => import("./components/Layout/Layout"))
const RestrictedRoute = lazy(() => import("./components/RestrictedRoute/RestrictedRoute"))
const PrivateRoute = lazy(() => import("./components/PrivateRoute/PrivateRoute"))

function App() {

  const dispatch = useDispatch()
  const isLoading = useSelector(selectUserIsLoading)
  const isError = useSelector(selectUserIsError)

  // useEffect(() => {
  //   dispatch(fetchContacts())
  // }, [dispatch])

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])

  return (
    <Suspense fallback={isLoading && !isError && <Loader />}>
      <Layout>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/home" element=
          {<PrivateRoute><HomePage /></PrivateRoute>} />
          <Route path="/login" element=
          {<RestrictedRoute><LoginPage /></RestrictedRoute>} />
          <Route path="/register" element={<RestrictedRoute><RegisterPage /></RestrictedRoute>} />
          <Route path="/contacts" element=
          {<PrivateRoute><ContactsPage /></PrivateRoute>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Suspense>
  )
}

export default App
