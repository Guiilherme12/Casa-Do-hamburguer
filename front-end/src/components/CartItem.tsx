import { ChevronLeft, Trash } from "lucide-react";

const CartItem = () => {
  return (
    <div className="flex items-center gap-3">
      <img src="./duplo-da-casa.png" alt="" className="w-[100px] rounded-md" />
      <div className="flex-1">
        <p className="font-bold uppercase">DUPLO DA CASA</p>
        <p className="font-bold text-[#848484]">R$28,90</p>

        <div className="mt-1 flex gap-4">
          <ChevronLeft
            className="cursor-pointer rounded-md bg-[#C92A0E] p-1 text-white"
            size={25}
          />

          <p className="bold">1</p>
          <ChevronLeft
            className="rotate-180 cursor-pointer rounded-md bg-[#C92A0E] p-1 text-white"
            size={25}
          />
        </div>
      </div>
      <p>
        <Trash size={18} className="cursor-pointer" />
      </p>
    </div>
  );
};

export default CartItem;
