import css from "./AuthNav.module.css"
import { NavLink } from "react-router-dom"

const AuthNav = () => {
  return (
    <div className={css.authNav}>
        <NavLink className={`${css.btn} ${css.btnEffect}`} to="/login"><svg>
        <rect x="0" y="0" fill="none" width="100%" height="100%"/>
        </svg>Log in</NavLink>
        <NavLink className={`${css.btn} ${css.btnEffect}`} to="/register"><svg>
        <rect x="0" y="0" fill="none" width="100%" height="100%"/>
        </svg>Register</NavLink>
    </div>
  )
}

export default AuthNav