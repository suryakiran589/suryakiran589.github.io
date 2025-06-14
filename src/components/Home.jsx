import React from "react";
import Header from "./Header";
import { techDetails } from "../utils/constants";
import TechIcon from "./TechIcon";
import { motion } from "motion/react";
import HomeInfo from "./HomeInfo";

const Home = () => {
  return (
    <div className=" min-h-screen ">
      <Header />
      <div className="fixed -z-20 h-screen w-screen bg-[url('https://res.cloudinary.com/djcbpkxwh/image/upload/v1749905301/coolbackgrounds-particles-filigree_t9byi5.png')] bg-no-repeat bg-cover bg-center blur-sm">
        {/* <img className="" src="https://res.cloudinary.com/djcbpkxwh/image/upload/v1749905301/coolbackgrounds-particles-filigree_t9byi5.png" alt="" /> */}
      </div>
      <div className="w-screen h-[40vw] flex items-center">

      <HomeInfo/>
      </div>
      <motion.div  className="flex justify-evenly">
                {techDetails.map((tech,index) => (
                  <TechIcon key={tech.name} index={index} img_url={tech.img_url} />
                ))}
              </motion.div>
    </div>
  );
};

export default Home;
