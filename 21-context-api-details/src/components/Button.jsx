import { useContext } from "react"
import { ThemeDataContext } from "../context/ThemeContext"


const Button = () => {

  const [theme, setTheme] = useContext(ThemeDataContext)

  const changeTheme = () => {
    setTheme('dark')
  }

  return (
    <div className='btn'>
      <button onClick={changeTheme}>Change Theme</button>
    </div>
  )
}

export default Button
