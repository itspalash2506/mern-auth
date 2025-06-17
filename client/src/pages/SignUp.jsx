import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="test-3xl text-center font-semibold my-7">SignIn</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          id="Username"
          className="bg-slate-100 p-3 rounded-lg"
        />
        <input
          type="email"
          placeholder="Email"
          id="Email"
          className="bg-slate-100 p-3 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          id="Password"
          className="bg-slate-100 p-3 rounded-lg"
        />
        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          Sign Up
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an Account ?</p>
        <Link to="/sign-in">
          <span className="text-blue-400 hover:underline decoration-blue-500 decoration-2 decoration-w drop-shadow-lg transition duration-300">Sign In</span>
        </Link>
      </div>
    </div>
  );
}
