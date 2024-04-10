import { useDispatch } from "react-redux"
import { loginUser } from "../redux/auth/operations"
import { lazy } from "react"

const LoginForm = lazy(() => import("../components/LoginForm/LoginForm"))

const LoginPage = () => {
  const dispatch = useDispatch()

  const onLogin = (formData) => {
    dispatch(loginUser(formData))
  }

  return (
    <div>
      <LoginForm onLogin={onLogin} />
    </div>
  )
}

export default LoginPage