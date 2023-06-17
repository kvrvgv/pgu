
import { Route, Routes } from "react-router-dom";
import Cabinet from "./pages/cabinet";
import Index from "./pages/index";
import Register from "./pages/register";
import Posts from "./pages/posts";
import './App.css'
import Nav from "./components/nav";

const App = () => (
  <Nav>
    <Routes>
      <Route element={<Index />} path='/' />
      <Route element={<Cabinet />} path='/cabinet'/>
      <Route element={<Register />} path='/register'/>
      <Route element={<Posts />} path='/posts'/>
    </Routes>
  </Nav>

)

export default App;