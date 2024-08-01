import { useAuth } from "../../hooks/auth";
import { List } from "phosphor-react";

export function Header(){

  const {isOpen, setIsOpen} = useAuth();
  // const [navbar, setNavbar] = useState(false);

  function toggleMenu(){
    if(isOpen){
      setIsOpen(!isOpen)
    }
    else{
      setIsOpen(!isOpen)
    }
  }

  return(
    <>
      <div className={isOpen ? "justify-end flex items-center py-5 px-5 h-[90px] gap-4 shadow-lg" : "flex justify-between lg:justify-end items-center py-5 px-5 h-[90px] gap-4 shadow-lg"}>
        {
          isOpen ? <></> : <List className="text-black lg:hidden" onClick={toggleMenu} size={32} weight="bold"/>
        }
        <h1 className="text-center font-bold ">IERC ADMIN</h1>
      </div>
    </>
  )
}