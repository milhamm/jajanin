import { Menu } from "@prisma/client";
import Image from "next/image";

type MenuProps = {
  menu: Menu;
};

const Menu = ({ menu }: MenuProps) => {
  return (
    <a href='' className=''>
      <div className='w-full h-[218px] rounded-lg shadow shadow-gray-200 relative'>
        <Image
          className='rounded'
          src={menu.image}
          alt={menu.menu_type}
          layout='fill'
          objectFit='cover'
        />
      </div>
      <p className='py-2 font-medium'>{menu.menu_type}</p>
    </a>
  );
};

export default Menu;
