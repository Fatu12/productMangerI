import React ,{useEffect, useState} from 'react'
import axios from 'axios'
import { useParams,useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const DisplayOne = (props) => {
  // set up state to be specific to this individual component (no need to lift state here )
  const [oneProduct, setOneProduct] = useState({})
  const {id} = useParams();
  const Navigate = useNavigate()
  useEffect(()=>{
    axios.get(`http://localhost:8000/api/products/${id}`)
    .then((res)=>{
      console.log(res);
      console.log(res.data)
      setOneProduct(res.data)
    })
    .catch(err => console.log(`something went wrong ${err}`))
  },[id])
  const deleteHandler = ()=>{
      axios.delete(`http://localhost:8000/api/products/${id}`)
        .then(res=>{console.log(res.data);
        Navigate("/")})
        .catch(err => console.log(err))

      // setAlLProductsList(allProductsList.filter((product, index)=>product._id !== idFromBelow))})
}
  return (
    <div className='text-center'>
      <h3 className='text-success'> Your Product Information </h3>
      <h2> Name: <em className='text-primary'>  {oneProduct.title}</em > </h2>
      <h2> Price :  <em className='text-primary'>{oneProduct.price} </em></h2>
      <h3> Description: <em className='text-primary'> {oneProduct.description} </em></h3>
      <button onClick= {deleteHandler} class="btn btn-primary" type="submit">Delete</button>
      <Link to={'/'}> Go Home Page</Link>

      
    </div>
  )
}

export default DisplayOne