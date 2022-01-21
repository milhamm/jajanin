import { MenuWithListMenu } from "../../types/store";
import Menu from "../Menu";

type MenuGridProps = {
  menus: MenuWithListMenu;
};

const MenuGrid = ({ menus }: MenuGridProps) => {
  return (
    <div className='grid grid-cols-4 gap-4 mobile:grid-cols-2'>
      {menus.map((menu, index) => {
        return <Menu menu={menu} key={index} />;
      })}
    </div>
  );
};

export default MenuGrid;
