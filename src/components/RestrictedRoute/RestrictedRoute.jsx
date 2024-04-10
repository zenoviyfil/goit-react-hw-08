import { Navigate, Outlet } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectUserIsSignedIn } from "../../redux/auth/selectors"

const RestrictedRoute = () => {
    const isSignedIn = useSelector(selectUserIsSignedIn)

  return (
    isSignedIn ? <Navigate to="/contacts" replace /> : <Outlet />
  )
}

export default RestrictedRoute