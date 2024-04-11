import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectUserIsSignedIn } from "../../redux/auth/selectors"

const RestrictedRoute = ({children}) => {
    const isSignedIn = useSelector(selectUserIsSignedIn)

  return (
    isSignedIn ? <Navigate to="/contacts" replace /> : {children}
  )
}

export default RestrictedRoute