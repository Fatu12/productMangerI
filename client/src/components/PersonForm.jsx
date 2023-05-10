import React, {useState} from 'react'
import axios from 'axios'
const PersonForm = () => {
    const [item, setItem] = useState({
        title :'',
        price :'',
        description:''
    })
    // handler when the form is submitted
    const onSubmitHandler = (e)=> {
    e.preventDefault();
        // make a post request to create a new person
    
        axios.post('http://localhost:8000/api/products',
        item )
    
        .then(res =>{
            console.log(res);
            console.log(res.data);
            setItem("")
        })
        .catch(err => console.log(err))
    }
    const ChangeHandler = (e)=>{
        setItem({...item, [e.target.name]: e.target.value})
    }
  return (
    <div>
        <div className='row'>
            <form className='col-m4 offset-1' onSubmit={onSubmitHandler}>
                <h1 className='text-center'> Product Manager</h1>
                <div className='form-group col-m2'>
                    <label htmlFor="title"> Title</label>
                
                    <input type="text" name = "title"  onChange = {ChangeHandler} className='form-control mt-2'  value={item.title}  />
                </div>
                <div className='form-group'>
                    <label htmlFor="price"> Price</label>
                    <input type="number" name = "price" onChange={ChangeHandler} className='form-control mt-2'  value={item.price}     />
                </div>
                <div className='form-group'>
                    <label htmlFor="description"> Description </label>
                    <input type="text" name = "description" onChange={ChangeHandler}  className='form-control mt-2 '  value={item.description}/>
                </div>
                <button class="btn btn-primary" type="submit">Submit</button>
                <div>
                    
 
                </div>
               
            </form>

        </div>
        
       </div>
  )
}

export default PersonForm

