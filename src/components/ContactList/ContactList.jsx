import css from './ContactList.module.css'
import Contact from "../Contact/Contact"
import { useSelector } from 'react-redux'
import { selectFilteredContacts } from '../../redux/contactsSlice'

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts)

  return (
    <ul className={css.contactsList}>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  )
}

export default ContactList