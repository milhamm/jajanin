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
      <div className='w-full h-[340px] bg-blue-500 rounded-lg p-4'>
        <div className='flex flex-col justify-end h-full text-white'>
          <h3>{collectionName}</h3>
          <div className='flex'>
            <p>{totalCollection} Places</p>
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
