import { useForm } from "react-hook-form"
import { ArrowRight } from "phosphor-react"
import { useEffect } from "react";
import { useAuth } from "../../../hooks/auth";
import { useNavigate } from "react-router-dom";

export function FirstStep(){
  // eslint-disable-next-line no-unused-vars
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function SaveUserData(data){
    setUser({
      name: data.name,
      phone: data.phone, 
      email: data.email,
      birthday: data.birthday,
      gender: data.gender,
    })
    navigate("/register/2")
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
            <label htmlFor="name" className="font-semibold text-lg mb-2">Nome Completo</label>
            <input  {...register("name", { required: true })} className="border-2 rounded-lg focus:border-blue-500 px-1 py-2" />
            {errors.name && <span className="text-red-500">Esse campo é obrigatório!</span>}
          </div>

          <div className="flex justify-between items-center">
            <div className="flex flex-col w-1/2">
              <label htmlFor="birthday" className="font-semibold text-lg mb-2">Data de Nascimento</label>
              <input type="date"  {...register("birthday")} className="border-2 rounded-lg focus:border-blue-500 px-1 py-2" />
            </div>

            <div className="flex flex-col w-1/3">
              <label htmlFor="birthday" className="font-semibold text-lg mb-2">Sexo</label>
              <div className="flex gap-3">
                <label className="radio">
                  <input type="radio" name="gender" value="Masculino" {...register("gender")}/>
                  <span className="ml-2">Masculino</span>
                </label>
                <label className="radio">
                  <input type="radio" name="gender" value="Feminino" {...register("gender")}/>
                  <span className="ml-2">Feminino</span>
                </label>
              </div>
            </div>
          </div>

          <div className="flex flex-col ">
            <label htmlFor="phone" className="font-semibold text-lg mb-2">Telefone</label>
            <input type="number" data-ls-module="charCounter" maxLength="20" {...register("phone", { required: true })} className="border-2 rounded-lg focus:border-blue-500 px-1 py-2" />
            {errors.phone && <span className="text-red-500">Esse campo é obrigatório!</span>}
          </div>

          <div className="flex flex-col ">
            <label htmlFor="email" className="font-semibold text-lg mb-2">Email</label>
            <input {...register("email",)} className="border-2 rounded-lg focus:border-blue-500 px-1 py-2" />
            {errors.telephone && <span className="text-red-500">Esse campo é obrigatório!</span>}
          </div>

          <div className="flex justify-end items-center mb-14 gap-2 hover:cursor-pointer hover:bor">
            <input type="submit" value={"próximo"} className="text-right hover:cursor-pointer"/>
            <ArrowRight size={32} />
          </div>
          
        </form>
      </div>
    </div>
  )
}

// "bg-black text-white py-3 rounded-lg font-bold cursor-pointer hover:opacity-85"