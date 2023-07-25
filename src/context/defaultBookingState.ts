import { BookServiceInterface } from '../Interfaces/BookService';

export const defaultBookingState:BookServiceInterface = {
    detailForm : {
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
        cleaner:false
    },
    timeForm : {
        startDate: '',
        startTime: '8:00',
    },
    personalInfoForm : {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        postalCode: 0,
        country: '',
        updates: '',
    },
    paymentForm : {
        termsCondition: '',
        commentsForAssistant: false,
        commentsForUs: false,
    },
    summaryDetails: {
        cleanerPlus:1,
        ratePerHour: 15,
        amountPerHour: 30,
        cleaningSuppliesFee:4,
        platformFee:1.2,
        totalAmount:35.2,
    },
    setBookingFormData:()=>null,
    setDetailFormData: () => null,
    setTimeFormData: () => null,
    setPersonalInfoFormData: () => null,
    setPaymentFormData: () => null,
    setSummaryDetails: () => null,
};
