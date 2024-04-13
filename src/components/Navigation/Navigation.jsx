import css from "./Navigation.module.css"
import { NavLink } from "react-router-dom"
import { selectIsLoggedIn } from "../../redux/auth/selectors"
import { useSelector } from "react-redux"

const Navigation = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn)

  return (
    <div>
            <NavLink className={css.welcomeLink} to="/">
                Welcome
            </NavLink>
        {isLoggedIn &&
        <div className={css.nav}>
            <NavLink className={`${css.btn} ${css.btnEffect}`} to="/home">
            <svg>
            <rect x="0" y="0" fill="none" width="100%" height="100%"/>
            </svg>
            Home
            </NavLink>
            <NavLink className={`${css.btn} ${css.btnEffect}`} to="/contacts">
            <svg>
            <rect x="0" y="0" fill="none" width="100%" height="100%"/>
            </svg>
            Contacts
            </NavLink>
        </div>
        }
    </div>
  )
}

export default Navigation