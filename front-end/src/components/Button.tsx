type ButtonType = {
  title: string;
  variant?: "default" | "outline"; //Interrogação significa que é OPCIONAL
} & React.ButtonHTMLAttributes<HTMLButtonElement>; //TIPAGEM

const buttonVariant = (variant: ButtonType["variant"]) => {
  if (variant === "default") {
    return "w-full cursor-pointer rounded-md border-2 border-[#C92A0E] bg-[#C92A0E] py-2 text-sm font-bold text-white";
  } else if (variant === "outline") {
    return "w-full cursor-pointer rounded-md border-2 border-[#C92A0E] bg-white py-2 text-sm font-bold text-[#C92A0E]";
  }
};

const Button = ({ title, variant = "default", ...props }: ButtonType) => {
  return (
    <button {...props} className={buttonVariant(variant)}>
      {title}
    </button>
  );
};

export default Button;
