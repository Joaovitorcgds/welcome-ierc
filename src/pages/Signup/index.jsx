import { useForm } from "react-hook-form"
import { Link } from "react-router-dom";

export function SignupPage(){

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return(
    <>
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="container-Login flex-col w-screen h-screen sm:h-[700px] flex justify-around items-stretch shadow-3xl rounded-xl sm:w-[450px]">
          <h1 className="text-center">Ierc Célula</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
            
          <div className="flex justify-between items-center gap-2 mx-2 sm:mx-6">
            <div className="flex flex-col">
              <label htmlFor="name" className="font-semibold text-lg mb-2">Nome</label>
              <input autoComplete="off" placeholder="Nome" {...register("name", { required: true })} className="max-[400px]:w-[145px] w-[195px] border-2 rounded-lg focus:border-blue-500 px-1 py-2" />
              {errors.name && <span className="text-red-500">Esse campo é obrigatório!</span>}
            </div>

            <div className="flex flex-col">
              <label htmlFor="lastName" className="font-semibold text-lg mb-2">Sobrenome</label>
              <input autoComplete="off" placeholder="Sobrenome" {...register("lastName", { required: true })} className="max-[400px]:w-[145px] w-[195px] border-2 rounded-lg focus:border-blue-500 px-1 py-2" />
              {errors.lastName && <span className="text-red-500">Esse campo é obrigatório!</span>}
            </div>
          </div>
            
            <div className="flex flex-col mx-2 sm:mx-6">
              <label htmlFor="email" className="font-semibold text-lg mb-2">Email</label>
              <input autoComplete="off" placeholder="Email" {...register("email", { required: true })} className="border-2 rounded-lg focus:border-blue-500 px-1 py-2" />
              {errors.email && <span className="text-red-500">Esse campo é obrigatório!</span>}
            </div>

            <div className="flex flex-col mx-2 sm:mx-6">
              <label htmlFor="password" className="font-semibold text-lg mb-2">Senha</label>
              <input autoComplete="off" placeholder="Senha" type="password" {...register("password", { required: true })} className="border-2 rounded-lg focus:border-blue-500 px-1 py-2" />
              {errors.password && <span className="text-red-500">Esse campo é obrigatório!</span>}
            </div>

            <input autoComplete="off" type="submit" className="bg-black text-white py-3 rounded-lg font-bold cursor-pointer hover:opacity-85 mx-2 sm:mx-6" />
            
            <div className="flex mx-2 sm:mx-6"> 
              <Link to={"/login"} className="underline hover:text-blue-500">Fazer login</Link>
            </div>
          </form>

        </div>
      </div>
    </>
  )
}