import css from "./AuthNav.module.css"
import clsx from "classnames"
import { NavLink } from "react-router-dom"

const getNavLinkClassNames = ({ isActive }) => {
    clsx(css.headerLink, {
        [css.active]: isActive
    })
}

const AuthNav = () => {
  return (
    <div>
        <NavLink className={getNavLinkClassNames} to="/login">Log in</NavLink>
        <NavLink className={getNavLinkClassNames} to="/register">Register</NavLink>
    </div>
  )
}

export default AuthNav