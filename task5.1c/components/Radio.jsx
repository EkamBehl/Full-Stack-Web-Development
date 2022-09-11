import React, { useState } from 'react'


export function Radio({setToggled}) {
    
    const [checked,setChecked]=useState({question: true,article:false})
    
    const changeRadio=(e)=>{
        setChecked(()=>{
            return{
                question:false,
                article:false,
                [e.target.value]:true
            }
        })
    }
    
    return (
        
        <div className='whole'>
           
           
            <form>
            Select Post Type:
                <input style={{marginLeft:"20px"}} type="radio"
                    name="question"
                    value="question"
                    onChange={changeRadio}
                    checked={checked.question}  
                    />
                    
                    

                
                <label style={{marginLeft:"5px" ,paddingRight:"20px"}}>Question</label>
                
                <input type="radio"
                    value="article"
                    name="article"
                    onChange={changeRadio}
                    checked={checked.article}
                    style={{marginLeft:"20px"}}>
                    
                

                </input>
                <label style={{marginLeft:"5px" ,paddingRight:"20px"}} >Article</label>

            </form>
            {setToggled(checked.question)}
            
        </div>
    )
}
