import { IoIosArrowForward } from "react-icons/io";

type CollectionCardProps = {
  collectionName: string;
  totalCollection: number;
};

const CollectionCard = ({
  collectionName,
  totalCollection,
}: CollectionCardProps) => {
  return (
    <a href=''>
      <div className='w-full bg-blue-300 rounded-lg p-4 relative mobile:h-[225px] desktop:h-[340px]'>
        <div className='flex flex-col justify-end h-full text-white z-90'>
          <h3 className='mobile:text-sm laptop:text-base'>{collectionName}</h3>
          <div className='flex'>
            <p className='mobile:text-xs laptop:text-sm'>
              {totalCollection} Places
            </p>
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
