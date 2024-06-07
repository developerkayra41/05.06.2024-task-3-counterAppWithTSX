import { ChangeEvent, useState } from 'react'

import './App.css'

interface AppState {
  count: number
  inputValue: string
  streak: number
  incCounter: number
  decCounter: number
  resCounter: number
}

function App() {
  const [state, setState] = useState<AppState>({
    count: 0,
    inputValue: '',
    streak: 0,
    incCounter: 0,
    decCounter: 0,
    resCounter: 0
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setState({
      ...state,
      inputValue: value,
      count: !isNaN(Number(value)) && value !== '' ? Number(value) : state.count
    });
  }

  const Increment = () => {
    setState({
      ...state,
      count: state.count + 1,
      inputValue: '0',
      incCounter: state.incCounter + 1,
      streak: state.streak + 1
    });
  }

  const Decrement = () => {
    setState({
      ...state,
      count: state.count - 1,
      inputValue: '0',
      decCounter: state.decCounter + 1,
      streak: 0
    });
  }

  const Reset = () => {
    setState({
      ...state,
      count: 0,
      inputValue: '0',
      resCounter: state.resCounter + 1
    });
  }

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center' }}>

        {/* counter interface */}
        <div>
          <h1>Sayaç: {state.count}</h1>
          <h1>Streak: {state.streak}</h1>
          <div>
            <input
              type="text"
              placeholder='Başlangıç değerini girin'
              id='numberInput'
              onChange={handleInputChange}
              value={state.inputValue}
            />
          </div>
          <div style={{ marginTop: '10px' }}>
            <button onClick={Increment}>Arttır</button>
            <button onClick={Decrement}>Azalt</button>
            <button onClick={Reset}>Sıfırla</button>
          </div>
        </div>

        {/* table */}
        <div>
          <table>
            <thead>
              <tr>
                <th style={{ border: 0 }}>Log</th>
              </tr>
              <tr>
                <th>+</th>
                <th>-</th>
                <th>0</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{state.incCounter}</td>
                <td>{state.decCounter}</td>
                <td>{state.resCounter}</td>
              </tr>
            </tbody>

          </table>
        </div>

      </div>

    </>
  );
}

export default App
