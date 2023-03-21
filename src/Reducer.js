import React from 'react'

const Reducer = () => {

    const [data, setData] = React.useState('')

    function reducer(state,action){
        if(action.type === "ADD"){
            const newData = [...state.value , action.payload]
            return{
                ...state,
                value: newData
            }
        }

        if(action.type === "REMOVE"){
            const newData = state.value.filter((item) => item.id!== action.payload)
            return{
                ...state,
                value: newData
            }
        }


    }

    const defaultState = {
        value: []
    }

    const [state, dispatch] = React.useReducer( reducer, defaultState)

    const ele = state.value.map(function(item){
        return(
            <div key={item.id}>
                <p>{item.data}</p>
                <button onClick={() => handleRemove(item)}>Remove this</button>
            </div>
        )
    })

    function handleSubmit(e){
        e.preventDefault()
        if(data){
            const newData = {id: new Date().getTime() , data}
            dispatch({type: "ADD" , payload : newData})
            setData('')
        }
    }

    function handleRemove(item){
        dispatch({type:"REMOVE", payload:item.id})
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input placeholder='add' type='text' value={data} onChange={(e) => setData(e.target.value)}  />
            <button>Add</button>
        </form>
        {ele}
    </div>
  )
}

export default Reducer