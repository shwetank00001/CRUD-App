import React from 'react'

const Test = () => {
    const [data, setData] = React.useState({
        name:"",
        phone: '',
        email:""
    })

    function handleSubmit(e){
        e.preventDefault()

    }
    console.log(data)
    function handleChange(event){
        setData(function(){
            return{ ...data,
                [event.target.name] : event.target.value
            }
        })
    }


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='text' name='name' value={data.name} onChange={handleChange}/>
            <input type='text' name='phone' value={data.phone} onChange={handleChange}/>
            <input type='text' name='email' value={data.email} onChange={handleChange}/>
            <button>subbmit</button>
        </form>
    </div>
  )
}

export default Test