"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Button from "./Button";
import Image from "next/image";
import {
  PiWallFill,
  PiShoppingCartBold,
  PiWrenchFill,
  PiUserGearFill,
} from "react-icons/pi";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import Pretitle from "./Pretitle";

const serviceData = [
  {
    name: "Solar Installation",
    icon: <PiWallFill />,
    title: "Solar System Design & Installation",
    description:
      "Custom solar power system design and professional installation for residential, commercial, or industrial properties.",
    serviceList: [
      "Site Assessment",
      "Energy Audit",
      "System Sizing",
      "Mounting",
    ],
    thumbs: [
      { url: "/assets/img/services/thumb1.png" },
      { url: "/assets/img/services/thumb2.png" },
    ],
  },
  {
    name: "Solar Products",
    icon: <PiShoppingCartBold />,
    title:
      "Retail and wholesale of high-quality solar components and products.",
    description:
      "We offer a wide range of high-quality and variaties of solar products to meet your energy needs. Whether you're a homeowner, contractor, or reseller, we provide reliable products at competitive prices with expert guidance on choosing the right components.",
    serviceList: [
      "Inverters",
      "Batteries",
      "Solar Accessories",
      "Mounting Kits",
      "Solar-powered appliances",
    ],
    thumbs: [
      { url: "/assets/img/services/thumb1.png" },
      { url: "/assets/img/services/thumb2.png" },
    ],
  },
  {
    name: "Maintenance",
    icon: <PiWrenchFill />,
    title: "Maintenance & Support Services",
    description:
      "Ongoing monitoring, system checkups, repairs, and optimization to ensure peak performance.",
    serviceList: [
      "Panel Cleaning",
      "Diagnostics",
      "Inverter or battery replacement",
      "System Upgrades",
      "Performance Monitoring",
    ],
    thumbs: [
      { url: "/assets/img/services/thumb-2.jpg" },
      { url: "/assets/img/services/thumb-4.jpg" },
    ],
  },
  {
    name: "Consulting",
    icon: <PiUserGearFill />,
    title: "Energy Consulting & Project Development",
    description:
      "Our energy experts guide you through every phase of your solar journey—from idea to implementation.",
    serviceList: [
      "Feasibility Studies",
      "Cost Estimation",
      "Project Planning & Scheduling",
      "Regulatory Compliance",
      "Risk Management",
      "Vendor Coordination",
    ],
    thumbs: [
      { url: "/assets/img/services/thumb-4.jpg" },
      { url: "/assets/img/services/thumb-6.jpg" },
    ],
  },
];

const fadeinVariant = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.2, delay: 0.1 } },
};

const Services = () => {
  const [activeTab, setActiveTab] = useState("Solar Installation");
  return (
    <div className="pt-16 xl:pt-32 " id="services">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="text-center max-w-[540px] mx-auto mb-20"
        >
          <Pretitle text={"Our Services"} center />
          <h2 className="h2 mb-3">Solution We Provide</h2>
          <p className="text-lg mb-16 max-w-[480px]">
            We provide a wide range of high-quality Solar Installation services
            to meet your needs.
          </p>
        </motion.div>

        {/* tabs */}
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
        >
          <Tabs
            defaultValue="Solar Installation"
            onValueChange={(value) => setActiveTab(value)}
            className="flex flex-col lg:flex-row w-full gap-[30px]"
          >
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-[30px] h-full  rounded-none p-0 bg-transparent xl:w-[345px]">
              {serviceData.map((item) => (
                <TabsTrigger
                  key={item.name}
                  value={item.name}
                  className="w-full rounded-none h-[100px] flex items-center justify-center relative shadow-custom p-0 outline-none"
                >
                  <div
                    className={`w-[100px] h-[100px] flex items-center justify-center absolute left-0 ${
                      activeTab === item.name
                        ? "bg-primary text-white"
                        : "bg-accent text-primary"
                    }`}
                  >
                    <div className="text-4xl"> {item.icon}</div>
                  </div>
                  <div className="uppercase font-primary text-base font-semibold tracking-[.6px] w-[100px] ml-16">
                    {item.name}
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
            {/* tab content */}
            <div className="flex-1 bg-white shadow-custom h-[490px] p-[30px]">
              {serviceData.map((item) => (
                <TabsContent key={item.name} value={item.name} className="m-0">
                  <motion.div
                    variants={fadeinVariant}
                    initial="hidden"
                    whileInView={"show"}
                    exit={"hidden"}
                    className="flex flex-col md:flex-row gap-[30px]"
                  >
                    <div className="flex md:flex-col gap-5 xl:gap-[30px] ">
                      {item.thumbs.map((thumb, index) => (
                        <div
                          key={index}
                          className="relative w-[160px] xl:w-[200px] h-[170px] xl-[200px]"
                        >
                          <Image src={thumb.url} fill alt="" />
                        </div>
                      ))}
                    </div>
                    {/* text button */}
                    <div>
                      <div>
                        <h3 className="h3 mb-6">{item.title}</h3>
                        <p className="mb-10">{item.description}</p>

                        {/* service list */}
                        <ul className="grid grid-cols-2 gap-4 mb-12">
                          {item.serviceList.map((service, index) => {
                            return (
                              <li
                                key={index}
                                className="flex items-center gap-4"
                              >
                                <div className="w-[6px] h-[6px] bg-accent"></div>
                                <div className="capitalize font-medium text-primary">
                                  {service}
                                </div>
                              </li>
                            );
                          })}
                        </ul>

                        {/* button */}
                        <Button text={"See more"} />
                      </div>
                    </div>
                  </motion.div>
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
