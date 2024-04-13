import css from "./UserMenu.module.css"
import { useDispatch, useSelector } from "react-redux"
import { logOutUser } from "../../redux/auth/operations"
import { selectUser } from "../../redux/auth/selectors"


const UserMenu = () => {
    const dispatch = useDispatch()
    const user = useSelector(selectUser)

  return (
    <div>
        <p className={css.greetings}>Welcome, {user.name}!</p>
        <button className={css.glowOnHover} type="button" onClick={() => dispatch(logOutUser())}>Logout</button>
    </div>
  )
}

export default UserMenu