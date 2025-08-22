import ConnectMe from "./ConnectMe";
import Links from "./Links";
import { footerLinks } from "./data";

const Footer = () => {
  return (
    <div className="bg-app-projectBg rounded-2xl p-5 lg:p-10">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
        <div className="col-span-2">
          <ConnectMe />
        </div>
        <Links data={footerLinks[0]} />
        <Links data={footerLinks[1]} />
        <Links data={footerLinks[2]} />
      </div>
      <div className="flex items-center justify-center py-10 lg:py-5">
        <span className="name-title text-[80px] lg:text-[350px] uppercase text-white">
          mohamed sanjeed
        </span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-white text-sm">
          &copy; copyright @{new Date().getFullYear()}
        </span>
        <span className="text-white text-sm capitalize">
          website MadeBySanjeed
        </span>
      </div>
    </div>
  );
};

export default Footer;
