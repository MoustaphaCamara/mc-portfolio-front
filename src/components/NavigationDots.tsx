import { useTranslation } from 'react-i18next';
import { $SpecialObject } from 'i18next/typescript/helpers';

interface NavigationDotsProps {
  active: string;
}

const NavigationDots = ({ active }: NavigationDotsProps) => {
  const { i18n } = useTranslation();
  const navList: $SpecialObject = i18n.t('navList', { returnObjects:true });
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
