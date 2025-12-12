import React, { createContext, useState } from 'react'

export const UserDataContext=createContext()



const userContext = ({children}) => {

    const [user, setUser] = useState({
        emial:'',
        fullName:{
            firstName:'',
            lastName:''
        }
    })
  return (
    <div>
        <UserDataContext.Provider value={(user, setUser)}>

        </UserDataContext.Provider>
    </div>
  )
}

export default userContext