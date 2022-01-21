import RestaurantPageHeader from "../../components/RestaurantPageHeader";
import { RiArrowRightSFill } from "react-icons/ri";
import { BiCheckCircle, BiXCircle } from "react-icons/bi";
import { MdOutlineContentCopy } from "react-icons/md";
import { RiDirectionFill } from "react-icons/ri";
import { detailStoreMock } from "../../mocks/data";

const overview = () => {
  return (
    <>
      <RestaurantPageHeader store={detailStoreMock.data} />
      <main className='container mt-5 flex gap-4'>
        <section className='flex flex-col grow gap-5'>
          {/* Menu */}
          <div className='flex justify-between items-centered mb-2'>
            <h3 className='font-semibold text-lg'>Menu</h3>
            <a href='' className='text-red-500 flex items-center'>
              See all menus
              <RiArrowRightSFill />
            </a>
          </div>
          <div className='grid grid-cols-4 gap-4'>
            {/* <Menu menuName='Beverages' />
            <Menu menuName='Beverages' />
            <Menu menuName='Beverages' /> */}
          </div>
          <div>
            <h3 className='font-semibold text-lg mb-2'>Average Cost</h3>
            <p>Rp 250.000,00- for two people (approx.)</p>
          </div>
          <div className=''>
            <h3 className='font-semibold text-lg mb-2'>More Info</h3>
            <div className='grid grid-cols-2'>
              <div className='flex items-center gap-2'>
                <BiCheckCircle className='fill-current text-green-500' />
                <p>Smoking</p>
              </div>
              <div className='flex items-center gap-2'>
                <BiXCircle className='fill-current text-red-500' />
                <p>Beer</p>
              </div>
              <div className='flex items-center gap-2'>
                <BiXCircle className='fill-current text-red-500' />
                <p>Outside food</p>
              </div>
            </div>
          </div>
        </section>
        <aside className='flex flex-col h-fit gap-5 border rounded-lg p-5 shadow shadow-gray-300'>
          <div className='flex flex-col'>
            <p className='font-semibold text-lg'>Call</p>
            <a href='' className='text-red-500'>
              +62-821-8888-7777
            </a>
            <a href='' className='text-red-500'>
              +62-821-8888-7777
            </a>
          </div>
          <div>
            <p className='font-semibold text-lg'>Direction</p>
            <div>Maps</div>
            <p>Jl. P.H.H. Mustofa No. 31, Surapati, Bandung</p>
            <div className='flex gap-4'>
              <div className='flex justify-center items-center gap-2 border px-2 rounded-lg'>
                <MdOutlineContentCopy />
                <button>Copy</button>
              </div>
              <div className='flex justify-center items-center gap-2 border px-2 py-1 rounded-lg'>
                <RiDirectionFill />
                <button>Direction</button>
              </div>
            </div>
          </div>
        </aside>
      </main>
    </>
  );
};

export default overview;
