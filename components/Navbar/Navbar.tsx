import AppButton from "../common/AppButton/AppButton";
import MobileSidebar from "./MobileSidebar";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-20 app-width px-5">
      <p className="font-extrabold text-3xl text-white">sanjeed.</p>
      <div className="hidden lg:block">
        <NavLinks />
      </div>
      <div className="hidden lg:block">
        <AppButton name="Talk to me" href="" style="normal-btn" />
      </div>
      <div className="lg:hidden">
        <MobileSidebar />
      </div>
    </div>
  );
};

export default Navbar;
