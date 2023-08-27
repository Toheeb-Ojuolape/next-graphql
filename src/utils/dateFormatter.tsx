import moment from "moment"
export const dateFormatter = (date:string): string =>{
    return moment(date).format("LLL")
}