import React from 'react'
import * as yup from 'yup';
import { Formik, Form, Field } from 'formik';

const GiftCardsForm = () => {

    const giftCardsFormSchema = yup.object().shape({
        amount: yup.string().required('Please select an amount'),
        receiver_email: yup.string().email('Invalid email').required('Recceiver email required'),
        email: yup.string().email('Invalid email').required('Please provide a sender email'),
        receiver_name: yup.string().required('Please provide a receiver name'),
        sender_name: yup.string().required('Please provide a sender name'),
        message: yup.string().required('Please write a message'),
    });

    return (
        <React.Fragment>
            <Formik initialValues={{
                amount: 50,
                receiver_email: '',
                email: '',
                receiver_name: '',
                sender_name: '',
                message: '',
            }}
            validationSchema={giftCardsFormSchema} 
            onSubmit={values => {
                console.log(values);
              }}
       >
                {({ errors, touched, values, handleChange }) => (
                <Form id="sub-form">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <select className="form-control" name="amount" value={values.amount} onChange={handleChange}>
                                        <option value="">Select Amount &#163;</option>
                                        <option>50</option>
                                        <option>100</option>
                                        <option>150</option>
                                        <option>200</option>
                                        <option>250</option>
                                        <option>300</option>
                                        <option>350</option>
                                        <option>400</option>
                                    </select>
                                    {errors.amount &&
                                    touched.amount &&
                                    <span className="input-feedback">
                                        {errors.amount}
                                    </span>}          
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" id="Subject" name="receiver_email"  placeholder="Receiver Email Address" value={values.receiver_email} onChange={handleChange} />
                                    {errors.receiver_email &&
                                    touched.receiver_email &&
                                    <span className="input-feedback">
                                        {errors.receiver_email}
                                    </span>}
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control" id="email" name="email"  placeholder="Sender Email Address" value={values.email} onChange={handleChange} />
                                    {errors.email &&
                                    touched.email &&
                                    <span className="input-feedback">
                                        {errors.email}
                                    </span>}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" className="form-control" id="Subject" name="receiver_name"  placeholder="Receiver Name" value={values.receiver_name} onChange={handleChange} />
                                    {errors.receiver_name &&
                                    touched.receiver_name &&
                                    <span className="input-feedback">
                                        {errors.receiver_name}
                                    </span>}
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" id="Subject" name="sender_name"  placeholder="Sender Name" value={values.sender_name} onChange={handleChange} />
                                    {errors.sender_name &&
                                    touched.sender_name &&
                                    <span className="input-feedback">
                                        {errors.sender_name}
                                    </span>}
                                </div>                                        

                                <div className="alert d-none"></div>
                            </div>
                            <div className="form-group col-md-12">
                                <textarea className="form-control" rows={4} placeholder="message" name="message"  id="message" value={values.message} onChange={handleChange}></textarea>
                                {errors.message &&
                                    touched.message &&
                                    <span className="input-feedback">
                                        {errors.message}
                                    </span>}
                            </div>
                        </div>

                        <div className="form-group">
                            <button type="submit" className="btn btn-form">Confirm Purchase</button>
                        </div>
                </Form>
                )}
            </Formik>
        </React.Fragment>
    )
}

export default GiftCardsForm
