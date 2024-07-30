import logo from "../../assets/logo.jpg"

export function Header(){
  return(
    <>
      <div className="flex flex-col justify-center items-center m-10 gap-4">
        <img src={logo} alt="" className="rounded-full" width={70}/>
        <h1 className="text-center font-bold">Cadastro de Visitantes</h1>
      </div>
    </>
  )
}