import React, {useEffect} from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
const DisplayAll = (props) => {
    const {allProductsList  , setAlLProductsList} = props;

    useEffect(()=>{
    axios.get('http://localhost:8000/api/products/')
    .then((res) => {
        console.log(res);
        console.log(res.data);
        setAlLProductsList(res.data);
    })
    .catch(err => console.log(`something went wrong ${err}` ))
},[])
const deleteHandler = (idFromBelow)=>{
axios.patch(`http://localhost:8000/api/products/${idFromBelow}}`)
    .then((res)=>{console.log(res.data);
      setAlLProductsList(allProductsList.filter((product, index)=>product._id !== idFromBelow))})
      .catch((err)=> console.log(err))

}

  return (
    <div className='text-center'>
      <h2> All Products : </h2>
        {
          allProductsList.map((product, index) =>
          <div key= {index}>
            {/*        <Link to = {'/products/:id'}> */}
            <Link to = {`/products/${product._id}`}> 
            <p>{product.title}</p>
            view</Link>|
            <Link to={`/products/update/${product._id}`}>Update</Link>|
            <button onClick={()=> deleteHandler(product._id)} class="btn btn-primary" type="submit">Delete</button>


            {/* <p>
              Price : {product.price}
            </p>
            <p>
              Description : {product.description}
             </p> */}
           
          </div>

        )}

    </div>
  )
}

export default DisplayAll