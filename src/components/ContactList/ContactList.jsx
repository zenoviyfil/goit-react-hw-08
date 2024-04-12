import css from './ContactList.module.css'
import Contact from "../Contact/Contact"
import { useSelector } from 'react-redux'
import { selectUserContacts } from '../../redux/contacts/selectors'
import { selectNameFilter } from '../../redux/filters/selectors'

const ContactList = () => {
  const contacts = useSelector(selectUserContacts)
  const filter = useSelector(selectNameFilter)
  const searchContact = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase().trim()))

  return (
    <ul className={css.contactsList}>
      <p className={css.contactsHeader}>Contacts:</p>
      {searchContact !== null && searchContact.map((contact) => (
        <li key={contact.id}>
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  )
}

export default ContactList 