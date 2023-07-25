import * as React from 'react'
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import BookingSummary from './BookingSummary';
import { BookServiceContext } from '../../../context/BookService';
import { PaymentFormInterface } from '../../../Interfaces/BookService';
import { FormPropInterface } from '../../../Interfaces/FormProp';

const PaymentForm = (props:FormPropInterface) => {
    const BookService = React.useContext(BookServiceContext);
    const [bookServiceLocalState, setBookServiceLocalState] = React.useState<PaymentFormInterface>({
        termsCondition: 'off',
        commentsForAssistant: false,
        commentsForUs: false,
    });

    const paymentFormSchema = yup.object().shape({
        credit_card: yup.string().max(19).required('Plesae enter you credit card'), 
        terms: yup.string().required('Accept Terms & Conditions is required')
    });

    React.useEffect(()=>{
        setBookServiceLocalState(BookService.paymentForm);
    },[]);

    React.useEffect(() => {
        BookService.setPaymentFormData(bookServiceLocalState);
    }, [bookServiceLocalState])

    const handleChange=(e)=>{
        setBookServiceLocalState({...bookServiceLocalState,[e.target.name]:e.target.value})
    }
    const handleSubmitNavigation = () => {
       props.handleSubmit(BookService)
    }
    return (
        <React.Fragment>
            <Formik initialValues={{...BookService.paymentForm, credit_card:'', terms: 'off'}}
            validationSchema={paymentFormSchema} 
            onSubmit={values => {
                BookService.setPersonalInfoFormData(values);
                handleSubmitNavigation();
              }}
       >
                {({ errors, touched, values, handleChange }) => (
                <Form id="msform">
                <fieldset>

                    <div className="form-card">
                        <div className="row">
                            <div className="col-7">
                                <h2 className="fs-title">Payment Method:</h2>
                            </div>
                            <div className="col-5">
                                <h2 className="steps">Step 4 - 4</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-8">
                                <p>
                                    We don't require any payment up-front as
                                    the cost of our services will be collected from
                                    your nominated payment card after the job has
                                    been completed to your satisfaction.
                                </p>
                                <div className="col-md-6 pl-0">
                                    <input style={{borderRadius: '17px'}} id="ccn" type="tel"
                                        name="credit_card"
                                        autoComplete="cc-number" maxLength={19}
                                        placeholder="xxxx xxxx xxxx xxxx" 
                                        value={values.credit_card} 
                                        onChange={handleChange}/>
                                        {errors.credit_card &&
                                        touched.credit_card &&
                                        <span className="input-feedback">
                                            {errors.credit_card}
                                        </span>}
                                </div>
                                <div className="col-md-12">
                                    <label htmlFor="terms">
                                        <input type="checkbox" style={{width: 'auto'}} id="terms" name="termsCondition" checked={values.termsCondition == 'on' ? true : false} onChange={handleChange} />
                                        &nbsp; I accept the Terms of Use and The Privacy Policy,
                                        As a customer of mycleanerhelp, authorize to charge
                                        my payment card in accordance with these terms.*
                                    </label>
                                    {errors.terms &&
                                        touched.terms &&
                                        <span className="input-feedback">
                                            {errors.terms}
                                        </span>}
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-12">
                                <div className="card shadow mb-4">
                                    <div className="card-header bg-white">
                                        <p className="text-info text-center font-weight-bold"> Security
                                        </p>
                                        <div className="row ml-2">
                                            <div style={{width: 'auto'}} className="col-md-2 col-sm-2">
                                                <p>
                                                    <i className="fa fa-credit-card"></i>
                                                </p>
                                            </div>
                                            <div style={{width: 'auto'}} className="col-md-10 col-sm-10 pb-0">
                                                <p className="book-summary mb-0">We accept only these
                                                    cards
                                                </p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-2 col-sm-2">

                                            </div>
                                            <div style={{width: 'auto'}} className="col-md-3 col-sm-3 ml-2 p-0">
                                                <img src="assets/images/mastercard-logo.png"
                                                    width="70" height="50" />
                                            </div>
                                            <div style={{width: 'auto'}} className="col-md-3 col-sm-3 p-0">
                                                <img src="assets/images/visa-credit-card-logo.png"
                                                    width="70" height="50" />
                                            </div>
                                            <div style={{width: 'auto'}} className="col-md-3 col-sm-3 p-0">
                                                <img src="assets/images/mastercard-logo.png"
                                                    width="70" height="50" />
                                            </div>
                                            <div>

                                            </div>
                                        </div>
                                        <div className="row ml-2">
                                            <div style={{width: 'auto'}} className="col-md-2 col-sm-2">
                                                <p><i className="fa fa-lock"></i></p>
                                            </div>
                                            <div style={{width: 'auto'}} className="col-md-10 col-sm-10">
                                                <p className="book-summary mb-0 text-justify">My cleaner help uses
                                                    256-bit SSL
                                                    encryption and 3D secure authentication to
                                                    protect your personal information.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>




                                <BookingSummary />
                            </div>
                        </div>
                    </div> 
                    <div className="nav-buttons">
                        <input type="Submit" className="action-button" value="Place Order" />            
                        <input type="button" name="previous" className="previous action-button-previous"
                            value="Previous" onClick={props.previousStepHandler} />
                    </div>
                </fieldset>
                </Form>
                )}
            </Formik> 
        </React.Fragment>
    )
}

export default PaymentForm
