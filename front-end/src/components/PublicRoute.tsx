import { type ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router";
const PublicRoute = ({ children }: { children: ReactNode }) => {
  const [isChecking, setIsChecking] = useState(true);
  const navigate = useNavigate(); //Permite que navegue o usuario entre as paginas do projeto
  useEffect(() => {
    // espera o componente todo carregar

    const cookie = document.cookie;
    if (cookie) {
      const cookies = cookie.split("; "); //"Divide  os  cookies diferentes"
      const userCookie = cookies.find((c) => c.startsWith("user=")); //verifica se no array tem o user

      if (userCookie) {
        navigate("/", { replace: true }); // replace , subtitui a rota que voc~e tem[melhora um pouco a experiência]
        return;
      }
    }
    setIsChecking(false);
  }, [navigate]);

  if (isChecking) { // é executado antes do componente ser carregado (antres do useEffect)
    return <p>Carregando</p>;
  }
  return <div>{children}</div>;
};

export default PublicRoute;
