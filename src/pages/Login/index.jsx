import { useForm } from "react-hook-form"
import { Link } from "react-router-dom";

export function LoginPage(){

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
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mx-6 gap-5">
            
            <div className="flex flex-col ">
              {/* register your input into the hook by invoking the "register" function */}
              <label htmlFor="Login" className="font-semibold text-lg mb-2">Login</label>
              <input placeholder="Login" {...register("login", { required: true })} className="border-2 rounded-lg focus:border-blue-500 px-1 py-2" />
              {errors.login && <span className="text-red-500">Esse campo é obrigatório!</span>}
            </div>

            <div className="flex flex-col">
              {/* register your input into the hook by invoking the "register" function */}
              <label htmlFor="password" className="font-semibold text-lg mb-2">Senha</label>
              <input placeholder="Senha" type="password" {...register("password", { required: true })} className="border-2 rounded-lg focus:border-blue-500 px-1 py-2" />
              {errors.password && <span className="text-red-500">Esse campo é obrigatório!</span>}
            </div>

            <input type="submit" className="bg-black text-white py-3 rounded-lg font-bold cursor-pointer hover:opacity-85" />
            
            <div className="flex justify-between"> 
              <Link to={"/register/new-member"} className="underline hover:text-blue-500">Não tenho cadastro</Link>
              <a href="" className="underline hover:text-blue-500">Esqueci a senha</a>
            </div>
          </form>

        </div>
      </div>
    </>
  )
}