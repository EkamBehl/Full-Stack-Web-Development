import React from 'react'

export default function Input(props) {
  return (
    <div>
        {props.title}
        <input type={props.type} 
        placeholder= {props.placeholder } 
        name ={props.name} 
        onChange={props.onChange}
        value={props.value}
        ></input>
        
    </div>
  )
}
