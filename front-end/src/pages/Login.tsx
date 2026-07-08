import { useState } from "react";
import Input from "../components/Input";
import { Link } from "react-router-dom";
import Button from "../components/Button";
const Login = () => {
  const [email, setEmail] = useState(""); //variável de estado (muda automaticamente o texto quando clica no botão)
  const [password, setPassword] = useState("");

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault(); // Nao recarrega mais a pagina web automaticamento quando envia o formuário
    console.log(email);
    console.log(password);
  }
  return (
    <form
      className="flex h-screen items-center justify-center bg-[#161410]"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col items-center justify-center gap-2">
        <Link to="/">
          <img src="./logo.png" alt="" className="mb-4" />
        </Link>

        <Input
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button title="Login" variant="default" />
        <Link to="/register" className="w-full">
        <Button title ="Não tenho uma conta" variant="outline" />
        </Link>

        {/*<button className="w-full cursor-pointer rounded-md bg-[#C92A0E] py-2 text-sm font-bold text-white">
          Login
        </button>*/}
        
      </div>
    </form>
  );
};

export default Login;
