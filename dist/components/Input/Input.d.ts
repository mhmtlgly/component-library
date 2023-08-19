import { FC, InputHTMLAttributes } from "react";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    name: string;
    error?: string;
}
declare const Input: FC<InputProps>;
export default Input;
