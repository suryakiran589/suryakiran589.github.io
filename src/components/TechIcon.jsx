import React from 'react'
import { motion } from 'motion/react'

const TechIcon = ({name,img_url,index}) => {
  return (
    <>
        <motion.img initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }} alt='' src={img_url} className='w-20 '></motion.img>
    </>
  )
}

export default TechIcon
