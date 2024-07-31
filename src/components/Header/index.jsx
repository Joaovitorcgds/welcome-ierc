import logo from "../../assets/logo.jpg"

export function Header(){
  return(
    <>
      <div className="flex justify-end items-center py-5 px-5 gap-4 shadow-lg">
        <h1 className="text-center font-bold">IERC admin</h1>
        <img src={logo} alt="" className="rounded-full" width={50}/>
      </div>
    </>
  )
}