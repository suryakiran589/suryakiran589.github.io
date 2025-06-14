import React from "react";
import { Link } from "react-router";
import { motion } from "motion/react";

const Header = () => {
  return (
    <motion.div className="fixed z-20 w-full top-0 flex justify-between pt-5 px-3 text-center bg-gradient-to-b from-slate-300"
    initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
    >
      <div className="flex ">
        <p className=" text-3xl font-custom">SK</p>
        <a className="px-2" href="https://github.com/suryakiran589/" target="_blank"><img className="w-8 " src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"></img></a>
        <a className="" href="https://www.linkedin.com/in/surya-kiran-kommoju-307a30258/" target="_blank"><img className="w-8" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"></img></a>
      </div>
      <div className="flex">
        <Link
          to="/"
          className="p-1 px-3 hover:text-white hover:bg-black hover:rounded-xl hover:transition-all"
        >
          Home
        </Link>
        <Link
          to="/projects"
          className="p-1 px-3 hover:text-white hover:bg-black hover:rounded-xl"
        >
          projects
        </Link>
        <Link
          to=""
          className="p-1 px-3 hover:text-white hover:bg-black hover:rounded-xl"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="p-1 px-3 hover:text-white hover:bg-black hover:rounded-xl"
        >
          Contact
        </Link>
      </div>
      <div>
        <button>Resume</button>
      </div>
    </motion.div>
  );
};

export default Header;
