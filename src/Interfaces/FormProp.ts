import { BookServiceInterface } from "./BookService";


export interface FormPropInterface{
    activeStep:number,
    handleSubmit: (data:BookServiceInterface)=>void,
    nextStepHandler: ()=>void,
    previousStepHandler: ()=>void,
    scrollToTop: ()=>void,
}