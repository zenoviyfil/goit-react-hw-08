import { useDispatch } from "react-redux"
import { registerUser } from "../redux/auth/operations"

import RegistrationForm from "../components/RegistrationForm/RegistrationForm"

const RegisterPage = () => {
  const dispatch = useDispatch()

  const onRegister = (formData) => {
    dispatch(registerUser(formData))
  }

  return (
    <div>
      <RegistrationForm onRegister={onRegister} />
    </div>
  )
}

export default RegisterPage