import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import { Stores } from "../../pages/api/stores";
import Link from "next/link";

type CollectionCardProps = {
  store: Stores;
};

const CollectionCard = ({ store }: CollectionCardProps) => {
  return (
    <div className='w-full rounded-lg p-4 relative mobile:h-[225px] desktop:h-[340px] shadow shadow-gray-300 relative'>
      <Link href={`/store/${store.slug}`}>
        <a>
          <div className='flex flex-col justify-end h-full text-white z-90 w-full h-full absolute p-4 inset-0 z-30 bg-zomato-bg rounded-lg  '>
            <h3 className='mobile:text-sm laptop:text-base'>
              {store.store_name}
            </h3>
            <div className='flex'>
              <p className='mobile:text-xs laptop:text-sm'>Visit me </p>
              <button>
                <IoIosArrowForward />
              </button>
            </div>
          </div>
        </a>
      </Link>
      <div className='absolute w-full h-full inset-0 z-20 rounded-lg'>
        <Image
          className='rounded-lg'
          src={store.photos[0].photos}
          layout='fill'
          objectFit='cover'
          alt={store.store_name}
        />
      </div>
    </div>
  );
};

export default CollectionCard;
