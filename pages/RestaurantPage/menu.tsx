import MenuList from "../../components/MenuList";
import RestaurantPageHeader from "../../components/RestaurantPageHeader";
import { detailStoreMock } from "../../mocks/data";

const menu = () => {
  return (
    <>
      <RestaurantPageHeader store={detailStoreMock.data} />
      <main className='container mt-5 flex gap-4'>
        <section className='w-full'>
          <div className='flex justify-between items-center'>
            <h3 className='font-semibold mobile:text-base laptop:text-lg'>
              Restaurant Menu
            </h3>
            <button className='text-red-500 mobile:text-xs laptop:text-base border border-red-500 font-black hover:bg-red-500 hover:text-white hover:border-transparent px-2 py-1 rounded-lg'>
              Add menu +
            </button>
          </div>
          <div className='grid mt-10 mb-10 gap-4 mobile:grid-cols-1 laptop:grid-cols-2 desktop:grid-cols-3'>
            <div className='flex flex-col gap-5'>
              <p className='font-semibold text-lg'>Makanan</p>
              <MenuList />
              <MenuList />
              <MenuList />
            </div>
            <div className='flex flex-col gap-5'>
              <p className='font-semibold text-lg'>Minuman</p>
              <MenuList />
              <MenuList />
              <MenuList />
            </div>
            <div className='flex flex-col gap-5'>
              <p className='font-semibold text-lg'>Minuman</p>
              <MenuList />
              <MenuList />
              <MenuList />
            </div>
            <div className='flex flex-col gap-5'>
              <p className='font-semibold text-lg'>Minuman</p>
              <MenuList />
              <MenuList />
              <MenuList />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default menu;
