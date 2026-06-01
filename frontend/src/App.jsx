

import { Show, SignIn, SignInButton, SignOutButton } from '@clerk/react'
import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router'
import Homepage from './components/Homepage'
import Products from './components/Products'
import CreatePage from './components/CreatePage'
import ProfilePage from './components/ProfilePage'
import EditProductPage from './components/EditProductPage'

const App = () => {
  return (
    <>
    <div className='min-h-screen bg-base-100'>
      <Navbar/>
      <main className='max-w-5xl mx-auto'>
      <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/product/:id' element={<Products/>}/>
          <Route path='/create' element={<CreatePage/>}/>
          <Route path='/profile' element={<ProfilePage/>}/>
          <Route path='/edit/:id' element={<EditProductPage/>}/>

      </Routes>
      </main>
    </div>
    </>
  )
}

export default App

