import { Link, NavLink } from "react-router-dom"

export default function Navbar() {
    return( <div className="flex gap-4">
        <NavLink
            to="/"
            style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : undefined,
            })}
        >
            <p className="text-sky-400 justify-center"> Home</p>
           
        </NavLink>
        <NavLink
            to="/show"
            style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : undefined,
            })}
        >
            <p className="text-4xl text-sky-700 items-center p-4 ">Movies</p>
          
        </NavLink>
    </div>
    );
}