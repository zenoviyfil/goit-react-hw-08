import './App.css'
import ContactForm from './components/ContactForm/ContactForm'
import SearchBox from './components/SearchBox/SearchBox'
import ContactList from './components/ContactList/ContactList'
import ErrorMessage from './components/ErrorMessage/ErrorMessage'
import Loader from './components/Loader/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { selectIsError, selectIsLoading } from './selectors/selectors'
import { useEffect } from 'react'
import { fetchContacts } from './redux/contactsOps'

function App() {

  const dispatch = useDispatch()
  const isLoading = useSelector(selectIsLoading)
  const error = useSelector(selectIsError)

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  return (
    <div>
      <h1 className='header'>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && !error && <Loader />}
      {error && <ErrorMessage error={error} />}
      {!isLoading && !error && <ContactList />}
    </div>
  )
}

export default App
