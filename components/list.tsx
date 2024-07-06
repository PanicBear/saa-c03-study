import { HTMLAttributes, memo } from "react";
import { twMerge } from "tailwind-merge";

interface ListProps extends HTMLAttributes<HTMLUListElement> {
  children: JSX.Element[] | JSX.Element;
}

const List = ({ children, ...props }: ListProps) => {
  return (
    <ul
      {...props}
      className={twMerge(
        "p-4 pb-6",
        "flex flex-col justify-start items-start gap-2",
        "[&>*]:p-2 [&>*]:rounded-md",
        "[&>*:hover]:bg-blue-300 [&>*:hover]:text-white"
      )}
    >
      {children}
    </ul>
  );
};

export default memo(List);
