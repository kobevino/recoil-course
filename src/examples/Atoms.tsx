import React from 'react';
import { atom, useRecoilState, useRecoilValue } from 'recoil';

const darkModeState = atom({
  key: 'darkMode',
  default: false
})

const DarkModeSwitch = () => {
  const [darkMode, setDarkMode] = useRecoilState(darkModeState)
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDarkMode(event.currentTarget.checked)
  }
  return <input type="checkbox" checked={darkMode} onChange={onChange} />
}

const Button = () => {
  const darkMode = useRecoilValue(darkModeState)
  const style = {
    backgroundColor: darkMode ? 'black' : 'white',
    color: darkMode ? 'white' : 'black'
  }
  return <button style={style}>My UI Button</button>
}

export const Atoms = () => {
  return (
    <div>
      <div>
        <DarkModeSwitch />
      </div>
      <div>
        <Button />
      </div>
    </div>
  )
}