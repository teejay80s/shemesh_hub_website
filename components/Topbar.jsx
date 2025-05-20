import { RiPhoneFill, RiMailFill } from "react-icons/ri";
import Socials from "./Socials";

const Topbar = () => {
  return (
    <section
      className="py-4 xl:h-16 xl:py-0 bg-gradient-to-t from-[rgb(243,83,0)] to-[#f35900da] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 ">
          <div className="hidden xl:flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary text-white flex items-center justify-center">
                <RiPhoneFill />
              </div>
              <p className="font-medium text-primary">+2348157756913</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary text-white flex items-center justify-center">
                <RiMailFill />
              </div>
              <p className="font-medium text-primary">sales@shemeshhub.com</p>
            </div>
          </div>
          <Socials
            containerStyles="flex item-center gap-8 mx-auto xl:mx-0"
            iconStyles="text-primary"
          />
        </div>
      </div>
    </section>
  );
};

export default Topbar;
