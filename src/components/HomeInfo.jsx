import React from 'react'
import { Typewriter } from "react-simple-typewriter";
import { motion } from "motion/react";

const HomeInfo = () => {
  return (
    <>
    <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="     "
      >
        <div className="flex justify-center ">
          <h1 className="text-7xl font-custom text-violet-800">
            <Typewriter
              cursor={true}
              loop={false}
              words={[
                "Frontend developer.",
                "React & Tailwind lover.",
                "UX-focused builder.",
                "AI meets frontend.",
              ]}
              cursorBlinking={true}
            />
          </h1>
        </div>
        <div className="flex  flex-wrap justify-center p-2 mt-5">
          <div className="">
            <img
              className="rounded-[50%] w-[350px] h-[350px] object-cover shadow-2xl shadow-black  border-0"
              src="https://res.cloudinary.com/djcbpkxwh/image/upload/v1749816405/profile_2_hubz22.jpg"
            ></img>
          </div>
          <div className="w-[60%] flex items-center pl-8 m-5">
            <div className=" ">
              <div className="">
                <p className="font-custom text-xl">
                  <span className="block text-4xl">
                    👋 Hey there! I'm Surya kiran
                  </span>
                  I'm a passionate Frontend Developer with a strong foundation
                  in React.js, JavaScript, and Tailwind CSS. I enjoy building
                  clean, responsive, and interactive user interfaces that solve
                  real problems. I'm currently exploring AI-integrated web apps
                  and enhancing my UI animations using Framer Motion. 
                  <span className="block">I'm
                  actively looking for internship opportunities where I can
                  contribute, learn, and grow alongside experienced developers.
                  My goal is to be part of a team that values creativity,
                  performance, and user-centric design.</span>
                </p>
              </div>
              
            </div>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default HomeInfo
