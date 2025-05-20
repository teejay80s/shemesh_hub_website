import { motion } from "framer-motion";
import Button from "./Button";
import { fadeIn } from "@/variants";

const Hero = () => {
  return (
    <section className="h-[80vh] relative overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/assets/video/shimesh_vid2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-l from-black/0 via-black/50 to-black/70 z-10"></div>

      {/* Content */}
      <div className="container mx-auto h-full flex items-center relative z-20">
        <div className="text-white text-center xl:text-left mx-auto xl:mx-0 flex flex-col items-center xl:items-start max-w-[608px]">
          <motion.h1
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.8 }}
            className="h1 text-white mb-4"
          >
            <span className="text-accent"> Sun</span> Powered Solutions for
            Everyone
          </motion.h1>
          <motion.p
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.8 }}
            className="text-white mb-9"
          >
            From concept to completion, we ensure every detail is optimized for
            strength and endurance, creating solutions that inspire confidence
            and stand firm for years.
          </motion.p>
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.8 }}
          >
            <Button text="See our work" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
