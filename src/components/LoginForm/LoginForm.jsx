import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

import { useDispatch } from 'react-redux';

import css from "./LoginForm.module.css";
import { loginUser } from "../../redux/auth/operations";

const UserRegisterSchema = Yup.object().shape({
    email: Yup.string().required("Email is required!")
        .email("Must be a valid email!")
    ,
    password: Yup.string().required("Password is required!")
        .min(8, "Password must be at least 8 characters!")
    ,
});

const INITIAL_FORM_DATA = {
    email: "",
    password: "",
};

const LoginForm = () => {
    const dispatch = useDispatch()

    const handleSubmit = (formData, formActions) => {
        dispatch(loginUser(formData))
        formActions.resetForm()
    };

    return (
        <Formik
            validationSchema={UserRegisterSchema}
            initialValues={INITIAL_FORM_DATA}
            onSubmit={handleSubmit}
        >
            <Form className={css.form}>
                <label className={css.label}>
                    <span className={css.labelText}>Email:</span>
                    <Field
                        className={css.formInput}
                        placeholder="alex@patron.com"
                        type="text"
                        name="email"
                    />
                    <ErrorMessage
                        className={css.errorMsg}
                        name="email"
                        component="span"
                    />
                </label>
                <label className={css.label}>
                    <span className={css.labelText}>Password:</span>
                    <Field
                        className={css.formInput}
                        placeholder="Enter your password"
                        type="password"
                        name="password"
                    />
                    <ErrorMessage
                        className={css.errorMsg}
                        name="password"
                        component="span"
                    />
                </label>

                <button
                    className={css.glowOnHover}
                    type="submit"
                    title="Click to register user"
                    aria-label="Add new mailbox"
                >
                    Sign In
                </button>
            </Form>
        </Formik>
    );
};

export default LoginForm;