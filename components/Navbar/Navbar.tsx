import AppButton from "../common/AppButton/AppButton";
import Logo from "../common/Logo/Logo";
import MobileSidebar from "./MobileSidebar";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-20 app-width px-5">
      <Logo />
      <div className="hidden lg:block">
        <NavLinks />
      </div>
      <div className="hidden lg:block">
        <AppButton name="Talk to me" href="" style="navbar-btn" />
      </div>
      <div className="lg:hidden">
        <MobileSidebar />
      </div>
    </div>
  );
};

export default Navbar;
