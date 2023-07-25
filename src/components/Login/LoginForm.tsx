import React from 'react'
import * as yup from 'yup';
import { Formik, Form } from 'formik';


const LoginForm = () => {

    const loginFormSchema = yup.object().shape({
        email: yup.string().email('Invalid email').required('Please enter an email'),
        password: yup.string().required('Please enter a password'),
    });
        return (
        <React.Fragment>
            <Formik initialValues={{
                email: '',
                password: '',
            }}
            validationSchema={loginFormSchema} 
            onSubmit={values => {
                console.log(values);
              }}
       >
                {({ errors, touched, values, handleChange }) => (
                    <Form>
                        <div className="form-group">
                            <input type="email" className="form-control" id="inputEmail3" name="email" placeholder="Email" value={values.email} onChange={handleChange} />
                            {errors.email &&
                                touched.email &&
                                <span className="input-feedback">
                                    {errors.email}
                                </span>}
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" id="inputPassword3" name="password" placeholder="Password" value={values.password} onChange={handleChange} />
                            {errors.password &&
                            touched.password &&
                            <span className="input-feedback">
                                {errors.password}
                            </span>}
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-form">Sign in</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </React.Fragment>
    )
}

export default LoginForm
