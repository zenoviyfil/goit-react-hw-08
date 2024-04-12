import { useDispatch, useSelector } from "react-redux"
import { logOutUser } from "../../redux/auth/operations"
import { selectUserData } from "../../redux/auth/selectors"


const UserMenu = () => {
    const dispatch = useDispatch()
    const user = useSelector(selectUserData)

  return (
    <div>
        <p>Welcome, {user.name}</p>
        <button type="button" onClick={() => dispatch(logOutUser())}>Logout</button>
    </div>
  )
}

export default UserMenu