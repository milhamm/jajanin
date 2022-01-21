import { IoIosArrowForward } from "react-icons/io";

type CollectionCardProps = {
  collectionName: string;
};

const CollectionCard = ({ collectionName }: CollectionCardProps) => {
  return (
    <a href=''>
      <div className='w-full bg-zomato-bg rounded-lg p-4 relative mobile:h-[225px] desktop:h-[340px] shadow shadow-gray-300 relative'>
        <div className='flex flex-col justify-end h-full text-white z-90'>
          <h3 className='mobile:text-sm laptop:text-base'>{collectionName}</h3>
          <div className='flex'>
            <p className='mobile:text-xs laptop:text-sm'>Visit me </p>
            <button>
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
    </a>
  );
};

export default CollectionCard;
