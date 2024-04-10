import { useDispatch } from "react-redux"
import { registerUser } from "../redux/auth/operations"
import { lazy } from "react"

const RegisterForm = lazy(() => import("../components/RegisterForm/RegisterForm"))

const RegisterPage = () => {
  const dispatch = useDispatch()

  const onRegister = (formData) => {
    dispatch(registerUser(formData))
  }

  return (
    <div>
      <RegisterForm onRegister={onRegister} />
    </div>
  )
}

export default RegisterPage