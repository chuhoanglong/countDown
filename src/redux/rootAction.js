import * as Types from './actionTypes';

export const convertDate = (year, month, day) => {
    return {
        type: Types.CONVERT_DATE,
        year,
        month,
        day
    }
}