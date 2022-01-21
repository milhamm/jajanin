import RestaurantPageHeader from "../../components/RestaurantPageHeader";
import { RiArrowRightSFill } from "react-icons/ri";
import { BiCheckCircle, BiXCircle } from "react-icons/bi";
import { detailStoreMock } from "../../mocks/data";
import Menu from "../../components/Menu";
import Maps from "../../components/Maps";

const overview = () => {
  return (
    <>
      <RestaurantPageHeader store={detailStoreMock.data} />
      <main className='container mt-5 flex gap-4 mobile:flex-col'>
        <section className='flex flex-col grow gap-5'>
          {/* Menu */}
          <div className='flex justify-between items-centered mb-2'>
            <h3 className='font-semibold text-lg'>Menu</h3>
            <a href='' className='text-red-500 flex items-center'>
              See all menus
              <RiArrowRightSFill />
            </a>
          </div>
          <div className='grid grid-cols-4 gap-4 mobile:grid-cols-2'>
            {/* <Menu menuName='Beverages' />
            <Menu menuName='Beverages' />
            <Menu menuName='Beverages' /> */}
            {/* <Menu menu={detailStoreMock?.data?.menus[0]} /> */}
            {detailStoreMock.data?.menus.map((menu, index) => {
              return <Menu menu={menu} key={index} />;
            })}
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
        <aside className='flex flex-col h-fit gap-5 border rounded-lg p-5 shadow shadow-gray-300 mobile:mb-5'>
          <div className='flex flex-col mobile:text-sm'>
            <p className='font-semibold text-lg mobile:text-base'>Call</p>
            <a href='' className='text-red-500'>
              +62-821-8888-7777
            </a>
            <a href='' className='text-red-500'>
              +62-821-8888-7777
            </a>
          </div>
          <Maps
            lat={detailStoreMock.data?.latitude as number}
            long={detailStoreMock.data?.longitude as number}
            address={detailStoreMock.data?.address as string}
          />
        </aside>
      </main>
    </>
  );
};

export default overview;
