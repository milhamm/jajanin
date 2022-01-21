import Maps from "../Maps";

type SideInfoProps = {
  phone: string;
  address: string;
  lat: number;
  long: number;
};

const SideInfo = ({ phone, address, lat, long }: SideInfoProps) => {
  return (
    <aside className='flex flex-col h-fit gap-5 border rounded-lg p-5 shadow shadow-gray-300 mobile:w-full laptop:w-[340px]'>
      <p className='font-semibold text-lg'>Call</p>
      <a href='' className='text-red-500'>
        {phone}
      </a>
      <Maps address={address} lat={lat} long={long} />
    </aside>
  );
};

export default SideInfo;
