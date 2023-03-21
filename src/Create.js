import React from 'react'
import axios from 'axios';

const Create = () => {



  const [form ,setForm] = React.useState({
    fullName:"",
    email:"",
    phone:""
  })

  const header = { "Header" : "Header"}


  function handleSubmit(e){
    e.preventDefault()
    axios.post('https://6409ca796ecd4f9e18bb3ba4.mockapi.io/test' ,{
      name: form.name,
      email: form.email ,
      phone: form.phone,
      header
    })

    console.log(form)
    
  }

  function handleChange(e){
    const {name,value} = e.target
    setForm(function(item){
      return({
        ...item,
        [name] : value
      })
    })
  }


  
  return (
    <div className='div-create'>
      
      <h2>This is the create page</h2>
        <form onSubmit={handleSubmit}>

          <label htmlFor='name'>Name</label>          <br/>
          <input type="text" id='name' name='fullName' value={form.fullName} onChange={handleChange} />

          <br/>
          <br/>

          <label htmlFor='email'>Email</label>          <br/>
          <input type="text" id='email' name='email' value={form.email} onChange={handleChange}  />
          <br />
          <br />

          <label htmlFor='phone'>Phone</label>          <br/>
          <input type="text" id='phone' name='phone' value={form.phone} onChange={handleChange}  />
          <br />
          <br />
          <button>Add</button>
        </form>



    </div>
  )
}

export default Create