import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  colors: string;
};

const ButtonSmall = ({children, colors="bg-black hover:bg-blue-700 text-white"}: Props) => (
  <>
    <button className={`${colors} text-bold text-xl py-2.5 px-10 rounded-full`}>
      {children}
    </button>
  </>
)

export default ButtonSmall
