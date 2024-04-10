import css from './Contact.module.css'
import { FaUser, FaPhone, FaMinus } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { deleteContacts } from '../../redux/contactsOps'

const Contact = ({ data: { id, name, number} }) => {
  const dispatch = useDispatch()
  const handleDelete = () => dispatch(deleteContacts(id))
  return (
    <div className={css.contactContainer}>
      <ul className={css.contactInfo}>
        <li className={css.contactName}><FaUser className={css.liIcon} />{name}</li>
        <li className={css.contactNumber}><FaPhone className={css.liIcon} />{number}</li>
      </ul>
      <button className={css.contactBtn} onClick={handleDelete}><FaMinus className={css.deleteBtnIcon}/>Delete</button>
    </div>
  )
}

export default Contact