import { currencyFormat } from "../../helper/currencyFormat";
import Image from "next/image";

type MenuListProps = {
  name: string;
  description: string;
  price: number;
  img?: string;
};

const MenuList = ({ name, description, price, img }: MenuListProps) => {
  return (
    <>
      <div className='flex gap-4'>
        <div className='w-[125px] h-[125px] bg-gray-200  relative'>
          {img ? (
            <Image
              src={img}
              layout='fill'
              className='rounded-lg'
              objectFit='cover'
              alt={name}
            />
          ) : (
            "No Image"
          )}
        </div>
        <div>
          <p className='font-extrabold'>{name}</p>
          <p className='text-sm'>{description}</p>
          <p className='text-sm'>{currencyFormat(price)}</p>
        </div>
      </div>
    </>
  );
};

export default MenuList;
