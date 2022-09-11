import { useState } from 'react';
import React from 'react';
import { Title } from './Title';


export function Switcher({questionToggled}) {
    
    if(questionToggled){
        return(
            
            <div >
                
                Describe Your problem<br/>
                <input placeholder='Enter 1-paragraph abstract' style={{width:"500px",height:"500px",borderRadius:"5px"}}></input>
                <div>
                    Tags:
                    
                    <input style={{marginLeft:"20px"}} placeholder='Please add up to 3 tags to describe your article'></input>
                </div>
                <div style={{marginTop:"20px"}}>
                <button type='button'>Post</button>
                </div>
                
            </div>
        );
    }else{
        return(
            
            <div>
            Abstract<br/>
                <input placeholder='Enter 1-paragraph abstract' style={{width:"500px",height:"100px",borderRadius:"5px"}}></input>
                <div style={{paddingTop:"30px"}} >
                    
                    Article Text
                    <br/>
                    <input placeholder='Enter 1-paragraph abstract' style={{width:"500px",height:"200px",borderRadius:"5px"}}></input>
                </div>
                <div style={{paddingTop:"30px"}} >
                    Tags:
                    
                    <input style={{marginLeft:"20px"}} placeholder='Please add up to 3 tags to describe your article'></input>
                </div>
                <div style={{marginTop:"20px"}}>
                <button type='button'>Post</button>
                </div>
            </div>
        );
    }
    
    
 }
