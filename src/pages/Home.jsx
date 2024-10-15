import { useNavigate } from "react-router-dom"
export default function Home() {
  const navigate = useNavigate()

  const handleSubmit = () => {
    navigate("/movie")
  }
  return <div>
   
    
  </div>
}