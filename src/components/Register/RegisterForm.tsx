import React from 'react'
import * as yup from 'yup';
import { Formik, Form } from 'formik';

const RegisterForm = () => {

    const registerFormSchema = yup.object().shape({
        password: yup.string().min(6).required('Please enter a password'),
        email: yup.string().email('Invalid email').required('Email required'),
        phone: yup.string().required('Please enter a phone number'),
    });

    return (
        <React.Fragment>
            <Formik initialValues={{
                email: '',
                password: '',
                phone: '',
            }}
            validationSchema={registerFormSchema} 
            onSubmit={values => {
                console.log(values);
              }}
       >
                {({ errors, touched, values, handleChange }) => (
                <Form>
                <div className="form-group">
                    <input type="email" className="form-control" name="email" id="inputEmail3" placeholder="Email" value={values.email} onChange={handleChange} />
                    {errors.email &&
                    touched.email &&
                    <span className="input-feedback">
                        {errors.email}
                    </span>}
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" name="password" id="inputPassword3" value={values.password} onChange={handleChange} placeholder="Password" />
                    {errors.password &&
                    touched.password &&
                    <span className="input-feedback">
                        {errors.password}
                    </span>}
                </div>
                <div className="form-group">
                    <input type="Phone" className="form-control" id="inputPassword3" name="phone" placeholder="Phone" value={values.phone} onChange={handleChange} />
                    {errors.phone &&
                    touched.phone &&
                    <span className="input-feedback">
                        {errors.phone}
                    </span>}
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-form">Register</button>
                </div>
                </Form>
                )}
            </Formik>
        </React.Fragment>
    )
}

export default RegisterForm
