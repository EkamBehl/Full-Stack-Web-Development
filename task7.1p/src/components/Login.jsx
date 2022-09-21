import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import Button from './Button'
import Input from './Input'
import './Login.css'
import { signInWithGooglePopup,createUserDocFromAuth,signInAuthUserWithEmailAndPassword } from '../Utils/Firebase';

export default function Login() {
    const [contact, setContact] = useState({email:'',password:''});
    
    const handleSubmit=async (event)=>{
        event.preventDefault();
        
        try{
            const response=await signInAuthUserWithEmailAndPassword(email,password)
            console.log(response);
            alert("logged in!!");
        }
        catch(error){
            alert('incorrect password or email!!');
            console.log("error in login",error.message)
        }

    }
    const {email,password}=contact;
    const logGoogleUser=async()=>{
        const {user}=await signInWithGooglePopup();
        createUserDocFromAuth(user);
    }

    
    
    const handleChange=(e)=>{
        const {name,value} =e.target
    
        setContact((preVal)=>{
            
            return{
                ...preVal,
                [name]:value
            }
        })
        
        

    }
    
    return (
        <div className='login'>
            <div className='title'>
                LOGIN

            </div>
            
                <Input 
                        title="Your email"
                        name='email'
                        type='text'
                        placeholder='email'
                        onChange={handleChange}
                        value={contact.email}
                        
                    />


           
                
            
            
                <Input 
                    name='password'
                    type='password'
                    placeholder='password'
                    onChange={handleChange}
                    value={contact.password}
                
                />
                
                <button 
                    type='submit'
                    onClick={handleSubmit}
                >Login </button>
                <div className='link'>
                <Link to ="/signup">SignUp</Link>


                </div>
                
        
            



            
            
        </div>
    )
}
