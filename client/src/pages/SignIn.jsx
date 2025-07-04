import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value});
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      setLoading(true);
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setLoading(false);
      if(data.success == false) {
        setError(true);
        return;
      }
      navigate("/");
    }catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="test-3xl text-center font-semibold my-7">Sign In</h1>
      <form className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          id="email"
          className="bg-slate-100 p-3 rounded-lg"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="bg-slate-100 p-3 rounded-lg"
          onChange={handleChange}
        />
        <button disabled={loading} onClick={handleSubmit} className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          {loading ? "Loading..." : "Sign In " /*This shows loading when loading..or Sign-up all the other times */} 
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Do not have an account ?</p>
        <Link to="/sign-up">
          <span className="text-blue-400 hover:underline decoration-blue-500 decoration-2 decoration-w drop-shadow-lg transition duration-300">Sign Up</span>
        </Link>
      </div>
      <p className="text-red-400 mt-5">{error && 'Something went wrong'}</p>
    </div>
  );
}
