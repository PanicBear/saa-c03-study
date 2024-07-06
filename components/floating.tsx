import { memo } from "react";
import { twMerge } from "tailwind-merge";

interface FloatingProps {
  onClick: () => void;
}

const Floating = ({ onClick }: FloatingProps) => {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        "fixed bottom-4 right-4",
        "p-2 rounded-md",
        "bg-blue-300 text-white",
        "hover:bg-blue-500"
      )}
    >
      정답보기
    </button>
  );
};

export default memo(Floating);
