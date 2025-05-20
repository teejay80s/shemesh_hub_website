import { RiChat1Line, RiMapPin2Line, RiSmartphoneFill } from "react-icons/ri";
import Form from "./Form";
import Socials from "./Socials";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const Contact = () => {
  return (
    <section className="pt-16 xl:pt-32" id="contact">
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="container mx-auto"
      >
        <div className="w-full xl:h-[730px] shadow-custom p-4 xl:p-8 xl:px-[90px] xl:py-[36px] border-t-4 border-accent">
          <div className="flex flex-col xl:flex-row h-full gap-[40px] xl:gap-[90px]">
            {/* info */}
            <div className="w-full xl:max-w-[380px] xl:pr-[70px] xl:border-r xl:border-border/40 h-[640px]">
              <h4 className="text-[26px] font-primary font-bold mb-6">
                Contact Us
              </h4>
              <p className="mb-9">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Obcaecati cum quae enim totam, corrupti mollitia repudiandae
                odio neque dolor, fugit autem atque repellendus ipsa cupiditate
                rerum amet.
              </p>
              {/* contact item */}
              <div className="flex flex-col gap-[40px] mb-16">
                <div className="flex items-start gap-[20px]">
                  <div>
                    <RiChat1Line className="text-[28px] text-accent" />
                  </div>
                  <div>
                    <h5 className="text-[22px] font-semibold font-primary leading-none mb-2">
                      Chat to us
                    </h5>
                    <p className="mb-4">Our friendly team is here to help</p>
                    <p className="font-semibold text-primary">
                      {" "}
                      contact@shemeshhub.com
                    </p>
                  </div>
                </div>

                {/* contact */}
                <div className="flex items-start gap-[20px]">
                  <div>
                    <RiMapPin2Line className="text-[28px] text-accent" />
                  </div>
                  <div>
                    <h5 className="text-[22px] font-semibold font-primary leading-none mb-2">
                      Office
                    </h5>
                    <p className="mb-4">Come and say hello at our office</p>
                    <p className="font-semibold text-primary">
                      {" "}
                      Mosobalaje Villa,142A Ayobo - Ipaja, Ipaja Lagos, Nigeria
                    </p>
                  </div>
                </div>

                {/* contact */}
                <div className="flex items-start gap-[20px]">
                  <div>
                    <RiSmartphoneFill className="text-[28px] text-accent" />
                  </div>
                  <div>
                    <h5 className="text-[22px] font-semibold font-primary leading-none mb-2">
                      Phone
                    </h5>
                    <p className="mb-4">Mon-Fri 8am - 5pm</p>
                    <p className="font-semibold text-primary">
                      {" "}
                      +2348157756913
                    </p>
                  </div>
                </div>

                <Socials
                  containerStyles={"flex gap-[40px]"}
                  iconStyles={"text-primary text-[20px]"}
                />
              </div>
            </div>
            {/* form */}
            <div className="flex-1">
              <h2 className="h2 mb-3"> Request A Quote</h2>
              <p className="mb-9">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                saepe perferendis ducimus ad ipsa, laudantium iste temporibus
                asperiores perspiciatis architecto modi, animi nesciunt ea
                itaque quasi natus?
              </p>
              <Form />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
