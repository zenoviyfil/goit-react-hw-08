import css from "./Layout.module.css"
import clsx from "classnames"
import { useSelector, useDispatch } from "react-redux"
import { selectUserData, selectUserIsSignedIn } from "../../redux/auth/selectors"
import { NavLink } from "react-router-dom"
import { logOutUser } from "../../redux/auth/operations"

const getNavLinkClassNames = ({ isActive }) => {
    clsx(css.headerLink, {
        [css.active]: isActive
    })
}

const Layout = ({children}) => {
    const dispatch = useDispatch()
    const isSignedIn = useSelector(selectUserIsSignedIn)
    const userData = useSelector(selectUserData)
    const onLogout = () => {
        dispatch(logOutUser())
    }
    console.log(userData)


    return (
        <div>
            <header>
                {isSignedIn ? (
                    <>
                        <NavLink className={getNavLinkClassNames} to="/home">Home</NavLink>
                        <NavLink className={getNavLinkClassNames} to="/search">Search</NavLink>
                        <NavLink className={getNavLinkClassNames} to="/contacts">Contacts</NavLink>
                        <span>Hello, {userData.name}!</span>
                        <button onClick={onLogout} type="button">Logout</button>
                    </>
                ) : (
                    <>
                        <NavLink className={getNavLinkClassNames} to="/">Welcome</NavLink>
                        <NavLink className={getNavLinkClassNames} to="/login">Login</NavLink>
                        <NavLink className={getNavLinkClassNames} to="/register">Register</NavLink>
                    </>
                )}
            </header>

            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout