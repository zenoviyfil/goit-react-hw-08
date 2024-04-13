import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectIsLoggedIn } from "../../redux/auth/selectors"

const RestrictedRoute = ({children, redirectTo="/home"}) => {
    const isLoggedIn = useSelector(selectIsLoggedIn)

  return (
    isLoggedIn ? <Navigate to={redirectTo} replace /> : (children)
  )
}

export default RestrictedRoute