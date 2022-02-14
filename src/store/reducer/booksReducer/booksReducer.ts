import { UserState, BooksAction, UserActionTypes } from "../../../types/booksReucerType"

const initialState:UserState = {
    books: [],
    currentPage: 0,
    valueInput: 'javascript',
    valueSorting: 'relevance',
    valueCategories: 'computers',
}

export const booksReducer = (state = initialState, action: BooksAction):UserState => {
    switch (action.type) {
        case UserActionTypes.FETCH_BOOKS:
            return {...state, books: [...state.books, ...action.payload.items]}
        case UserActionTypes.SPLICE_BOOKS:
            return {...state, books: []}
        case UserActionTypes.CURRENT_PAGE_INC:
            return {...state, currentPage: state.currentPage + action.payload}
        case UserActionTypes.CURRENT_PAGE_RESET:
            return {...state, currentPage: action.payload}
        case UserActionTypes.GET_VALUE_INPUT:
            return {...state, valueInput: action.payload}
        case UserActionTypes.GET_VALUE_SORTING:
            return {...state, valueSorting: action.payload}
        case UserActionTypes.GET_VALUE_CATEGORIES:
            return {...state, valueCategories: action.payload}
        default:
            return state
    }
}

