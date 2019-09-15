import * as Types from '../redux/actionTypes';

const initState = {
    date: {
        year: 2020,
        month: 5,
        day: 30
    }
}

const SettingReducer = (state = initState, action) => {
    switch (action.type) {
        case Types.CONVERT_DATE: {
            return {
                ...state,
                date: {
                    year: action.year,
                    month: action.month,
                    day: action.day
                }
            };
        }
        default:
            return state;
    }
} 
export default SettingReducer;