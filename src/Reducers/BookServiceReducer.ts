export const BookServiceReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_DETAILS':
            return {
                ...state,
                detailForm:action.payload
            }
        case 'UPDATE_TIME':
            return {
                ...state,
                timeForm:action.payload
            }
        case 'UPDATE_PERSONAL_INFO':
            return {
                ...state,
                personalInfoForm:action.payload
            }
        case 'UPDATE_PAYMENT':
            return {
                ...state,
                paymentForm:action.payload
            }
        case 'UPDATE_SUMMARY_DETAILS':
            return {
                ...state,
                summaryDetails:action.payload
            }
        default:
            return state;
    }
}