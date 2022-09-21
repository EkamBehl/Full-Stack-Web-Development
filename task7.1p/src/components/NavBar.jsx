import React from 'react'
import Input from './Input'
import { Link, Outlet } from 'react-router-dom'
export default function NavBar() {
  return (
    <div style={{'background-color':'grey', 'width':'100%','margi-right':'30px'}}>
        <div>
            DEV@Deakin
            
            <input
                type='text'
                placeholder='search'
            />
            
            <Link to='/'>Post</Link>
            <Link to='/login'>Login</Link>
            <Outlet/>
        </div>
    </div>
  )
}
