import React from 'react'
import './loader.scss'
import { fade } from 'helpers/animations'
import { motion } from 'framer-motion'

export default function Loader() {
  return (
    <motion.div initial='hidden' animate='visible' variants={fade}></motion.div>
  )
}
