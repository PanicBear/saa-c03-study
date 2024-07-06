import Link from "next/link";
import { usePathname } from "next/navigation";
import { memo } from "react";

interface LinkItemProps {
  url: string | number;
  label: string;
}

const LinkItem = ({ url, label }: LinkItemProps) => {
  const pathname = usePathname();

  return (
    <Link href={`${pathname}/${url}`} passHref>
      <li>{label}</li>
    </Link>
  );
};

export default memo(LinkItem);
