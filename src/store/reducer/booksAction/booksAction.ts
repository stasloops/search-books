import axios from "axios"
import { Dispatch } from "redux"
import { BooksAction, UserActionTypes } from "../../../types/booksReucerType"

export const fetchBooks = (currentPage: number, valueCategories: string, valueInput: string, valueSorting: string) => {
    return async(dispatch: Dispatch<BooksAction>) => {
        try{
            const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${valueInput}+subject:${valueCategories}&orderBy=${valueSorting}&maxResults=30&startIndex=${currentPage}`)
            dispatch({type: UserActionTypes.FETCH_BOOKS, payload: response.data})
        }
        catch(e){
            console.log(e);
            
        }
    }
}
export function setCurrentPage(Page: number):BooksAction {
    return { type: UserActionTypes.CURRENT_PAGE_INC, payload: Page }
}
export const setValueCategories = (value: string):BooksAction  => {
    return {type: UserActionTypes.GET_VALUE_CATEGORIES, payload: value}
}
export const setValueSorting = (value: string):BooksAction => {
    return {type: UserActionTypes.GET_VALUE_SORTING, payload: value}
}
export const setValueInput = (value: string):BooksAction => {
    return {type: UserActionTypes.GET_VALUE_INPUT, payload: value}
}
export const setNumSplice = ():BooksAction => {
    return {type: UserActionTypes.SPLICE_BOOKS}
}
export const resetCurrentPage = (value: number):BooksAction => {
    return {type: UserActionTypes.CURRENT_PAGE_RESET, payload: value}
}