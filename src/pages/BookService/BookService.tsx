import * as React  from 'react'
import Layout from '../../components/Layout/Layout';
import { NavLink } from 'react-router-dom';
import './BookService.css';
import DetailForm from '../../components/BookService/Forms/DetailForm';
import TimeForm from '../../components/BookService/Forms/TimeForm';
import PersonalInfoForm from '../../components/BookService/Forms/PersonalInfoForm';
import PaymentForm from '../../components/BookService/Forms/PaymentForm';
import { BookServiceContext } from '../../context/BookService';

const BookServiceComponent = () => {
const [activeStep, setActiveStep] = React.useState(0);
const BookService = React.useContext(BookServiceContext);

    const progressBar = () => {
        switch (activeStep) {
            case 0:
                return '25%';
            case 1:
                return '50%';
            case 2:
                return '75%';
            case 3:
                return '100%';
            default:
                return '25%';
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 500,
            behavior: "smooth",
        });
    };

    const nextStepHandler = () => {
        setActiveStep(activeStep+1);
    }
    
    const previousStepHandler = () => {
        setActiveStep(activeStep-1);
    }
    
    const handleSubmit = (data) => {
        console.log(data)
    }

    const renderFormSection = (activeStep:number) => {
        switch (activeStep) {
            case 0:
                return <DetailForm activeStep={activeStep} handleSubmit={handleSubmit} nextStepHandler={nextStepHandler} previousStepHandler={previousStepHandler} scrollToTop={scrollToTop} />;
            case 1:
                return <TimeForm activeStep={activeStep} handleSubmit={handleSubmit} nextStepHandler={nextStepHandler} previousStepHandler={previousStepHandler} scrollToTop={scrollToTop} />;
            case 2:
                return <PersonalInfoForm activeStep={activeStep} handleSubmit={handleSubmit} nextStepHandler={nextStepHandler} previousStepHandler={previousStepHandler} scrollToTop={scrollToTop} />;
            case 3:
                return <PaymentForm activeStep={activeStep} handleSubmit={handleSubmit} nextStepHandler={nextStepHandler} previousStepHandler={previousStepHandler} scrollToTop={scrollToTop} />;
                
            default:
                return <DetailForm activeStep={activeStep} handleSubmit={handleSubmit} nextStepHandler={nextStepHandler} previousStepHandler={previousStepHandler} scrollToTop={scrollToTop} />;
        }   
    }

    return (
            <Layout>
                <section id="banner-inner">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12 wow fadeInLeft text-left" data-wow-delay=".5s">
                                <h1>Book Now</h1>
                                <nav aria-label="breadcrumb" className="custom-bread">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><NavLink to="/">Home</NavLink></li>
                                        <li className="breadcrumb-item active" aria-current="page">Book Now</li>
                                    </ol>
                                </nav>
                                <div className="spacer-20"></div>
                                <div className="mb-sm-30"></div>
                            </div>
                        </div>
                    </div>
                </section>
                <div id="form-wizard">
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-11 col-sm-9 col-md-12 col-lg-12 col-xl-5 text-center p-0 mt-3 mb-2"
                                style={{maxWidth: '80%', flex: '0%'}}>
                                <div className="card px-0 pt-4 pb-0 mt-3 mb-3">
                                    <h2 id="heading">Book Now</h2>
                                    
                                    <ul id="progressbar">
                                            <li className="active" id="details"><strong>Details</strong></li>
                                            <li id="time" className={ activeStep>0 ? 'active' : '' }><strong>Time</strong></li>
                                            <li id="personal-info" className={ activeStep>1 ? 'active' : '' }><strong>Personal Info</strong></li>
                                            <li id="payment" className={ activeStep>2 ? 'active' : '' }><strong>Payment Info</strong></li>
                                        </ul>
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-striped progress-bar-animated"
                                                role="progressbar" aria-valuemin={0} aria-valuemax={100} style={{width:progressBar()}}></div>
                                        </div> <br/>
                                    {/* <form id="msform" onSubmit={handleSubmit}>
                                        <fieldset> */}
                                            {renderFormSection(activeStep)}
                                        {/* </fieldset>
                                    </form> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
    )
}

export default BookServiceComponent;    
