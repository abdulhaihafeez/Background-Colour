import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'

function App() {
  const changeBodyColorBlue = () => {
    document.body.style.backgroundColor =  'rgb(56, 119, 255)';
  };
  const changeBodyColorRed = () => {
    document.body.style.backgroundColor = 'rgb(255, 38, 38)';
  };
  const changeBodyColorGreen = () => {
    document.body.style.backgroundColor = 'rgb(2, 200, 2)';
  };
  const changeBodyColorPink = () => {
    document.body.style.backgroundColor = 'rgb(214, 48, 76)';
  };
  const changeBodyColorGray = () => {
    document.body.style.backgroundColor = 'gray';
  };
  const changeBodyColorWhite = () => {
    document.body.style.backgroundColor = 'white';
  };
  const changeBodyColorYellow = () => {
    document.body.style.backgroundColor = 'yellow';
  };
  const changeBodyColorBlack = () => {
    document.body.style.backgroundColor = 'black';
  };
  const changeBodyColorOrange = () => {
    document.body.style.backgroundColor = 'rgb(255, 68, 0)';
  };
  const changeBodyColorPurple = () => {
    document.body.style.backgroundColor = 'rgb(120, 2, 120)';
  };
  const Reds = () =>{
    document.body.style.backgroundColor = 'rgb(120, 2, 120)';
  }
  const greens = () =>{
    document.body.style.backgroundColor = 'rgb(120, 2, 120)';
  }
  const oranges = () =>{
    document.body.style.backgroundColor = 'rgb(120, 2, 120)';
  }
  const purples = () =>{
    document.body.style.backgroundColor = 'rgb(120, 2, 120)';
  }
  const yellows = () =>{
    document.body.style.backgroundColor = 'rgb(120, 2, 120)';
  }
  const grays = () =>{
    document.body.style.backgroundColor = 'rgb(120, 2, 120)';
  }
  const pinks = () =>{
    document.body.style.backgroundColor = 'rgb(120, 2, 120)';
  }
  return (
    <>
    
      <div id='maindiv'>


        <button id='red' onClick={changeBodyColorRed} style={{ padding: '10px 15px', fontSize: '16px' }}>
            Red</button>

        <button id='green' onClick={changeBodyColorGreen} style={{ padding: '10px 15px', fontSize: '16px' }}>
            Green</button>

        <button id='yellow' onClick={changeBodyColorYellow} style={{ padding: '10px 15px', fontSize: '16px' }}>
            Yellow</button>


        <button id='pink' onClick={changeBodyColorPink} style={{ padding: '10px 15px', fontSize: '16px' }}>
            Pink</button>
        <button id='blue' onClick={changeBodyColorBlue} style={{ padding: '10px 15px', fontSize: '16px' }}>
            Blue</button>

        <button id='gray' onClick={changeBodyColorGray} style={{ padding: '10px 15px', fontSize: '16px' }}>
            Gray</button>

        <button id='white' onClick={changeBodyColorWhite} style={{ padding: '10px 15px', fontSize: '16px' }}>
            White</button>


        <button id='black' onClick={changeBodyColorBlack} style={{ padding: '10px 15px', fontSize: '16px' }}>
            Black</button>

            <button id='Orange' onClick={changeBodyColorOrange} style={{ padding: '10px 15px', fontSize: '16px' }}>
            Orange</button>

            <button id='Purple' onClick={changeBodyColorPurple} style={{ padding: '10px 15px', fontSize: '16px' }}>
            Purple</button>
      </div>
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

export default App