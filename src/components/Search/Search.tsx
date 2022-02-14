import React, { FC, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setValueCategories, setValueInput, setValueSorting } from '../../store/reducer/booksAction/booksAction'
import './Search.scss'

const Search: FC = () => {
    const dispatch = useDispatch()
    const [inputValue, setInputValue] = useState<string>('javascript')
    const [categoriesValue, setCategoriesValue] = useState<string>('computers')
    const [sortingValue, setSortingValue] = useState<string>('relevance')
    const [toogleValue, setToogleValue] = useState<boolean>(false)
    
    const inputValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }
    const sortingValueChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSortingValue(e.target.value)
    }
    const categoriesValueChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCategoriesValue(e.target.value)
    
    }

    const valueToggle = () => {
        setToogleValue(!toogleValue)
    }

    useEffect(() => {
        dispatch(setValueCategories(categoriesValue))
        dispatch(setValueInput(inputValue))
        dispatch(setValueSorting(sortingValue))
    }, [toogleValue])
     
  return (
    <div className='search'>
        <div className='search__inner'>
            <h1 className='search__title'>Search for books</h1>
            <div className='search__filters'>
                <input type='text' value={inputValue} onChange={e => inputValueChange(e)} className='search__input'/>
                <div className='search__filter'>
                    <span className='search__filter-title'>
                       Categories
                    </span>
                    <select value={categoriesValue} onChange={e => categoriesValueChange(e)} className='search__filter-categories'>
                        <option value=''>all</option>
                        <option value='art'>art</option>
                        <option value='biography'>biography</option>
                        <option value='computers'>computers</option>
                        <option value='history'>history</option>
                        <option value='medical'>medical</option>
                        <option value='poerty'>poerty</option>
                    </select>
                    <span className='search__filter-title'>
                       Sorting by
                    </span>
                    <select value={sortingValue} onChange={e => sortingValueChange(e)} className='search__filter-categories'>
                        <option value='relevance'>relevance</option>
                        <option value='newest'>newest</option>
                    </select>
                </div>
            </div>
            <button className='search__button' type='submit' onClick={valueToggle}>поиск</button>
        </div>
    </div>
  )
}

export default Search;