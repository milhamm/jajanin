import { MenuWithListMenu } from "../../types/store";
import MenuList from "../MenuList";

type MenuSectionProps = {
  menus: MenuWithListMenu;
};

const MenuSection = ({ menus }: MenuSectionProps) => {
  return (
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
        {menus.map((menu) => (
          <div className='flex flex-col gap-5' key={menu.id}>
            <p className='font-semibold text-lg'>{menu.menu_type}</p>
            {menu.list_menus.map((menu_item) => (
              <MenuList
                key={`${menu_item.id} ${menu_item.name}`}
                name={menu_item.name}
                description={menu_item.detail}
                price={menu_item.price}
                img={menu_item.image}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuSection;
