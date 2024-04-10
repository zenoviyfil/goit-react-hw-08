import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { Suspense, lazy, useEffect } from 'react'
import { fetchContacts } from './redux/contactsOps'
import { refreshUser } from './redux/auth/operations'
import { Navigate, Route, Routes } from "react-router-dom"
import { selectUserIsError, selectUserIsLoading } from './redux/auth/selectors'

const WelcomePage = lazy(() => import("./pages/WelcomePage"));
const HomePage = lazy(() => import("./pages/HomePage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage"));
const Loader = lazy(() => import("./components/Loader/Loader"))
const Layout = lazy(() => import("./components/Layout/Layout"))

function App() {

  const dispatch = useDispatch()
  const isLoading = useSelector(selectUserIsLoading)
  const isError = useSelector(selectUserIsError)

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])

  return (
    <Layout>
      <Suspense fallback={isLoading && !isError && <Loader />}>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </Layout>
  )
}

export default App
