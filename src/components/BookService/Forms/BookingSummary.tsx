import moment from 'moment';
import React, { useContext ,useEffect, useState} from 'react'
import { BookServiceContext } from '../../../context/BookService';

const BookingSummary = () => {
    const BookService = useContext(BookServiceContext);
    const [summary, setSummary] = useState({
        ironing: false,
        laundry: false,
        innerFridge: false,
        interiorWindows: false,
        innerOven: false,
        hours: 2.5,
        cleaningSupplies: 'company',
        serviceFrequency: 'everyday',
        startDate: '',
        startTime: '8:00',
        cleaner:1,
        ratePerHour: 15,
        amountPerHour: 30,
        cleaningSuppliesFee:4,
        platformFee:1.2,
        totalAmount:35.2
    });

    useEffect(() => {
        let ratePerHourNew = summary.ratePerHour;
        if(BookService.detailForm.serviceFrequency === 'everyday'){
            ratePerHourNew = 12;
         }else if(BookService.detailForm.serviceFrequency === 'everyWeek'){
            ratePerHourNew = 13;
         }else{
            ratePerHourNew = 15;
         }

         let cleanerPlus = summary.cleaner;
         if(BookService.detailForm.cleaner===true){
            cleanerPlus = 2;
         }else{
            cleanerPlus = 1;
         }

         let cleaningSuppliesFee = 0;
         if(BookService.detailForm.cleaningSupplies=='company'){
            cleaningSuppliesFee = 4;
         }else{
            cleaningSuppliesFee = 0;
         }
        setSummary({
            ...summary,
            ironing: BookService.detailForm.ironing,
            laundry: BookService.detailForm.laundry,
            innerFridge: BookService.detailForm.innerFridge,
            interiorWindows: BookService.detailForm.interiorWindows,
            innerOven: BookService.detailForm.innerOven,
            hours: BookService.detailForm.hours,
            cleaningSupplies: BookService.detailForm.cleaningSupplies,
            serviceFrequency: BookService.detailForm.serviceFrequency,
            startDate: BookService.timeForm.startDate,
            startTime: BookService.timeForm.startTime,
            ratePerHour: ratePerHourNew,
            amountPerHour: BookService.detailForm.hours*ratePerHourNew,
            totalAmount: (BookService.detailForm.hours*ratePerHourNew)*cleanerPlus+cleaningSuppliesFee+summary.platformFee
        });

    }, [BookService])

    return (
        <React.Fragment>
            <div className="card shadow">
                <div className="card-header bg-white">
                    <p className="text-info text-center font-weight-bold"> Booking
                        Summary </p>
                    <div className="row ml-2">
                        <div className="col-md-6 width-auto">
                            <p className="book-summary mb-0">First Clean</p>
                        </div>
                        <div className="col-md-6 width-auto text-right">
                            <p className="book-summary mb-0">{summary.startTime && (summary.startTime) }{summary.startDate && ', '+moment(summary.startDate).format('DD MMM YYYY') } 
                            </p>
                        </div>
                    </div>
                    <div className="row ml-2">
                        <div className="col-md-6 width-auto">
                            <p className="book-summary mb-0">How Often</p>
                        </div>
                        <div className="col-md-6 width-auto text-right">
                            <p className="book-summary mb-0">{summary.serviceFrequency}</p>
                        </div>
                    </div>
                    <div className="row ml-2">
                        <div className="col-md-6 width-auto">
                            <p className="book-summary mb-0">Hours of cleaning</p>
                        </div>
                        <div className="col-md-6 width-auto text-right">
                            <p className="book-summary mb-0">{summary.hours}</p>
                        </div>
                        {summary?.ironing && (<div className="col-md-12">
                            <p className="book-summary mb-0">+ Ironing</p>
                        </div>)}
                        {summary?.laundry && (<div className="col-md-12">
                            <p className="book-summary mb-0">+ Laundry</p>
                        </div>)}
                        {summary?.innerFridge && (<div className="col-md-12">
                            <p className="book-summary mb-0">+ Inner Fridge</p>
                        </div>)}
                        {summary?.interiorWindows && (<div className="col-md-12">
                            <p className="book-summary mb-0">+ Interior Windows</p>
                        </div>)}
                        {summary?.innerOven && (<div className="col-md-12">
                            <p className="book-summary mb-0">+ Inner Oven</p>
                        </div>)}
                    </div>
                </div>

                <div className="card-body">
                    <div className="row ml-2">
                        <div className="col-md-6 width-auto">
                            <p className="book-summary mb-0">{summary.hours} hours at £{summary.ratePerHour}/hour
                            </p>
                        </div>
                        <div className="col-md-6 width-auto">
                            <p className="book-summary mb-0 text-right">£{summary.amountPerHour}</p>
                        </div>
                    </div>
                    {summary?.cleaningSupplies=='company' && (
                    <div className="col-md-12 mr-0 pr-0 text-right">
                        <p className="font-weight-light book-summary">Cleaning
                            Supplies £3.99+</p>
                    </div>
                    )}
                    <div className="row ml-2">
                        <div className="col-md-8 width-auto">
                            <p className="book-summary mb-0">Platform and Support
                                Fee <i className="fa fa-question-circle"
                                    aria-hidden="true"></i></p>
                        </div>
                        <div className="col-md-4 width-auto">
                            <p className="book-summary mb-0 text-right">£1.2</p>
                        </div>
                    </div>

                    <div className="row ml-2">
                        <div className="col-md-6 width-auto">
                            <p style={{fontSize: '18px'}}
                                className="book-summary mb-0 text-info font-weight-bold">
                                Total:</p>
                        </div>
                        <div className="col-md-6 width-auto">
                            <p className="book-summary mb-0 text-right">£{summary.totalAmount}</p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default BookingSummary
