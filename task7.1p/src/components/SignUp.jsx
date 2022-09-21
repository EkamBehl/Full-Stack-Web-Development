import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import Button from './Button'
import Input from './Input'
import './SignUp.css'
import { createAuthUserWithEmailAndPassword,createUserDocFromAuth } from '../Utils/Firebase';
export default function SignUp() {
    

    const [contact, setContact] = useState({name:'',email:'', password:'' ,confirmPassword:''});
    
    const{name,email,password,confirmPassword}=contact;
    const handleChange=(e)=>{
        const {name,value} =e.target
    
        setContact((preVal)=>{
            
            return{
                ...preVal,
                [name]:value
            }
        })
        
        

    }
    const handleSubmit=async (event)=>{
        event.preventDefault();
        if(password!==confirmPassword){
            alert('Passwords do not match')
            return;
        }
        try{
            const {user} = await createAuthUserWithEmailAndPassword(email,password)
            await createUserDocFromAuth(user,{name});
        }
        catch(error){
            console.log("error in creating user",error)
        }
}
    
    return (
        <div className='login'>
            <div className='title'>
                Create a DEV@DEAKIN ACcount

            </div>
                Name
                <Input 
                        name='name'
                        type='text'
                        placeholder='Name'
                        onChange={handleChange}
                        value={contact.username}
                        
                    />
                <br/>
                Email
                <Input 
                    name='email'
                    type='email'
                    placeholder='Email'
                    onChange={handleChange}
                    value={contact.email}
                    
                />
                <br/>
                Password
                <Input 
                    name='password'
                    type='password'
                    placeholder='password'
                    onChange={handleChange}
                    value={contact.password}
                
                />
                <br/>
                Confirm Password
                <Input 
                    name='confirmPassword'
                    type='password'
                    placeholder='password'
                    onChange={handleChange}
                    value={contact.confirmPassword}
                
                />
                <button  onClick={handleSubmit}>Submit</button>
                
                


                
                
        
            



            
            
        </div>
    )
}
