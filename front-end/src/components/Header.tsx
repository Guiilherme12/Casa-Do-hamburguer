import { Link, useLocation } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { useContext, useEffect } from "react";
import { LogOut, ShoppingCart, Box, LayoutDashboard, Plus } from "lucide-react";

const Header = () => {
  const { user, setUser } = useContext(UserContext);
  const location = useLocation();

  const handleAuthUser = async () => {
    try {
      const response = await fetch("http://localhost:3000/me", {
        credentials: "include", //cookies
      });

      if (response.status !== 200) {
        console.log("erro");
        return;
      }

      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.log(error);
      return;
    }
  };
  const handlelLogout = async () => {
    try {
      const response = await fetch("http://localhost:3000/logout", {
        credentials: "include",
        method: "POST",
      });

      if (!response.ok) {
        console.log("Não deu certo");
        return;
      }

      setUser(null);
    } catch (error) {
      console.log(error);
      return;
    }
  };
  useEffect(() => {
    handleAuthUser();
  }, []);

  const GetNavItemClass = (path: string) => {
    const baseClass =
      "flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded-md border-1";

    if (location.pathname === path) {
      return `${baseClass}  text-[#161410] bg-[#F2DAAC]`;
    } else {
      return;
    }
  };

  return (
    <div className="bg-[#161410]">
      <div className="mx-auto flex w-full items-center justify-between p-3 md:w-[737px] md:p-0">
        {" "}
        {
          // w-full usado para os dispositivos móveis(tem pixels diferentes dependendo do modelo, o md: é para restringir o uso do comando apenas para os computadores)
        }
        <Link to="/">
          <img src="./logo.png" alt="" />
        </Link>
        <Link to="/login" className="text-white">
          Login
        </Link>
        {user ? (
          <div className="flex items-center gap-8 text-white">
            {user.admin && ( //caso o usuario seja admin, realizar o que está dentro do parentese
              <div className="hidden items-center gap-2 text-[#F2DAAC] md:flex">
                <Link to="/">
                  <div className={GetNavItemClass("/")}>
                    <Box size={18} />
                  </div>
                </Link>

                <Link to="/pedidos">
                  <div className={GetNavItemClass("/pedidos")}>
                    <LayoutDashboard size={18} />
                  </div>
                </Link>

                <div className="flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded-md border-1">
                  <Plus size={18} />
                </div>
              </div>
            )}

            <div className="relative cursor-pointer">
              <ShoppingCart size={18} />

              <p className="absolute -top-4 -right-4 flex h-5 w-5 justify-center justify-items-center rounded-full bg-[#F2DAAC] text-[#161410]">
                1
              </p>
            </div>

            <div className="flex items-center gap-2">
              <p>{user.name} </p>{" "}
              <LogOut
                size={18}
                className="cursor-pointer"
                onClick={() => handlelLogout()}
              />
            </div>
          </div> // se for verdadeiro : user.name , se for falso : mostra o botão de entrar
        ) : (
          <Link to="/login">
            <div className="flex h-[35px] w-[130px] cursor-pointer items-center justify-center rounded-sm bg-[#F2DAAC]">
              Entrar
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
