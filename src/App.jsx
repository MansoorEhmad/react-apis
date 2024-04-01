import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Albums from "./components/Albums"
import Comments from "./components/Comments"
import Posts from "./components/Posts"
import Todos from "./components/Todos"
import Users from "./components/Users"
import Photos from "./components/Photos"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/photos" element={<Photos/>} />
        <Route path="/users" element={<Users/>} />
        <Route path="/todos" element={<Todos/>} />
        <Route path="/posts" element={<Posts/>} />
        <Route path="/comments" element={<Comments/>} />
        <Route path="/albums" element={<Albums/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
