"use client";

import { IconType } from "react-icons";
import clsx from "clsx";
import Link from "next/link";

interface MobileItemProps {
  label: string;
  icon: IconType;
  href: string;
  onClick?: () => void;
  active?: boolean;
}

const MobileItem: React.FC<MobileItemProps> = ({
  label,
  icon: Icon,
  href,
  onClick,
  active,
}) => {
  const handleClick = () => {
    if (onClick) {
      return onClick();
    }
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={clsx(
        `
            group
            flex
            gap-x-3
            w-full
            p-4
            justify-center
            flex-sm
            leading-6
            font-semibold
            text-gray-500  
            hover:text-black
            hover:bg-gray-100
        `,
        active && "bg-gray-100 text-black"
      )}
    >
      <Icon className="h-6 w-6 shrink-0" />
    </Link>
  );
};

export default MobileItem;
