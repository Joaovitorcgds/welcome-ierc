import './index.css'
// import { LoginPage } from "./pages/Login"
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
// import { MainFirst } from './components/MainFirst'
import { Outlet } from "react-router-dom"

function App() {

  return (
    <main className='flex'> 
      <Sidebar/>
      <div className='flex flex-col w-[calc(100vw_-_350px)]'>
        <Header/> 
        <div className="h-[100vh_-_90px]">  
          <Outlet/>
        </div>
      </div>
    </main>
  )
}

export default App
