import Illustration from "../assets/docIllustration.png"
import { useNavigate } from "react-router"


function CustomizeCreate() {

  const navigate = useNavigate()

  return (
   <>
    <div className="flex flex-col gap-4 items-center justify-center w-full min-h-[55vh]">
      <img src={Illustration} alt="Illus" className="w-[10%] w-auto"/>
      <p className="font-bold">Kickstart your first collection!</p>
      <p className="text-sm">Get started by creating your first folder to maintain your documents.</p>
      <button 
        className="font-semibold py-2 px-8 bg-blue-600 rounded-full bg-gradient-to-br from-[#AA59D6] to-[#4318FE] mt-2 text-lg hover:cursor-pointer"
        onClick={() => {navigate("/conversation/customize/editCollection")}}><span className="font-bold text-2xl">+</span> Create a Collection
      </button>
    </div>
    
   </>
  )
}

export default CustomizeCreate