import React , {useState, useEffect}from 'react'
import axios from 'axios'  
import { useNavigate,useParams } from 'react-router-dom' 
import { Link } from 'react-router-dom'

const UpdateProduct = (props) => {
    const {id} = useParams();
    const [item, setItem] = useState({
        title :'',
        price :'',
        description:''
    })
    const Navigate = useNavigate();

useEffect(()=>{
    axios.get(`http://localhost:8000/api/products/${id}`)
    .then((res)=>{
    // console.log(res);
    // console.log(res.data);
    setItem(res.data)
    // console.log("===================", setItem(res.data)
    
    })
    .catch(err => console.log(`something went wrong ${err}`))
    
}, [id])


  const onSubmitHandler = (e)=> {
    e.preventDefault();
        //make a post request to create a new person
    
        axios.patch(`http://localhost:8000/api/products/${id}`,
        item )

        .then(res =>{
            console.log(`FRONT END UPDATE SH ${res}`);
            console.log(`FRONT END UPDATE SH Data ${res.data}`);
            // update right away 
           Navigate('/')
        })
      .catch(err => console.log(`something went wrong FRONT END UPDATE ${err}`))
    }

    const ChangeHandler = (e)=>{
        setItem({...item, [e.target.name]: e.target.value})}
    

  return (
   <div>
        <div className='row'>
            <form className='col-m4 offset-1' onSubmit={onSubmitHandler}>
            {/* you don't need name in the input if you don't have onChangeHandle
            and also value={item.price} you can just say price if you set your state individually  */}
                <h1 className='text-center'> Product Manager</h1>
            
                <div className='form-group col-m2'>
                    <label htmlFor="title"> Title</label>
                    {/* {errors.title ? <span>{errors.title.message} </span> :null} */}
                
                    <input type="text" name = "title"  onChange = {ChangeHandler} className='form-control mt-2'  value={item.title}  />
                </div>
                <div className='form-group'>
                    <label htmlFor="price"> Price</label>
                    <input type="number" name = "price" onChange={ChangeHandler} className='form-control mt-2'  value={item.price}     />

                </div>
                <div className='form-group'>
                    <label htmlFor="description"> Description </label>
                    <input type="text" name = "description" onChange={ChangeHandler}  className='form-control mt-2 '  value={item.description}/>

                </div >
                

                <div style={{textJustify:'space-between'}}>
                <button class="btn btn-primary" type="submit">Update</button>
                 <Link  style={{backgroundColor: 'orangered'}}  to={'/'}> Go Home </Link>
            
 
                </div>
               
            </form>

        </div>
        
                    
 
        
       </div>
  )
}



export default UpdateProduct