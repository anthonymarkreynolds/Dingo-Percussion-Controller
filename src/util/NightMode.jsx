import {createContext, useState} from 'react'
const NightMode = createContext(null)
export const NightModeProvider = ({children}) => {
  const [nightMode, setNightMode] = useState(false)
  return <NightMode.Provider value={{nightMode, setNightMode}}>{children}</NightMode.Provider>
}

export default NightMode
