import { useState } from "react";
import CardPedido from "../components/CardPedido";
const Product = () => {
  const [category, setCategory] = useState("Pendente");

  const handleChangeCategory = (newCategory: string) => {
    setCategory(newCategory);
  };

  const getCategoryClass = (categoryName: string) => {
    const elementoSelecionado =
      "md:text-md flex h-7 w-24 cursor-pointer items-center justify-center rounded-md border border-[#F2DAAC] bg-[#F2DAAC] text-sm font-bold text-[#161410] md:h-9 md:w-32";

    const elementoNaoSelecionado =
      "md:text-md flex h-7 w-24 cursor-pointer items-center justify-center rounded-md border border-[#F2DAAC] bg-[#161410] text-sm font-bold text-[#F2DAAC] hover:bg-[#F2DAAC] hover:text-[#161410] md:h-9 md:w-32";

    return category === categoryName
      ? elementoSelecionado
      : elementoNaoSelecionado;
  };

  return (
    <div className="mx-auto w-full px-3 text-white md:w-[737px] md:px-0">
      {/* Categorias */}
      <div className="my-1 flex gap-2 md:my-3">
        <div
          className={getCategoryClass("Pendente")}
          onClick={() => handleChangeCategory("Pendente")}
        >
          Pendente
        </div>

        <div
          className={getCategoryClass("Retirado")}
          onClick={() => handleChangeCategory("Retirado")}
        >
          Retirado
        </div>

        <div
          className={getCategoryClass("Cancelado")}
          onClick={() => handleChangeCategory("Cancelado")}
        >
          Cancelado
        </div>
      </div>

      {/* Card do pedido */}
      <div className="grid grid-cols-3 gap-3">
        <CardPedido
          id={2}
          name="Jorge"
          date="22/07/2026"
          orderTime="21:23"
          deliveredTime="21:55"
          total="123.78"
        />
      </div>
    </div>
  );
};

export default Product;
