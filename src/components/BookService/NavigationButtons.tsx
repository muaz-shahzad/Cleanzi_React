import * as React from 'react'
import { BookServiceContext } from '../../context/BookService';

const NavigationButtons = (props) => {
    const BookService = React.useContext(BookServiceContext);
    const handleSubmitNavigation = (e) => {
        e.preventDefault();
       props.handleSubmit(BookService)
    }
    return (
        <React.Fragment>
            {props.activeStep==3 && <input type="Submit" className="action-button" onClick={handleSubmitNavigation} value="Place Order" />}          
            {props.activeStep <3 &&     
            <input type="button" name="next" className="next action-button" value="Next" onClick={props.nextStepHandler} /> }

            {props.activeStep > 0 &&
            <input type="button" name="previous" className="previous action-button-previous"
                value="Previous" onClick={props.previousStepHandler} /> }
        </React.Fragment>
    )
}

export default NavigationButtons
