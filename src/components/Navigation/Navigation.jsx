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
        {isLoggedIn ? (
        <>
            <NavLink className={getNavLinkClassNames} to="/home">
                Home
            </NavLink>
            <NavLink className={getNavLinkClassNames} to="/contacts">
                Contacts
            </NavLink>
        </>
        ) : (
            <NavLink to="/">
                Welcome
            </NavLink>
        )}
    </div>
  )
}

export default Navigation