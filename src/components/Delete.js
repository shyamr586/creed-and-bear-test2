import React, {useState} from 'react'

const Delete = (props) => {
    const [checked, setChecked] = useState()

    function handleCheck(id){
        setChecked(()=>id)
    }
  return (
    <div>
        <input data-testid = "first" type="checkbox" value={props.dummy[0].id} onClick={()=>handleCheck(props.dummy[0].id)}></input>
        <input data-testid = "second" type="checkbox" value={props.dummy[1].id}></input>
        <input data-testid = "third" type="checkbox" value={props.dummy[2].id}></input>
        <p data-testid = "data">{checked}</p>
    </div>
  )
}

export default Delete