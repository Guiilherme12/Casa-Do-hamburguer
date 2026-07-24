import { CalendarFold, Clock, User } from "lucide-react";
type CardPedidoType = {
  id: number;
  name: string;
  date: string;
  orderTime: string;
  deliveredTime?: string;
  total: number;
};
const CardPedido = ({
  id,
  name,
  date,
  orderTime,
  deliveredTime,
  total,
}: CardPedidoType) => {
  return (
    <div className="w-52 rounded-md bg-[#F2DAAC] p-2 text-[#32343E]">
      {/* Topo */}
      <div className="flex items-start justify-between">
        <p className="font-bold">#{id}</p>

        <select className="bg-transparent font-bold outline-none">
          <option defaultChecked>Pendente</option>
          <option>Retirado</option>
          <option>Cancelado</option>
        </select>
      </div>

      {/* Informações abaixo */}
      <div className="mt-3 flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <User size={16} />
          <p className="text-sm">{name}</p>
        </div>

        <div className="flex items-center gap-2">
          <CalendarFold size={16} />
          <p className="text-sm">{date}</p>
        </div>

        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <Clock size={16} />
            <p className="text-sm">{orderTime}</p>
          </div>

          <div className="flex items-center gap-2">
            <Clock size={16} />
            <p className="text-sm">{deliveredTime ? deliveredTime : "-"}</p>
          </div>
        </div>

        <div className="mt-1 h-2 h-[2px] w-full bg-[#32343E]"></div>

        <p className="text-right text-lg font-bold">R${total}</p>
      </div>
    </div>
  );
};

export default CardPedido;
