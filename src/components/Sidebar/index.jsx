import { useAuth } from "../../hooks/auth";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg"
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { RiGroupLine } from "react-icons/ri";
import { X } from "phosphor-react";

export function Sidebar(){

  const {isOpen, setIsOpen} = useAuth();

  function toggleMenu(){
    if(isOpen){
      setIsOpen(!isOpen)
    }
    else{
      setIsOpen(!isOpen)
    }
  }

  return(
    <aside className={ isOpen ? "bg-[#202020] w-screen z-10 fixed h-screen px-5 py-6" : "hidden lg:block bg-[#202020] w-[400px] h-screen px-5 py-6"}>
      <div className="flex justify-between items-center mb-10">
        <Link to="/home" className="flex items-center gap-3 hover:cursor-pointer">
          <img src={logo} alt="Logo Ierc" className="w-11 rounded-md"/>
          <h2 className="text-white text-center font-semibold text-xl">Plataforma IERC</h2>
        </Link>

        {isOpen ? <X className="text-white lg:hidden" size={32} weight="bold" onClick={toggleMenu} /> : <></>}
      </div>
      <nav className="flex flex-col gap-4 text-xl">
        <Link rel="stylesheet" to="/register/1" onClick={toggleMenu} className="flex items-center text-white gap-3 text-center py-2 px-2 text-xl rounded-lg hover:bg-[#505050]">
          <AiOutlineUsergroupAdd size={30}/>
          <span>Cadastrar Visitantes</span> 
        </Link>
        <Link rel="stylesheet" to="/visitors" className="flex items-center text-white gap-3 text-center py-2 px-2 text-xl rounded-lg hover:bg-[#505050]">
          <RiGroupLine size={25}/>
          <span>Visitante Cadastrados</span>
        </Link>
      </nav>
    </aside>
  )
}
