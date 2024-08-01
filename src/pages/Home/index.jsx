import { Link } from 'react-router-dom'
import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'

import { FiLink } from "react-icons/fi";

export function Home(){
  return(
    <main className='flex'> 
      <Sidebar/>
      <div className='flex flex-col w-full h-screen'>
        <Header/> 
        <div className="h-full flex flex-col justify-center items-center gap-5">  
          <h1 className="font-bold text-4xl text-center">
            Bem vindo a plaforma IERC
          </h1>
          <div className='flex flex-col gap-4'>
            <Link to="/register/1" className='flex items-center gap-2 hover:cursor-pointer text-lg border-b-2'>
              <span>Cadastrar Visitantes</span>
              <FiLink className='text-black'/>
            </Link>
            <Link to="/visitors" className='flex items-center gap-2 hover:cursor-pointer text-lg border-b-2'>
              <span>Visualizar Visitantes</span>
              <FiLink className='text-black'/>
            </Link>
            
          </div>
        </div>
      </div>
    </main>
  )
}