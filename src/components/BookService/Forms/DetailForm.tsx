import React, { useState, useContext ,useEffect} from 'react'
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import BookingSummary from './BookingSummary';
import { BookServiceContext } from '../../../context/BookService';
import { DetailFormInterface } from '../../../Interfaces/BookService';
import { FormPropInterface } from '../../../Interfaces/FormProp';


const DetailForm = (props:FormPropInterface) => {
    const BookService = useContext(BookServiceContext);
    const [bookServiceLocalState, setBookServiceLocalState] = useState<DetailFormInterface>({
        ironing: false,
        laundry: false,
        innerFridge: false,
        interiorWindows: false,
        innerOven: false,
        serviceLocation: '',
        serviceType: '',
        bedroomCount: 0,
        bathroomCount: 0,
        hours: 2.5,
        cleaningSupplies: 'company',
        serviceFrequency: 'everyday',
        cleaner: false,
    });

    useEffect(()=>{
        setBookServiceLocalState(BookService.detailForm);
    },[]);
    
    useEffect(()=>{
        BookService.setDetailFormData(bookServiceLocalState);
                            console.log(BookService);

    },[bookServiceLocalState]);
    
    const detailFormSchema = yup.object().shape({
        serviceLocation: yup.string().required('Service Location is required'),
        serviceType: yup.string().required('Service Type is required'),
    });

    const handleChangeOurs=(e)=>{
        if(e.target.name === 'bedroomCount' || e.target.name === 'bathroomCount' || e.target.name === 'hours'){
            setBookServiceLocalState({...bookServiceLocalState,[e.target.name]:parseFloat(e.target.value)})
        }else{
            setBookServiceLocalState({...bookServiceLocalState,[e.target.name]:e.target.value})
        }
    }

    const handleSelectedService = (service:string) => {
        setBookServiceLocalState({...bookServiceLocalState, [service]: !bookServiceLocalState[service]});
    }

    let options: number[];
    options = [1,2,3,4,5,6,7,8];
    return (
        <React.Fragment>
            <Formik initialValues={BookService.detailForm}
            validationSchema={detailFormSchema} 
            onSubmit={values => {
                BookService.setDetailFormData({...values, 
                    ironing: bookServiceLocalState.ironing,
                    laundry: bookServiceLocalState.laundry,
                    innerFridge: bookServiceLocalState.innerFridge,
                    interiorWindows: bookServiceLocalState.interiorWindows,
                    innerOven: bookServiceLocalState.innerOven});
                    props.nextStepHandler();
              }}>
                {({ errors, touched, values, handleChange }) => (
                <Form id="msform">
                    <fieldset>
                        <div className="form-card">
                            <div className="row">
                                <div className="col-7">
                                    <h2 className="fs-title">Services:</h2>
                                </div>
                                <div className="col-5">
                                    <h2 className="steps">Step 1 - 4</h2>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-8">
                                    <div className="row col-md-12">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <select className="form-control" name="serviceLocation" value={values.serviceLocation} onChange={handleChange}>
                                                    <option value="" label="">Select Service Location</option>
                                                    <option value="House" label="House">House</option>
                                                    <option value="Office / Commercial" label="Office / Commercial">Office / Commercial</option>
                                                </select>
                                                {errors.serviceLocation &&
                                                touched.serviceLocation &&
                                                <span className="input-feedback">
                                                    {errors.serviceLocation}
                                                </span>}                                     
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <select className="form-control" name="serviceType" value={values.serviceType} onChange={handleChange}>
                                                    <option>Select Service Type</option>
                                                    <option>Regular Cleaning</option>
                                                    <option>Deep Cleaning</option>
                                                    <option>End of Tenancy Cleaning</option>
                                                </select>
                                                {errors.serviceType &&
                                                touched.serviceType &&
                                                <span className="input-feedback">
                                                    {errors.serviceType}
                                                </span>}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row col-md-12">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <select className="form-control" name="bedroomCount" value={values.bedroomCount} onChange={handleChange}>
                                                    <option value={0}>Select Bedroom Count</option>
                                                    {
                                                        options?.map((item)=>(
                                                            <option key={item} value={item}>{item}</option>
                                                        ))
                                                    }
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <select className="form-control" name="bathroomCount" value={values.bathroomCount} onChange={handleChange}>
                                                    <option value={0}>Select Bathroom Count</option>
                                                    {
                                                        options?.map((item)=>(
                                                            <option key={item} value={item}>{item}</option>
                                                        ))
                                                    }
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12 text-center">
                                        <hr />
                                        <p className="font-weight-bold">Extra Services</p>
                                    </div>

                                    <div className="col-md-12 row">
                                        <div className="col-md-2 col-sm-3 text-center">
                                            <label className={ bookServiceLocalState.ironing === true ? 'font-weight-bold selected-service' : 'font-weight-bold' } onClick={() => handleSelectedService('ironing')}>
                                                <span><img src="assets/images/ironing.png" width="80"
                                                        height="80" /></span><br />
                                                Ironing
                                            </label>
                                        </div>
                                        <div className="col-md-2 text-center">
                                            <label className={ bookServiceLocalState.laundry === true ? 'font-weight-bold selected-service' : 'font-weight-bold' } onClick={() => handleSelectedService('laundry')}>
                                                <span><img src="assets/images/washing.png" width="80"
                                                        height="80" /></span><br />
                                                Laundry
                                            </label>
                                        </div>
                                        <div className="col-md-2 text-center">
                                            <label className={ bookServiceLocalState.innerFridge === true ? 'font-weight-bold selected-service' : 'font-weight-bold' } onClick={() => handleSelectedService('innerFridge')}>
                                                <span><img src="assets/images/fridge.png" width="80"
                                                        height="80" /></span><br />
                                                Inner Fridge
                                            </label>
                                        </div>
                                        <div className="col-md-2 text-center">
                                            <label className={ bookServiceLocalState.interiorWindows === true ? 'font-weight-bold selected-service' : 'font-weight-bold' } onClick={() => handleSelectedService('interiorWindows')}>
                                                <span><img src="assets/images/window.png" width="80"
                                                        height="80" /></span><br />
                                                Interior Windows
                                            </label>
                                        </div>
                                        <div className="col-md-2 text-center">
                                            <label className={ bookServiceLocalState.innerOven === true ? 'font-weight-bold selected-service' : 'font-weight-bold' } onClick={() => handleSelectedService('innerOven')}>
                                                <span><img src="assets/images/oven.png" width="80"
                                                        height="80" /></span><br />
                                                Inner Oven
                                            </label>
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <hr />
                                        <p className="font-weight-bold">Hours?</p>
                                    </div>
                                    <div className="col-md-12">
                                        <p className="font-italic font-weight-light">
                                            <i className="fa fa-info-circle"></i>
                                            We recommend selecting 4 hours Based on your bedrooms,
                                            bathrooms and extra tasks.
                                        </p>
                                    </div>

                                    <div className="col-md-12 row">

                                        <div className="col-md-2 p-0">
                                            <input style={{width: '10%'}} type="radio" id="2.5hrs"
                                                name="hours" value={2.5} onClick={(e) => {
                                                            values['hours'] = 2.5;
                                                            setBookServiceLocalState({...bookServiceLocalState, hours: 2.5}); 
                                                        }
                                                    } checked={values.hours === 2.5 ? true : false} /> &nbsp;
                                            <label htmlFor="2.5hrs">2.5 Hours</label>
                                        </div>
                                        <div className="col-md-2 p-0">
                                            <input style={{width: '10%'}} type="radio" id="3.5hrs"
                                                name="hours" value={3.5} onClick={(e) => {
                                                    values['hours'] = 3.5;
                                                    setBookServiceLocalState({...bookServiceLocalState, hours: 3.5}); 
                                                }
                                            } checked={values.hours === 3.5 ? true : false} /> &nbsp;
                                            <label htmlFor="3.5hrs">3.5 Hours</label>
                                        </div>
                                        <div className="col-md-2 p-0">
                                            <input style={{width: '10%'}} type="radio" id="4hrs"
                                                name="hours" value={4} onClick={(e) => {
                                                    values['hours'] = 4;
                                                    setBookServiceLocalState({...bookServiceLocalState, hours: 4}); 
                                                }
                                                } checked={values.hours === 4 ? true : false} /> &nbsp;
                                            <label htmlFor="4hrs">4 Hours</label>
                                        </div>
                                        <div className="col-md-2 p-0">
                                            <input style={{width: '10%'}} type="radio" id="4.5hrs"
                                                name="hours" value={4.5} onClick={(e) => {
                                                    values['hours'] = 4.5;
                                                    setBookServiceLocalState({...bookServiceLocalState, hours: 4.5}); 
                                                }} checked={values.hours === 4.5 ? true : false} /> &nbsp;
                                            <label htmlFor="4.5hrs">4.5 Hours</label>
                                        </div>
                                        <div className="col-md-2 p-0">
                                            <input style={{width: '10%'}} type="radio" id="5hrs"
                                                name="hours" value={5} onClick={(e) => {
                                                    values['hours'] = 5;
                                                    setBookServiceLocalState({...bookServiceLocalState, hours: 5}); 
                                                }} checked={values.hours === 5 ? true : false} /> &nbsp;
                                            <label htmlFor="5hrs">5 Hours</label>
                                        </div>
                                        <div className="col-md-2 p-0">
                                            <input style={{width: '10%'}} type="radio" id="5.5hrs"
                                                name="hours" value={5.5} onClick={(e) => {
                                                    values['hours'] = 5.5;
                                                    setBookServiceLocalState({...bookServiceLocalState, hours: 5.5}); 
                                                }} checked={values.hours === 5.5 ? true : false} /> &nbsp;
                                            <label htmlFor="5.5hrs">5.5 Hours</label>
                                        </div>
                                        <div className="col-md-2 p-0">
                                            <input style={{width: '10%'}} type="radio" id="6hrs"
                                                name="hours" value={6} onClick={(e) => {
                                                    values['hours'] = 6;
                                                    setBookServiceLocalState({...bookServiceLocalState, hours: 6}); 
                                                }} checked={values.hours === 6 ? true : false} /> &nbsp;
                                            <label htmlFor="6hrs">6 Hours</label>
                                        </div>
                                    </div>

                                    <div className="col-md-12"> 
                                        <hr/>
                                    </div>
                                    <div className="col-md-12">
                                        <p className="font-weight-bold">Cleaning Supplies?</p>
                                    </div>

                                    <div className="col-md-12">
                                        <p className="font-italic font-weight-light">
                                            <i className="fa fa-info-circle"></i>
                                            Includes sprays and cloths. Your Housekeeper cannot bring a
                                            vacuum, mop or bucket
                                        </p>
                                    </div>
                                    <div className="col-md-12 row">
                                        <div className="col-md-6 p-0">
                                            <input style={{width: '10%'}} type="radio" id="3.99+"
                                                name="cleaningSupplies" value="company" onClick={(e) => {
                                                    values['cleaningSupplies'] = 'company';
                                                    setBookServiceLocalState({...bookServiceLocalState, cleaningSupplies: 'company'}); 
                                                }} checked={values.cleaningSupplies === 'company' ? true : false} />
                                            <label htmlFor="3.99+">Add Cleaning Supplies 3.99+</label>
                                        </div>

                                        <div className="col-md-6 p-0">
                                            <input style={{width: '10%'}} type="radio" id="will-provide"
                                                name="cleaningSupplies" value="customer" onClick={(e) => {
                                                    values['cleaningSupplies'] = 'customer';
                                                    setBookServiceLocalState({...bookServiceLocalState, cleaningSupplies: 'customer'}); 
                                                }} checked={values.cleaningSupplies === 'customer' ? true : false} />
                                            <label htmlFor="will-provide">I will provide</label>
                                        </div>
                                    </div>


                                    <label htmlFor="cleaner+">
                                        <input className="mr-2" type="checkbox" id="cleaner+"
                                            style={{width: 'auto'}} onClick={(e) => {
                                                values['cleaner'] = !values['cleaner'];
                                                setBookServiceLocalState({...bookServiceLocalState, cleaner: !bookServiceLocalState.cleaner}); 
                                            }} />Cleaner 1+
                                    </label>

                                    <div className="col-md-12">
                                        <hr/>
                                    </div>
                                    <div className="col-md-12">
                                        <p className="font-weight-bold">How often you want?</p>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-2 col-sm-6 p-0">
                                            <input style={{width: '10%'}} type="radio" id="everyday"
                                                name="serviceFrequency" value="everyday" onClick={(e) => {
                                                    values['serviceFrequency'] = 'everyday';
                                                    setBookServiceLocalState({...bookServiceLocalState, serviceFrequency: 'everyday'}); 
                                                }} checked={values.serviceFrequency === 'everyday' ? true : false} />
                                            <label htmlFor="everyday">&nbsp; Everyday</label>
                                        </div>
                                        <div className="col-md-4 col-sm-6 p-0">
                                            <input style={{width: '10%'}} type="radio" id="everyWeek"
                                                name="serviceFrequency" value="everyWeek" onClick={(e) => {
                                                    values['serviceFrequency'] = 'everyWeek';
                                                    setBookServiceLocalState({...bookServiceLocalState, serviceFrequency: 'everyWeek'}); 
                                                }} checked={values.serviceFrequency === 'everyWeek' ? true : false} />
                                            <label htmlFor="everyWeek">Every Week</label>
                                        </div>
                                        <div className="col-md-4 col-sm-6 p-0">
                                            <input style={{width: '10%'}} type="radio" id="moreThan2Weeks"
                                                name="serviceFrequency" value="moreThan2Weeks" onClick={(e) => {
                                                    values['serviceFrequency'] = 'moreThan2Weeks';
                                                    setBookServiceLocalState({...bookServiceLocalState, serviceFrequency: 'moreThan2Weeks'}); 
                                                }} checked={values.serviceFrequency === 'moreThan2Weeks' ? true : false} />
                                            <label htmlFor="moreThan2Weeks">More than 2 Weeks</label>
                                        </div>
                                        <div className="col-md-2 col-sm-6 p-0">
                                            <input style={{width: '10%'}} type="radio" id="oneOff"
                                                name="serviceFrequency" value="oneOff" onClick={(e) => {
                                                    values['serviceFrequency'] = 'oneOff';
                                                    setBookServiceLocalState({...bookServiceLocalState, serviceFrequency: 'oneOff'}); 
                                                }} checked={values.serviceFrequency === 'oneOff' ? true : false} />
                                            <label htmlFor="oneOff"> &nbsp; One Off</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-12">
                                    <BookingSummary />
                                </div>
                            </div>

                        </div>
                        {/* <button type="submit">submit</button> */}
                        <div className="nav-buttons">
                            <input type="submit" name="next" className="next action-button" onClick={props.scrollToTop} value="Next" />
                        </div>
                    </fieldset>
                </Form>
                )}
            </Formik>
        </React.Fragment>
    )
}

export default DetailForm
