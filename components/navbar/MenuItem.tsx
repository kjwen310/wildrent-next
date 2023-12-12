'use client';

import { FC } from 'react';

interface MenuItemProps {
  onClick: () => void,
  label: string,
}

const MenuItem: FC<MenuItemProps> = ({ onClick, label }) => {
  return (
    <div
      onClick={onClick}
      className="
        font-semibold
        transition
        px-4
        py-3
        hover:bg-neutral-100
      "
    >
      {label}
    </div>
  );
}

export default MenuItem;
