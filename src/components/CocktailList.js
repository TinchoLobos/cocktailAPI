import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  const {cocktails,setCocktail,loading,setLoading} = useGlobalContext();
  console.log(cocktails);

if(loading === true){
  return(
    <Loading/>
  )
}

if(cocktails.length === 0){
  return <h2 className='section-title'>No cocktails Matched Your Search Criteria</h2>
}

else{
  return(
  
        <section className='section'>
          <h2 className='section-title'> cocktails</h2>
          <div className='cocktails-center'>
            {cocktails.map((item) =>{
              return<Cocktail 
            {...item}
            key={item.id}/>
            })}
          </div>
        </section>
  )
}

}

export default CocktailList
