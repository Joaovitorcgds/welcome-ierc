import './index.css'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Outlet } from "react-router-dom"

function App() {

  return (
    <main className='flex'> 
      <Sidebar/>
      <div className='flex flex-col w-full'>
        <Header/> 
        <div className="h-[100vh_-_90px]">  
          <Outlet/>
        </div>
      </div>
    </main>
  )
}

export default App
