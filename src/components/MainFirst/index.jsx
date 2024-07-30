import { useForm } from "react-hook-form"
import { ArrowRight } from "phosphor-react"
import { useEffect, useState } from "react";

export function MainFirst(){
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState({
      name: "",
      phone: "",
      email: "",
      address: "",
    }
  )

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
    })
  }

  useEffect(() => {
    console.log(user);
  },[user])
  

  const onSubmit = (data) => {
    SaveUserData(data);
  };

  return(
    <div className="flex justify-center items-center ">
      <div className="mx-6 flex flex-col w-full md:w-4/6 gap-5">
        <h1 className="font-bold">Dado Pessoais:</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full">
          <div className="flex flex-col ">  
            <label htmlFor="name" className="font-semibold text-lg mb-2">Nome Completo</label>
            <input  {...register("name", { required: true })} className="border-2 rounded-lg focus:border-blue-500 px-1 py-2" />
            {errors.name && <span className="text-red-500">Esse campo é obrigatório!</span>}
          </div>

          <div className="flex flex-col ">
            <label htmlFor="phone" className="font-semibold text-lg mb-2">Telefone</label>
            <input type="number" data-ls-module="charCounter" maxLength="20" {...register("phone", { required: true })} className="border-2 rounded-lg focus:border-blue-500 px-1 py-2" />
            {errors.telephone && <span className="text-red-500">Esse campo é obrigatório!</span>}
          </div>

          <div className="flex flex-col ">
            <label htmlFor="email" className="font-semibold text-lg mb-2">Email</label>
            <input {...register("email",)} className="border-2 rounded-lg focus:border-blue-500 px-1 py-2" />
            {errors.telephone && <span className="text-red-500">Esse campo é obrigatório!</span>}
          </div>

          {/* <div className="flex flex-col"> 
            <label htmlFor="birthday" className="font-semibold text-lg mb-2">Data de Nascimento</label>
            <input type="birthday" {...register("birthday", { required: true })} className="border-2 rounded-lg focus:border-blue-500 px-1 py-2" />
            {errors.birthday && <span className="text-red-500">Esse campo é obrigatório!</span>}
          </div> */}

          {/* <div className="flex flex-col ">
            <label htmlFor="gender" className="font-semibold text-lg mb-2">Sexo</label>
            <input {...register("gender", { required: true })} className="border-2 rounded-lg focus:border-blue-500 px-1 py-2" />
            {errors.gender && <span className="text-red-500">Esse campo é obrigatório!</span>}
          </div>

          <div className="flex flex-col ">
            <label htmlFor="address" className="font-semibold text-lg mb-2">Endereço</label>
            <input {...register("address", { required: true })} className="border-2 rounded-lg focus:border-blue-500 px-1 py-2" />
            {errors.address && <span className="text-red-500">Esse campo é obrigatório!</span>}
          </div> */}

          {/* <div className="flex flex-col ">
            <label htmlFor="email" className="font-semibold text-lg mb-2">Email</label>
            <input {...register("email", { required: true })} className="border-2 rounded-lg focus:border-blue-500 px-1 py-2" />
            {errors.email && <span className="text-red-500">Esse campo é obrigatório!</span>}
          </div> */}

          {/* <div className="flex flex-col ">
            <label htmlFor="guest" className="font-semibold text-lg mb-2">Convidado de</label>
            <input {...register("guest", { required: true })} className="border-2 rounded-lg focus:border-blue-500 px-1 py-2" />
            {errors.guest && <span className="text-red-500">Esse campo é obrigatório!</span>}
          </div> */}

          <div className="flex justify-end items-center mb-14 gap-2 hover:cursor-pointer hover:bor">
            <input type="submit" value={"próximo"} className="text-right"/>
            <ArrowRight size={32} />
          </div>
          
        </form>
      </div>
    </div>
  )
}

// "bg-black text-white py-3 rounded-lg font-bold cursor-pointer hover:opacity-85"