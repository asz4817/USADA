import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  colors: string;
};
const Button = ({children, colors="text-white bg-black"}: Props) => {
  return (
    <>
      <button type="button" 
        className={`${colors} leading-tight font-bold rounded-full text-xl w-[22vw] h-[10vh]`}>
        {children}
      </button>



    </>
  )
}

export default Button;
