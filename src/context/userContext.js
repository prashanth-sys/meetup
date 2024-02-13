import React from 'react'

const UserContext = React.createContext({
  userName: '',
  activeOptionId: '',
  setUser: () => {},
  setOption: () => {},
})

export default UserContext
