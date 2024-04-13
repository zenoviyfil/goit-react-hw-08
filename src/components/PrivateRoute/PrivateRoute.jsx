import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectIsRefreshing, selectIsLoggedIn } from "../../redux/auth/selectors"

const PrivateRoute = ({children, redirectTo = '/login'}) => {
    const isLoggedIn = useSelector(selectIsLoggedIn)
    const isRefreshing = useSelector(selectIsRefreshing)

  return (
    !isLoggedIn && !isRefreshing ? (<Navigate to={redirectTo} replace />) : (children)
  )
}

export default PrivateRoute