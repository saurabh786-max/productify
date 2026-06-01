import React from 'react'
import {Link} from "react-router"
import {ShoppingBagIcon, PlusIcon, UserIcon} from "lucide-react";
import { SignInButton, SignUpButton, useAuth, UserButton } from '@clerk/react';
import ThemeSelector from './ThemeSelector';
const Navbar = () => {
  const {isSignedIn} = useAuth()
  return (
    <div className='navbar bg-base-300'>
     <div className='max-w-5xl mx-auto w-full px-2 justify-between items-center flex'>
      <div className='flex-1'>
       <Link to="/" className='btn btn-ghost gap-2'>
        <ShoppingBagIcon className='size-5 text-primary'/>
        <span className='text-llg font-bold tracking-tight font-mono uppercase'>Productify</span>
       </Link>
      </div>
      <div className='flex gap-2 items-center '>
    <ThemeSelector/>
    {isSignedIn ? (
      <>
      <Link to={"/create"} className='btn btn-primary btn-sm gap-1' >
      <UserIcon className='size-4'/>
      <span className='hidden sm:inline'>Profile</span>
      </Link>
      <UserButton/>
      </>
    ):(
      <>
      <SignInButton mode='modal'>
        <button className='btn btn-ghost btn-sm'>Sign In</button>
      </SignInButton>
      <SignUpButton mode='modal'>
        <button className='btn btn-primary btn-sm'>Get Started</button>
      </SignUpButton>
      </>
    )}
      </div>
     </div>
    </div>
  )
}

export default Navbar
