import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg"
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { RiGroupLine } from "react-icons/ri";

export function Sidebar(){
  return(
    <aside className="bg-[#202020] w-[350px] h-screen py-10 px-5 ">
      <div className="flex items-center gap-3 mb-10">
        <img src={logo} alt="Logo Ierc" className="w-11 rounded-md"/>
        <h2 className="text-white text-center font-semibold text-xl">Plataforma IERC</h2>
      </div>
      <nav className="flex flex-col gap-4 text-xl">
        <Link rel="stylesheet" to="register/1" className="flex items-center text-white gap-3 text-center py-2 px-2 text-xl rounded-lg hover:bg-[#505050]">
          <AiOutlineUsergroupAdd size={30}/>
          <span>Cadastrar Visitantes</span> 
        </Link>
        <Link rel="stylesheet" to="register" className="flex items-center text-white gap-3 text-center py-2 px-2 text-xl rounded-lg hover:bg-[#505050]">
          <RiGroupLine size={25}/>
          <span>Visitante Cadastrados</span>
        </Link>
      </nav>
    </aside>
  )
}
