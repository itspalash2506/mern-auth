import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-slate-300">
      <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
        <Link to="/">
          <h1 className="font-bold">Auth App</h1>
        </Link>
        <ul className="flex gap-4">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/sign-in">
            <li>Sing-In</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
