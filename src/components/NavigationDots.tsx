import { navList } from '../constants/navList.ts';
const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {navList.map((item: string, index: number) => (
        <a
          href={`#${item}`}
          key={item + index}
          className="app__navigation-dot"
          style={active === item ? { backgroundColor: '#313BAC' } : {}}></a>
      ))}
    </div>
  );
};

export default NavigationDots;
