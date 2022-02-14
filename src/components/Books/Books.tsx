import React, { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { fetchBooks, resetCurrentPage, setCurrentPage, setNumSplice } from '../../store/reducer/booksAction/booksAction'
import './Books.scss'

const Books: FC = () => {
  const dispatch = useDispatch()
  const { currentPage, books, valueCategories, valueInput, valueSorting } = useTypedSelector(state => state.books)
  
  useEffect(() => {
    dispatch(fetchBooks(currentPage, valueCategories, valueInput, valueSorting))
  }, [currentPage, valueCategories, valueInput, valueSorting])

  useEffect(() => {
    dispatch(resetCurrentPage(0))
    dispatch(setNumSplice())
  }, [valueCategories, valueInput, valueSorting])
  return (
      <main className='books'>
        <div className='books__inner'>
          {
          books.map((item: any, id: number) => (
            <div key={`${id}_${item.volumeInfo.title}`} className='books__item'>
              <div className='books__card'>
                <img className='books__img' src={item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : "https://sun9-57.userapi.com/sun9-31/impf/c841427/v841427399/63243/Ox4PeDABGow.jpg?size=598x598&quality=96&sign=7f07894c6dc3f5098b335732e02d0b22&type=album"}/>
                <div className='books__content'>
                  <a className='books__categories'>
                    {item.volumeInfo.categories}
                  </a>
                  <div className='books__title'>
                      {item.volumeInfo.title}
                  </div>
                  <div className='books__authors'>
                    {item.volumeInfo.authors}
                  </div>
                </div>
              </div>
            </div>
          ))
          }
        </div>
        <button onClick={() => dispatch(setCurrentPage(30))} className='books__more'>More</button>
    </main>
  )
}


export default Books