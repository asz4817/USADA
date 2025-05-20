import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const ButtonSmall = ({children}: Props) => (
  <>
    <button className="bg-black hover:bg-blue-700 text-white text-bold text-xl py-2.5 px-10 rounded-full">
      {children}
    </button>
  </>
)

export default ButtonSmall
