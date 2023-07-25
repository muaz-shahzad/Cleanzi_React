
export interface DetailFormInterface{
        ironing: boolean,
        laundry: boolean,
        innerFridge: boolean,
        interiorWindows: boolean,
        innerOven: boolean,
        serviceLocation: string,
        serviceType: string,
        bedroomCount: number,
        bathroomCount: number,
        hours: number,
        cleaningSupplies: string,
        serviceFrequency: string,
        cleaner: boolean,
}

export interface SummaryInterface{
    cleanerPlus: number,   
    ratePerHour: number,
    amountPerHour: number,
    cleaningSuppliesFee:number,
    platformFee:number,
    totalAmount:number
}
export interface TimeFormInterface{
    startDate: string,
    startTime: string,
}

export interface PersonalInfoFormInterface{
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    address: string,
    city: string,
    postalCode: number,
    country: string,
    updates: string,
}

export interface PaymentFormInterface{
    termsCondition: string,
    commentsForAssistant: boolean,
    commentsForUs: boolean,
}
export interface BookServiceInterface {
    detailForm : DetailFormInterface,
    timeForm : TimeFormInterface,
    personalInfoForm : PersonalInfoFormInterface,
    paymentForm : PaymentFormInterface,
    summaryDetails: SummaryInterface,
    setBookingFormData: (data:BookServiceInterface) => void,
    setDetailFormData: (data:DetailFormInterface) => void,
    setTimeFormData: (data:TimeFormInterface) => void,
    setPersonalInfoFormData: (data:PersonalInfoFormInterface) => void,
    setPaymentFormData: (data:any) => void,
    setSummaryDetails: (data:any) => void,
} 