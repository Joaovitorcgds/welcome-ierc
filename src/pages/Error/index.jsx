import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="h-screen flex flex-col justify-center items-center gap-7">
      <h1 className="font-bold text-4xl">APP IERC informa!</h1>
      <p>Desculpe, ocorreu um erro inesperado.</p>
      <p className="text-red-500 text-4xl">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}