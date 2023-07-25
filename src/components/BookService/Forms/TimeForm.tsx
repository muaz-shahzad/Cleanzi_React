import { Formik, Form } from 'formik';
import * as yup from 'yup';import React, { useState, useContext, useEffect } from 'react'
import BookingSummary from './BookingSummary';
import { BookServiceContext } from '../../../context/BookService';
import { TimeFormInterface } from '../../../Interfaces/BookService';
import { FormPropInterface } from '../../../Interfaces/FormProp';

const TimeForm = (props:FormPropInterface) => {
    const BookService = useContext(BookServiceContext);
    const [bookServiceLocalState, setBookServiceLocalState] = useState<TimeFormInterface>({
        startDate: '',
        startTime: '8:00',
    });
    
    useEffect(()=>{
        setBookServiceLocalState(BookService.timeForm);
    },[]);

    useEffect(() => {
        BookService.setTimeFormData(bookServiceLocalState);
    }, [bookServiceLocalState])
    
    
    const timeFormSchema = yup.object().shape({
        startDate: yup.string().required('Start Date is required'),
    });

    const handleChangeOurs=(e)=>{
            setBookServiceLocalState({...bookServiceLocalState,[e.target.name]:e.target.value})
    }

    const UpdateSummaryDetails = () => {
        let ratePerHourNew = 15;
        if(BookService.detailForm.serviceFrequency === 'everyday'){
            ratePerHourNew = 12;
         }else if(BookService.detailForm.serviceFrequency === 'everyWeek'){
            ratePerHourNew = 13;
         }else{
            ratePerHourNew = 15;
         }

         let cleanerPlus = 1;
         if(BookService.detailForm.cleaner===true){
            cleanerPlus = 2;
         }else{
            cleanerPlus = 1;
         }

         let cleaningSuppliesFee = 0;
         if(BookService.detailForm.cleaningSupplies==='company'){
            cleaningSuppliesFee = 4;
         }else{
            cleaningSuppliesFee = 0;
         }
        BookService.setSummaryDetails({
            cleaner:cleanerPlus,
            ratePerHour: ratePerHourNew,
            amountPerHour: BookService.detailForm.hours*ratePerHourNew,
            cleaningSuppliesFee:cleaningSuppliesFee,
            platformFee:1.2,
            totalAmount:(BookService.detailForm.hours*ratePerHourNew)*cleanerPlus+cleaningSuppliesFee+1.2
        });
    }
    return (
        <React.Fragment>
            <Formik initialValues={BookService.timeForm}
            validationSchema={timeFormSchema} 
            onSubmit={values => {
                BookService.setTimeFormData(values);
                props.nextStepHandler();
              }}
       >
                {({ errors, touched, values, handleChange }) => (
                <Form id="msform">
                <fieldset>
                    <div className="form-card">
                        <div className="row">
                            <div className="col-7">
                                <h2 className="fs-title">Time</h2>
                            </div>
                            <div className="col-5">
                                <h2 className="steps">Step 2 - 4</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-8 col-sm-12">
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <label className="control-label">When do you need the services?</label>
                                        <input type="date" className="form-control" name="startDate" value={values.startDate} onChange={(e) => {
                                                    values['startDate'] = e.target.value;
                                                    setBookServiceLocalState({...bookServiceLocalState, startDate: e.target.value}); 
                                                }} />
                                                {errors.startDate &&
                                                touched.startDate &&
                                                <span className="input-feedback">
                                                    {errors.startDate}
                                                </span>}        
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <label className="control-label">Start Time</label>
                                        <select className="form-control" name="startTime" value={values.startTime} onChange={(e) => {
                                                    values['startTime'] = e.target.value;
                                                    setBookServiceLocalState({...bookServiceLocalState, startTime: e.target.value}); 
                                                }}>
                                            <option>8:00</option>
                                            <option>8:30</option>
                                            <option>9:00</option>
                                            <option>9:30</option>
                                            <option>10:00</option>
                                            <option>10:30</option>
                                            <option>11:00</option>
                                            <option>11:30</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-12">
                                <BookingSummary />
                            </div>
                        </div>
                    </div>
                    <div className="nav-buttons">
                        <input type="submit" name="next" onClick={() => {
                                    props.scrollToTop();
                                    UpdateSummaryDetails(); 
                                }
                            } className="next action-button" value="Next" />
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

export default TimeForm
