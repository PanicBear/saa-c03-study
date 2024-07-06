import { dropRight, join } from "lodash";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { memo, useEffect } from "react";
import { twMerge } from "tailwind-merge";

import { Nanum_Gothic } from "next/font/google";

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

const nanumGothic = Nanum_Gothic({ weight: "700", subsets: ["latin"] });

const Layout = ({ children }: LayoutProps) => {
  const pathname = usePathname();

  const upplerLink = join(dropRight(pathname.split("/")), "/");

  return (
    <main
      className={twMerge(
        "w-screen h-screen",
        "flex flex-col gap-2",
        nanumGothic.className
      )}
    >
      <nav
        className={twMerge(
          "fixed",
          "w-screen h-14",
          "p-2",
          "bg-white",
          "shadow-md"
        )}
      >
        <Link href={upplerLink}>
          <button
            className={twMerge(
              "p-2 rounded-md",
              upplerLink ? "hover:bg-blue-300 hover:text-white" : ""
            )}
          >
            {!!upplerLink ? "< 상위메뉴" : "최상위 메뉴입니다."}
          </button>
        </Link>
      </nav>
      <section className={twMerge("mt-14")}>{children}</section>
    </main>
  );
};

export default memo(Layout);
