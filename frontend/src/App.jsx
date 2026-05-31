

import { Show, SignIn, SignInButton, SignOutButton } from '@clerk/react'
import React from 'react'

const App = () => {
  return (
    <>
    <div>
      <button className='btn btn-primary '>click me </button>
      <Show when={'signed-out'} >
      <SignInButton mode='modal'/>
      </Show>
      <Show when={'signed-in'}>
          <SignOutButton/>
      </Show>
    </div>
    </>
  )
}

export default App

