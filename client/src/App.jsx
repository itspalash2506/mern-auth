import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";

export default function App() {
  return <BrowserRouter>
  <Header/>
  <Routes>
    <Route path="/" element={<Home/>}>home</Route>
    <Route path="/about" element={<Home/>}>about</Route>
    <Route path="/profile" element={<Home/>}>profile</Route>
    <Route path="/sign-in" element={<Home/>}>sign-in</Route>
    <Route path="/sign-up" element={<Home/>}>sign-up</Route>
  </Routes>
  </BrowserRouter>;
}
