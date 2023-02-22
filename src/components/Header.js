import headerMobile from "src/assets/bg-header-mobile.svg";
import headerDesktop from "src/assets/bg-header-desktop.svg";

const Header = ({ reference }) => {
  return (
    <header className="fixed z-10" ref={reference}>
      <img
        src={headerMobile}
        alt="header-mobile"
        className="w-screen bg-dark-cyan sm:hidden h-[150px] object-cover"
      />
      <img
        src={headerDesktop}
        alt="header-desktop"
        className="w-screen bg-dark-cyan hidden sm:block h-[150px] object-cover"
      />
    </header>
  );
};

export default Header;
