import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

interface PropType
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  size?: "small" | "medium" | "large";
  color?: "white" | "black";
  children?: ReactNode;
}

export default function IconButton({size="medium",color="white",...props}:PropType){
  return(
    <button {...props}>
      
    </button>
  )
}