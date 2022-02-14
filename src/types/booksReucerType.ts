export interface UserState {
    books: any[];
    currentPage: number;
    valueInput: string;
    valueSorting: string;
    valueCategories: string;
}
export enum UserActionTypes {
    FETCH_BOOKS = 'FETCH_BOOKS',
    SPLICE_BOOKS = 'SPLICE_BOOKS',
    CURRENT_PAGE_INC = 'CURRENT_PAGE_INC',
    CURRENT_PAGE_RESET = 'CURRENT_PAGE_RESET',
    GET_VALUE_INPUT = 'GET_VALUE_INPUT',
    GET_VALUE_CATEGORIES = ' GET_VALUE_CATEGORIES',
    GET_VALUE_SORTING = 'GET_VALUE_SORTING'
}

interface CurrentPageReset {
    type: UserActionTypes.CURRENT_PAGE_RESET;
    payload: number;
}
interface SpliceBooks {
    type: UserActionTypes.SPLICE_BOOKS;
}
interface GetValueIput {
    type: UserActionTypes.GET_VALUE_INPUT;
    payload: string;
}
interface GetValueCategories {
    type: UserActionTypes.GET_VALUE_CATEGORIES;
    payload: string;
}
interface GetValueSorting {
    type: UserActionTypes.GET_VALUE_SORTING;
    payload: string;
}

interface FetchBooksAction {
    type: UserActionTypes.FETCH_BOOKS;
    payload: any;
}
interface FetchBooksCurrentAction {
    type: UserActionTypes.CURRENT_PAGE_INC;
    payload: number;
}
export type BooksAction = FetchBooksAction | FetchBooksCurrentAction |  
                          GetValueIput | GetValueSorting | GetValueCategories |
                          SpliceBooks | CurrentPageReset