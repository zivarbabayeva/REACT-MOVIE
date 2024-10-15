import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
    </div>
  )
}
