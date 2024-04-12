import ContactList from "../components/ContactList/ContactList"
import SearchBox from "../components/SearchBox/SearchBox"
import ContactForm from "../components/ContactForm/ContactForm"
import Loader from "../components/Loader/Loader"
import ErrorMessage from "../components/ErrorMessage/ErrorMessage"
import {useSelector, useDispatch} from "react-redux"
import { selectContactsIsError, selectContactsIsLoading } from "../redux/contacts/selectors"
import { useEffect } from "react"
import { addContacts, fetchContacts } from "../redux/contacts/operations"

const ContactsPage = () => {
  const dispatch = useDispatch()
  const isLoading = useSelector(selectContactsIsLoading)
  const isError = useSelector(selectContactsIsError)

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  const handleAddContact = (formData) => {
    dispatch(addContacts(formData))
  }

  return (
    <div>
      <ContactForm onAddContact={handleAddContact} />
      <SearchBox />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      <ContactList />
    </div>
  )
}

export default ContactsPage