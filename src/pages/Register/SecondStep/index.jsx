import { useForm } from "react-hook-form"
import { useEffect } from "react";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../../../hooks/auth";
import { ArrowLeft } from "phosphor-react";
import { Link } from "react-router-dom";


export function SecondStep(){
  // eslint-disable-next-line no-unused-vars
  const { user, setUser } = useAuth()

  const notify = () => {
    toast.info("Novo Membro Cadastrado!", {
      position: "bottom-right"
    });
  }

  const {
    register,
    handleSubmit
  } = useForm();

  function SaveUserData(data){
    setUser({
      ...user,
      address: data.address,
      guest: data.guest,
      decision: data.decision
    })
    notify();
  }

  useEffect(() => {
    console.log(user);
  },[user])
  

  const onSubmit = (data) => {
    SaveUserData(data);
  };

  return(
    <div className="flex justify-center h-full">
      <div className="mx-6 my-10 flex flex-col w-full md:w-4/6 gap-5">
        <h1 className="font-bold">Dado Pessoais:</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full">

          <div className="flex flex-col ">
            <label htmlFor="address" className="font-semibold text-lg mb-2">Endereço</label>
            <input {...register("address")} className="border-2 rounded-lg focus:border-blue-500 px-1 py-2" />
          </div>

          <div className="flex flex-col ">
            <label htmlFor="guest" className="font-semibold text-lg mb-2">Convidado de</label>
            <input {...register("guest")} className="border-2 rounded-lg focus:border-blue-500 px-1 py-2" />
          </div>

          <div className="flex flex-col">
              <label htmlFor="decision" className="font-semibold text-lg mb-2">Minha decisão hoje foi...</label>
              <div className="flex flex-col gap-3">
                <label className="radio">
                  <input type="radio" name="decision" value="Aceitar a Jesus como Senhor e Salvador" {...register("decision")}/>
                  <span className="ml-2">Aceitar a Jesus como Senhor e Salvador</span>
                </label>
                <label className="radio">
                  <input type="radio" name="decision" value="Estou apenas visitando a Igreja" {...register("decision")}/>
                  <span className="ml-2">Estou apenas visitando a Igreja</span>
                </label>
                <label className="radio">
                  <input type="radio" name="decision" value="Quero conhecer uma célula mais próxima" {...register("decision")}/>
                  <span className="ml-2">Quero conhecer uma célula mais próxima</span>
                </label>
                <label className="radio">
                  <input type="radio" name="decision" value=" Reconciliar-me com Cristo e/ou a Igreja" {...register("decision")}/>
                  <span className="ml-2">Reconciliar-me com Cristo e/ou a Igreja</span>
                </label>
              </div>
            </div>


          <div className="flex justify-between items-center mt-10 gap-2 hover:cursor-pointer hover:bor">
            
            <Link to={"/register/1"} className="flex justify-end items-center gap-2 hover:cursor-pointer hover:bor">
              <ArrowLeft size={32} />
              <input type="submit" value={"Voltar"} className="text-right hover:cursor-pointer"/>
            </Link >

            <input type="submit" value={"Finalizar"} className="text-right py-2 px-6 bg-[#202020] rounded-md text-[#ffff] font-semibold hover:cursor-pointer hover:bg-[#202020e1]"/>

          </div>
          
        </form>
        <ToastContainer />
      </div>
    </div>
  )
}

// "bg-black text-white py-3 rounded-lg font-bold cursor-pointer hover:opacity-85"