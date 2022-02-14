import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk';
import { booksReducer } from "./reducer/booksReducer/booksReducer";

const rootReducer = combineReducers({
    books: booksReducer
})
export const store = createStore(rootReducer, applyMiddleware(thunk))

export type RootState = ReturnType<typeof store.getState>