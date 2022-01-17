type MenuProps = {
  menuName: string;
};

const Menu = ({ menuName }: MenuProps) => {
  return (
    <a href='' className=''>
      <div className='h-[218px] rounded-lg shadow shadow-gray-200'> </div>
      <p className='py-2 font-medium'>{menuName}</p>
    </a>
  );
};

export default Menu;
