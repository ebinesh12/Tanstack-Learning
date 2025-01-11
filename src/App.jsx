import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Query from './components/Query'
import ReactQry from './components/ReactQry'
import Product from './components/Product'
import Header from './components/Header'
import Details from './components/Details'
import Pages from './components/Pages'
import Scroll from './components/Scroll'
import Mute from './components/Mute'
import ReactTbl from './components/ReactTbl'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
        <Header/>
        <Routes>
            <Route exact path='/' element={<Query />} />
            <Route exact path='/rq' element={<ReactQry />} />
            <Route exact path='/pro' element={<Product />} />
            <Route exact path='/pro/:id' element={<Details />} />
            <Route exact path='/page' element={<Pages />} />
            <Route exact path='/scroll' element={<Scroll />} />
            <Route exact path='/mute' element={<Mute />} />
            <Route exact path='/table' element={<ReactTbl />} />
        </Routes>
    </Router>
    // <>
    // <Query />
    // <ReactQry />
    //   {/* <div>
    //     <a href="https://vite.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p> */}
    // </>

  )
}

export default App
