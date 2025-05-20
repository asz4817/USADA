import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
const Button = ({children}: Props) => {
  return (
    <>
      <button type="button" 
        className="leading-tight text-white bg-black font-bold rounded-full text-xl w-[22vw] h-[10vh] dark:bg-blue-600">
        {children}
      </button>



    </>
  )
}

export default Button;
