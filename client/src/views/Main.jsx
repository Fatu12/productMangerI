import React, {useState, useEffect} from 'react'
import DisplayAll from '../components/DisplayAll'
import PersonForm from '../components/PersonForm'

const Main = (props) => {
  // lift state here 
  const [allProductsList, setAlLProductsList] = useState([]);
  
  return (
    <div>
        <PersonForm allProductsList = {allProductsList} setAlLProductsList = {setAlLProductsList} />
      <div>
        <DisplayAll  allProductsList = {allProductsList} setAlLProductsList = {setAlLProductsList} />
        </div>

    </div>
  )
}

export default Main