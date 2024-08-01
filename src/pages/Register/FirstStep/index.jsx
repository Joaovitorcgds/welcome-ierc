import { useForm } from "react-hook-form"
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

          <div className="flex justify-between gap-5 md:items-center flex-col md:flex-row">
            <div className="flex flex-col md:w-1/2">
              <label htmlFor="birthday" className="font-semibold text-lg mb-2">Data de Nascimento</label>
              <input type="date"  {...register("birthday")} className="border-2 rounded-lg focus:border-blue-500 px-1 py-2" />
            </div>

            <div className="flex flex-col md:w-1/3">
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

          <input type="submit" value={"próximo"} className="py-2 px-6 w-1/5 bg-[#202020] text-white text-center font-semibold self-end rounded-md hover:cursor-pointer hover:bg-[#505050]"></input>
        </form>
      </div>
    </div>
  )
}