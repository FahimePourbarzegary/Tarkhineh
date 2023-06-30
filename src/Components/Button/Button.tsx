import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  ExtraClass?: string;
};
function Button({ children, type = "button", ExtraClass }: ButtonProps) {
  return (
    <button
      type={type}
      className={`${ExtraClass}  bg-primaryGreen  text-[10px] xl:text-base   text-white rounded hover:bg-shade-3 duration-700`}
    >
      {children}
    </button>
  );
}

export default Button;
