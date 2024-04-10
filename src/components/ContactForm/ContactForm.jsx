import css from './ContactForm.module.css'
import * as Yup from 'yup';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import { FaUser, FaPhone, FaPlus } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addContacts } from '../../redux/contactsOps'

const formSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too short!').max(50, 'Too long!').required('Required!'),
  number: Yup.number().positive("A phone number can't start with a minus")
  .integer("A phone number can't include a decimal point").required('Required!'),
})

const INITIAL_FORM_DATA = {
  name: '',
  number: ''
}

const ContactForm = () => {
  const dispatch = useDispatch()
  
  const handleSubmit = (data, actions) => {
    dispatch(addContacts(data))
    actions.resetForm()
  }

  return(
    <Formik
    validationSchema={formSchema}
    initialValues={INITIAL_FORM_DATA}
    onSubmit={handleSubmit}
    >
    <Form className={css.form}>
      <label className={css.inputLabelUser}><FaUser className={css.labelIcon}/>
        <Field className={css.formName} type="text" name='name' placeholder='George Washington'/>
        <ErrorMessage 
        className={css.errorMsg}
        name="name"
        component='span'
        />
      </label>
      <label className={css.inputLabelNumber}><FaPhone className={css.labelIcon}/>
        <Field className={css.formNumb} type='tel' name='number' placeholder='+380994687989'/>
        <ErrorMessage 
        className={css.errorMsg}
        name="number"
        component='span'
        />
      </label>
      <label className={css.inputLabelBtn}>
        <button className={css.formBtn} type='submit'>
        <FaPlus className={css.labelIcon}/>
        Add contact</button>
      </label>
    </Form>
    </Formik>
  )
};

export default ContactForm