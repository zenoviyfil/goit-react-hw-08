import css from './ContactList.module.css'
import Contact from "../Contact/Contact"
import { useSelector } from 'react-redux'
import { selectUserContacts } from '../../redux/contacts/selectors'

const ContactList = () => {
  const contacts = useSelector(selectUserContacts)

  return (
    <ul className={css.contactsList}>
      {contacts !== null && contacts.map((contact) => (
        <li key={contact.id}>
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  )
}

export default ContactList 