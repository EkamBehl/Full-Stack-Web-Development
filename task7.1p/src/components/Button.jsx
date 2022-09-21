import React from 'react'

export default function Button(props) {
  return (
    <div>
        <button style={{'backgroundColor':'aqua',borderRadius:'5px',border:'none',width:'100px',}} type={props.type}>{props.text}</button>
    </div>
  )
}
