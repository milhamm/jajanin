import { BiCheckCircle } from "react-icons/bi";
import { RiArrowRightSFill } from "react-icons/ri";
import { currencyFormat } from "../../helper/currencyFormat";
import { MenuWithListMenu } from "../../types/store";
import MenuGrid from "../MenuGrid";
import SideInfo from "../SideInfo";

type OverviewSectionProps = {
  menus: MenuWithListMenu;
  avg: number;
  more_info: string;
  phone: string;
  address: string;
  lat: number;
  long: number;
};

const OverviewSection = ({
  phone,
  address,
  lat,
  long,
  menus,
  avg,
  more_info,
}: OverviewSectionProps) => {
  return (
    <main className='w-full mt-5 flex gap-8 mobile:flex-col laptop:flex-row laptop:mb-5'>
      <section className='flex flex-col grow gap-5'>
        <div className='flex justify-between items-centered mb-2'>
          <h3 className='font-semibold text-lg'>Menu</h3>
          <a href='' className='text-red-500 flex items-center'>
            See all menus
            <RiArrowRightSFill />
          </a>
        </div>
        <MenuGrid menus={menus} />
        <div>
          <h3 className='font-semibold text-lg mb-2'>Average Cost</h3>
          <p>{currencyFormat(avg)} (approx.)</p>
        </div>
        <div className=''>
          <h3 className='font-semibold text-lg mb-2'>More Info</h3>
          <div className='grid grid-cols-2'>
            {more_info.split(",").map((item) => (
              <div className='flex items-center gap-2' key={item}>
                <BiCheckCircle className='fill-current text-green-500' />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <SideInfo phone={phone} address={address} lat={lat} long={long} />
    </main>
  );
};

export default OverviewSection;
