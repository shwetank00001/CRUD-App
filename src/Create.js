import React from 'react'

const Create = () => {

  const [form ,setForm] = React.useState({
    fullName:"",
    email:"",
    phone:""
  })

  const [display, setDisplay] = React.useState([])

  function handleSubmit(e){
    e.preventDefault()
    console.log(form)
    if(form.name && form.email && form.phone){
      const newData = {...form}
      setDisplay([...display, newData])
    }
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

  const ele = display.map(function(form,item){
    return(
      <div key={item}>
        <h4>{form.fullName}</h4>
        <h4>{form.email}</h4>
        <h4>{form.phone}</h4>
      </div>
    )
  })
  
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

        <div>
          {ele}
        </div>
    </div>
  )
}

export default Create