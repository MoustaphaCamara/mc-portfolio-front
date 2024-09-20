import { navList } from '../constants/navList.ts';

interface NavigationDotsProps {
  active: string;
}

const NavigationDots = ({ active }: NavigationDotsProps) => {
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
