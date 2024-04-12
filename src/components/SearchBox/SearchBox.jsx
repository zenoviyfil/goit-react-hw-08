import css from './SearchBox.module.css'
import { FaBook } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filters/slice'
import { selectNameFilter } from '../../redux/filters/selectors'

const SearchBox = () => {
  const dispatch = useDispatch()
  const filter = useSelector(selectNameFilter)

return (
  <div className={css.searchBox}>
    <label className={css.inputField}>
    <FaBook className={css.searchBoxIcon}/>
    <p className={css.boxHeader}>Find contact by name</p>
    </label>
      <input className={css.boxInput} type="text" value={filter} onChange={(e) => dispatch(changeFilter(e.target.value))} placeholder=' Who are you looking for?'/>
  </div>
  )
}

export default SearchBox