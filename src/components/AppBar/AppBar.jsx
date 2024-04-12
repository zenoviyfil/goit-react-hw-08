import { selectUserIsSignedIn } from "../../redux/auth/selectors"
import { useSelector } from "react-redux"
import Navigation from "../Navigation/Navigation"
import UserMenu from "../UserMenu/UserMenu"
import AuthNav from "../AuthNav/AuthNav"

const AppBar = () => {
    const isLoggedIn = useSelector(selectUserIsSignedIn)

  return (
    <header>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  )
}

export default AppBar