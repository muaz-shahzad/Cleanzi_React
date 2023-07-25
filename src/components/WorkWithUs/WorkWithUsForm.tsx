import React from 'react'
import * as yup from 'yup';
import { Formik, Form, Field } from 'formik';
import GoogleMap from '../Elements/GoogleMap'

const WorkWithUsForm = () => {

    const workWithUsFormSchema = yup.object().shape({
        firstname: yup.string().required('Please enter first name'),
        lastname: yup.string().required('Please enter last name'),
        postalCode: yup.string().required('Please enter a postal code'),
        phone: yup.string().required('Please enter a phone number'),
        address: yup.string().required('Please enter an address'),
        city: yup.string().required('Please select a city'),
        country: yup.string().required('Please select a country'),
    });

    return (
        <React.Fragment>
            <Formik initialValues={{
                firstname: '',
                lastname: '',
                postalCode: '',
                phone: '',
                address: '',
                city:'',
                country:'',
            }}
            validationSchema={workWithUsFormSchema} 
            onSubmit={values => {
                console.log(values);
              }}
       >
                {({ errors, touched, values, handleChange }) => (
                <Form id="sub-form">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="text" className="form-control" name="firstname" id="firstname"
                                 placeholder="First Name*" value={values.firstname} onChange={handleChange} />
                                {errors.firstname &&
                                touched.firstname &&
                                <span className="input-feedback">
                                    {errors.firstname}
                                </span>}
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" name="postalCode" value={values.postalCode} onChange={handleChange}
                                    placeholder="Postal Code*" />
                                    {errors.postalCode &&
                                    touched.postalCode &&
                                    <span className="input-feedback">
                                        {errors.postalCode}
                                    </span>}
                            </div>
                            <div className="form-group">
                                <select className="form-control" name="city" value={values.city} onChange={handleChange}>
                                    <option value="">City / Town*</option>
                                    <option>Birmingham</option>
                                    <option>Leads</option>
                                    <option>Greater Manchester</option>
                                    <option>London</option>
                                    <option>Brighton</option>
                                </select>
                                {errors.city &&
                                touched.city &&
                                <span className="input-feedback">
                                    {errors.city}
                                </span>}
                            </div>

                            <div className="form-group">
                                <select className="form-control" name="heardus">
                                    <option value="">How did you heard about us</option>
                                    <option>Friend</option>
                                    <option>Social Media</option>
                                    <option>Others</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <select className="form-control" name="getToJob">
                                    <option value="">How will you get to your job</option>
                                    <option>Public</option>
                                    <option>Private</option>
                                </select>
                            </div>

                        </div>
                        <div className="col-md-6">
                        <div className="form-group">
                                <input type="text" className="form-control" name="lastname" id="lastname"
                                 placeholder="Last Name*" value={values.lastname} onChange={handleChange} />
                                {errors.lastname &&
                                touched.lastname &&
                                <span className="input-feedback">
                                    {errors.lastname}
                                </span>}
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" id="phone"
                                    placeholder="Phone*" value={values.phone} onChange={handleChange} />
                                {errors.phone &&
                                touched.phone &&
                                <span className="input-feedback">
                                    {errors.phone}
                                </span>}
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" id="address"
                                    placeholder="Address*" value={values.address} onChange={handleChange} />
                                {errors.address &&
                                touched.address &&
                                <span className="input-feedback">
                                    {errors.address}
                                </span>}
                            </div>
                            <div className="form-group">
                                <select className="form-control" name="country" value={values.country} onChange={handleChange}>
                                    <option value="">Country*</option>
                                    <option>UK</option>
                                </select>
                                {errors.country &&
                                touched.country &&
                                <span className="input-feedback">
                                    {errors.country}
                                    </span>}
                            </div>

                            <div className="form-group">
                                <select className="form-control" name="services">
                                    <option value="">Which services are you providing?</option>
                                    <option>Regular cleaning</option>
                                    <option>Deep cleaning</option>
                                    <option>End of tenancy cleaning</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <select className="form-control" name="experience">
                                    <option value="">How many years of experience you have?</option>
                                    <option>One Year</option>
                                    <option>Two Years</option>
                                    <option>Three Years</option>
                                    <option>Four Years</option>
                                </select>
                            </div>
                            <div className="alert d-none"></div>
                        </div>
                        <div className="col-md-12">
                            <p className="font-weight-bold">Which days are you looking to work?</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <label htmlFor="monday" className="col-md-12">
                                <input type="checkbox" name="monday" id="monday" />&nbsp;
                                Monday
                            </label>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <select className="form-control" name="modayStartTime">
                                    <option value="">Monday Start Time?</option>
                                    <option>8:00</option>
                                    <option>8:30</option>
                                    <option>9:00</option>
                                    <option>9:00</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <select className="form-control" name="modayEndTime">
                                    <option value="">Monday End Time?</option>
                                    <option>8:00</option>
                                    <option>8:30</option>
                                    <option>9:00</option>
                                    <option>9:00</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <label htmlFor="monday" className="col-md-12">
                                <input type="checkbox" name="monday" id="monday" />&nbsp;
                                Tuesday
                            </label>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <select className="form-control" name="modayStartTime">
                                    <option value="">Tuesday Start Time?</option>
                                    <option>8:00</option>
                                    <option>8:30</option>
                                    <option>9:00</option>
                                    <option>9:00</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <select className="form-control" name="modayEndTime">
                                    <option value="">Tuesday End Time?</option>
                                    <option>8:00</option>
                                    <option>8:30</option>
                                    <option>9:00</option>
                                    <option>9:00</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <label htmlFor="monday" className="col-md-12">
                                <input type="checkbox" name="monday" id="monday" />&nbsp;
                                Wednesday
                            </label>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <select className="form-control" name="modayStartTime">
                                    <option value="">Wednesday Start Time?</option>
                                    <option>8:00</option>
                                    <option>8:30</option>
                                    <option>9:00</option>
                                    <option>9:00</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <select className="form-control" name="modayEndTime">
                                    <option value="">Wednesday End Time?</option>
                                    <option>8:00</option>
                                    <option>8:30</option>
                                    <option>9:00</option>
                                    <option>9:00</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <label htmlFor="monday" className="col-md-12">
                                <input type="checkbox" name="monday" id="monday" />&nbsp;
                                Thursday
                            </label>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <select className="form-control" name="modayStartTime">
                                    <option value="">Thursday Start Time?</option>
                                    <option>8:00</option>
                                    <option>8:30</option>
                                    <option>9:00</option>
                                    <option>9:00</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <select className="form-control" name="modayEndTime">
                                    <option value="">Thursday End Time?</option>
                                    <option>8:00</option>
                                    <option>8:30</option>
                                    <option>9:00</option>
                                    <option>9:00</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <label htmlFor="monday" className="col-md-12">
                                <input type="checkbox" name="monday" id="monday" />&nbsp;
                                Friday
                            </label>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <select className="form-control" name="modayStartTime">
                                    <option value="">Friday Start Time?</option>
                                    <option>8:00</option>
                                    <option>8:30</option>
                                    <option>9:00</option>
                                    <option>9:00</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <select className="form-control" name="modayEndTime">
                                    <option value="">Friday End Time?</option>
                                    <option>8:00</option>
                                    <option>8:30</option>
                                    <option>9:00</option>
                                    <option>9:00</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <label htmlFor="monday" className="col-md-12">
                                <input type="checkbox" name="monday" id="monday" />&nbsp;
                                Saturday
                            </label>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <select className="form-control" name="modayStartTime">
                                    <option value="">Saturday Start Time?</option>
                                    <option>8:00</option>
                                    <option>8:30</option>
                                    <option>9:00</option>
                                    <option>9:00</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <select className="form-control" name="modayEndTime">
                                    <option value="">Saturday End Time?</option>
                                    <option>8:00</option>
                                    <option>8:30</option>
                                    <option>9:00</option>
                                    <option>9:00</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <label htmlFor="monday" className="col-md-12">
                                <input type="checkbox" name="monday" id="monday" />&nbsp;
                                Sunday
                            </label>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <select className="form-control" name="modayStartTime">
                                    <option value="">Sunday Start Time?</option>
                                    <option>8:00</option>
                                    <option>8:30</option>
                                    <option>9:00</option>
                                    <option>9:00</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <select className="form-control" name="modayEndTime">
                                    <option value="">Sunday End Time?</option>
                                    <option>8:00</option>
                                    <option>8:30</option>
                                    <option>9:00</option>
                                    <option>9:00</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-12">
                        <p className="font-weight-bold">Select Working Area</p>
                    </div>
                    <div className="col-md-7 col-sm-12">
                        <div className="form-group">
                            <select className="form-control" name="radius">
                                <option value="">Radius in km?</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                            </select>
                        </div>
                    </div>


                    <section id="map-section" style={{marginBottom: '20px'}}>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-12">
                                    <GoogleMap />   
                                    <div id="cont" style={{display:'none'}}>
                                        <img className="logo-change" src="images/logo-2.png" width='120' alt="logo" />
                                        <p style={{color: '#333', fontSize: '16px', fontWeight: 'normal'}}>
                                            Koramangala, Banglore<br/>
                                            Karnataka, INDIA</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <div className="form-group">
                                <select className="form-control" name="radius">
                                    <option value="">Frequency of Payment?</option>
                                    <option>Weekly</option>
                                    <option>Biweekly</option>
                                    <option>Monthly</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="form-group">
                                <select className="form-control" name="radius">
                                    <option value="">Do you have upto date DBS / CBR cheque?</option>
                                    <option>Yes</option>
                                    <option>No</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 pl-0">
                        <div className="form-group">
                            <label className="control-label">What date do you start cleaing from?</label>
                            <input type="date" className="form-control" />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <p className="font-weight-bold">Eligibility to work</p>                                    
                    </div>
                    <div className="col-md-12">
                        <p>please provide a clear image of some type of identification</p>
                    </div>
                    <div className="col-md-12">
                        <ul className="ml-5" style={{listStyleType: 'disc'}}>
                            <li>Driver’s Liscense</li>
                            <li>Passport</li>
                            <li>National ID Card</li>
                            <li>Any non-country Document which gives you rights to work in the country</li>
                        </ul>
                    </div>
                    <div className="col-md-12 mt-2 mb-2">
                        <button style={{display:'block', margin: 'auto'}} className="btn btn-sm btn-primary">Attach File</button>
                    </div>

                    <div className="col-md-12">
                        <p className="font-weight-bold text-info">Do you understand that this is a self-employed position, you are responsible for your own tax, national insurance and you will have a public liability insurance in place before commencing the cleaning</p>
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="confirmSelfEmployed">
                            <input type="checkbox" id="confirmSelfEmployed" />&nbsp;
                            I confirm and undertand that this is self-emplyeed position 
                        </label>
                    </div>

                    <div className="col-md-12">
                        <p className="font-weight-bold text-info">If successful, are you able to provide us some form of Identification, this can either be driving liscense, passport or identity card, if a non UK identification is used your right to work documents will be required to prove that you are eligible to work in UK</p>
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="termsConditions">
                            <input type="checkbox" id="termsConditions" />&nbsp;
                            I confirm all the terms & conditions above*
                        </label>
                    </div>
                </Form>
                )}
            </Formik>
        </React.Fragment>
    )
}

export default WorkWithUsForm
