import Button from '../components/Button'
import { useState } from 'react'

function App() {
  const [isClicked, hasClicked] = useState(0)
  return (
    <>
      <p></p>
      <Button className='m-5 p-3 border-2 rounded-[25px]' change={() => hasClicked(isClicked + 1)}>{"has been clicked " + isClicked}</Button>
      <NavLink></NavLink>
    </>
  )
}

export default App
