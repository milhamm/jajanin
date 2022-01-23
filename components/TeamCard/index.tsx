import Image from "next/image";

type TeamCardProps = {
  teamSourceImage: string;
  teamPersonName: string;
  teamPersonPosition: string;
};

const TeamCard = ({
  teamSourceImage,
  teamPersonName,
  teamPersonPosition,
}: TeamCardProps) => {
  return (
    <>
      <div className='w-[280px] h-[330px] rounded-lg flex flex-col gap-3 items-center justify-center shadow shadow-gray-300'>
        <div className='w-[180px] h-[200px] bg-white rounded-lg relative'>
          <Image
            src={teamSourceImage}
            objectFit='cover'
            layout='fill'
            alt='teamCard'
          />
        </div>
        <div className='flex flex-col items-center'>
          <h3 className='font-bold text-xl text-red-500'>{teamPersonName}</h3>
          <h6 className='font-bold text-base text-[#949494]'>
            {teamPersonPosition}
          </h6>
        </div>
      </div>
    </>
  );
};

export default TeamCard;
