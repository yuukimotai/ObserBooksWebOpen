import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Login from "./Login.js"
import Register from "./Register.js"
import RakutenBook from "./RakutenBookRequest.js"
import MyBook from "./MyBook.js"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Link to="/Login">ログイン</Link><br />
      <Link to="/Register">新規登録</Link><br />
      <Link to="/RakutenBook">楽天ブック検索</Link><br />
      <Link to="/MyBook">マイブック</Link><br />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/rakutenbook" element={<RakutenBook />} />
        <Route path="/mybook" element={<MyBook />} />
      </Routes>
    </>
  )
}

export default App
