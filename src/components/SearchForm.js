import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
 const {searchTerm,setSearchTerm} = useGlobalContext()
 const searchValue = React.useRef('')
 
 const searchCocktail = () =>{
   setSearchTerm(searchValue.current.value)
 }

 React.useEffect(() =>{
   searchValue.current.focus()
 },[])

  return(<section className='section search'>
    <form className='search-form' >
          <div className='form-control'>
            <div className="form-control">
              <label htmlFor='name'>Search Your Favourite Cocktail </label>
            </div>
            <input
              type='text'
              id='name'
              name='searchTerm'
              ref={searchValue}
              value={searchTerm}
              onChange={searchCocktail}
            />
          </div>
      </form>
  </section>
    
  )
}

export default SearchForm
