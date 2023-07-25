import React, { useReducer } from 'react'
import { BookServiceContext } from './BookService';
import { BookServiceReducer } from '../Reducers/BookServiceReducer';
import { defaultBookingState } from './defaultBookingState';
import { DetailFormInterface,TimeFormInterface,PersonalInfoFormInterface, SummaryInterface } from '../Interfaces/BookService';

interface Props {
    children: JSX.Element[] | JSX.Element | React.ReactNode;
}

const BookingProvider = ({ children }:Props) => {
    const [state, dispatch] = useReducer(BookServiceReducer, defaultBookingState);

    const setBookingFormData = async (data:DetailFormInterface) => {
        try{
            dispatch({
                type: 'UPDATE_VALUES',
                payload:data
            });
        }catch(e){
            return;
        }
    }

const setDetailFormData = async (data:DetailFormInterface) => {
    try{
        dispatch({
            type: 'UPDATE_DETAILS',
            payload:data
        });
    }catch(e){
        return;
    }
}

const setTimeFormData = async (data:TimeFormInterface) => {
    try{
        console.log(data)
        dispatch({
            type: 'UPDATE_TIME',
            payload:data
        });
    }catch(e){
        return;
    }
}

const setPersonalInfoFormData = async (data:PersonalInfoFormInterface) => {
    try{
        dispatch({
            type: 'UPDATE_PERSONAL_INFO',
            payload:data
        });
    }catch(e){
        return;
    }
}

const setSummaryDetails = async (data:SummaryInterface) => {
    try{
        dispatch({
            type: 'UPDATE_SUMMARY_DETAILS',
            payload:data
        });
    }catch(e){
        return;
    }
}

const setPaymentFormData = async (data:DetailFormInterface) => {
    try{
        dispatch({
            type: 'UPDATE_PAYMENT',
            payload:data
        });
    }catch(e){
        return;
    }
}
    
    return (
        <BookServiceContext.Provider value={{
            ...state,
            setBookingFormData,
            setDetailFormData,
            setTimeFormData,
            setPersonalInfoFormData,
            setPaymentFormData,
            setSummaryDetails,
        }}>
            {children}   
        </BookServiceContext.Provider>
    )
}

export default BookingProvider;