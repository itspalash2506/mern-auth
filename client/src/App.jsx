import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import About from "./pages/About";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

export default function App() {
  return <BrowserRouter>
  <Header/>
  <Routes>
    <Route path="/" element={<Home/>}>home</Route>
    <Route path="/about" element={<About/>}>about</Route>
    <Route path="/profile" element={<Profile/>}>profile</Route>
    <Route path="/sign-in" element={<SignIn/>}>sign-in</Route>
    <Route path="/sign-up" element={<SignUp/>}>sign-up</Route>
  </Routes>
  </BrowserRouter>;
}
