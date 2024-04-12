import css from "./Navigation.module.css"
import clsx from "classnames"
import { NavLink } from "react-router-dom"
import { selectUserIsSignedIn } from "../../redux/auth/selectors"
import { useSelector } from "react-redux"

const getNavLinkClassNames = ({ isActive }) => {
    clsx(css.headerLink, {
        [css.active]: isActive
    })
}

const Navigation = () => {
    const isLoggedIn = useSelector(selectUserIsSignedIn)

  return (
    <div>
        <NavLink to="/">
            Welcome
        </NavLink>
        {isLoggedIn && (
            <>
                <NavLink className={getNavLinkClassNames} to="/home">
                    Home
                </NavLink>
                <NavLink className={getNavLinkClassNames} to="/contacts">
                    Contacts
                </NavLink>
            </>
        )}
    </div>
  )
}

export default Navigation