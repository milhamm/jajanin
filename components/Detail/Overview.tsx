import { BiCheckCircle } from "react-icons/bi";
import { RiArrowRightSFill } from "react-icons/ri";
import { currencyFormat } from "../../helper/currencyFormat";
import { MenuWithListMenu } from "../../types/store";
import MenuGrid from "../MenuGrid";

type OverviewSectionProps = {
  menus: MenuWithListMenu;
  avg: number;
  more_info: string;
};

const OverviewSection = ({ menus, avg, more_info }: OverviewSectionProps) => {
  return (
    <>
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
    </>
  );
};

export default OverviewSection;
