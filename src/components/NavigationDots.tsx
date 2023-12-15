import { navList } from "./Navbar/Navbar.js";
const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {navList.map((item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          className="app__navigation-dot"
          style={active === item ? { backgroundColor: "#313BAC" } : {}}
        ></a>
      ))}
    </div>
  );
};

export default NavigationDots;
