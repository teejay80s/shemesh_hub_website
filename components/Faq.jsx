import FaqItem from "./FaqItem";
import Pretitle from "./Pretitle";
import { motion, delay } from "framer-motion";
import { fadeIn } from "@/variants";

const faqItemData = [
  {
    title: "How long does it take to install a solar system?",
    description:
      "Installation typically takes 1 to 3 days, depending on system size and site conditions.",
  },
  {
    title: "What is the lifespan of a solar panel?",
    description:
      "Most solar panels last 25 to 30 years with proper maintenance.",
  },
  {
    title: "Do solar panels work during cloudy or rainy days?",
    description:
      "Yes, they still produce energy, though at reduced efficiency compared to sunny days.",
  },
  {
    title: "What maintenance is required for a solar system?",
    description:
      "Solar systems require minimal maintenance, mainly panel cleaning and occasional system checks.",
  },
  {
    title: "Do you offer payment plans or installments?",
    description:
      "Yes, we offer flexible 'Buy Now, Pay Later' plans, allowing you to pay in convenient monthly installments.",
  },
];

//animation varients for Faq items
const faqItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.1, duration: 0.3 },
  }),
};

const Faq = () => {
  return (
    <section className="pt-16 xl:pt-32">
      <div className="container">
        {/* text */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="text-center max-w-[540px] mx-auto xl:mb-20"
        >
          <Pretitle text={"Faq"} center />
          <h2 className="h2 mb-3">Got A Question? We've Got You Covered</h2>
          <p className="mb-11 max-w-[480px] mx-auto">
            From project planning to final touches, we answered the most common
            question to help you make informative decisions.
          </p>
        </motion.div>

        {/* faq items */}

        <ul className="w-full flex flex-col">
          {faqItemData.map((item, index) => (
            <motion.li
              variants={faqItemVariants}
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: false, amount: 0.8 }}
              custom={index}
              key={index}
            >
              <FaqItem title={item.title} description={item.description} />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Faq;
