import React ,{useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const DisplayOne = (props) => {
  // set up state to be specific to this individual component (no need to lift state here )
  const [oneProduct, setOneProduct] = useState({})
  const {id} = useParams();
  useEffect(()=>{
    axios.get(`http://localhost:8000/api/products/${id}`)
    .then((res)=>{
      console.log(res);
      console.log(res.data)
      setOneProduct(res.data)
    })
    .catch(err => console.log(`something went wrong ${err}`))
  },[id])
  return (
    <div className='text-center'>
      <h3 className='text-success'> Your Product Information </h3>
      <h2> Name: <em className='text-primary'>  {oneProduct.title}</em > </h2>
      <h2> Price :  <em className='text-primary'>{oneProduct.price} </em></h2>
      <h3> Description: <em className='text-primary'> {oneProduct.description} </em></h3>
      
    </div>
  )
}

export default DisplayOne