import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-[#161410]">
      <div className="mx-auto flex w-full items-center justify-between p-3 md:w-[737px] md:p-0">
        {" "}
        {
          // w-full usado para os dispositivos móveis(tem pixels diferentes dependendo do modelo, o md: é para restringir o uso do comando apenas para os computadores)
        }
        <img src="./logo.png" alt="" />
        <Link to="/login">
          <div className="flex h-[35px] w-[130px] cursor-pointer items-center justify-center rounded-sm bg-[#F2DAAC]">
            Entrar
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
