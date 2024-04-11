import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectUserIsRefreshing, selectUserIsSignedIn } from "../../redux/auth/selectors"

const PrivateRoute = ({children}) => {
    const isSignedIn = useSelector(selectUserIsSignedIn)
    const isRefreshing = useSelector(selectUserIsRefreshing)

  return (
    !isSignedIn && !isRefreshing ? (<Navigate to="/login" replace />) : (children)
  )
}

export default PrivateRoute