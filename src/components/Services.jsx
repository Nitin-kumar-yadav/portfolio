import React from 'react'
import { motion } from 'framer-motion'
import { AiFillIeCircle, AiFillAndroid, AiFillWindows } from 'react-icons/ai'

const Services = () => {

    const animations = {
        whileInView: {
            x: 0,
            y: 0,
            opacity: 1
        },
        one: {
            opacity: 0,
            x: "-100%"
        },

        towAndthree: {
            opacity: 0,
            y: "-100%"
        },
        four: {
            opacity: 0,
            x: "100%"
        },
    }

    return (
        <div id='services'>
            <h2>Services</h2>
            <section>
                <motion.div className='serviceBox1' whileInView={animations.whileInView} initial={animations.one} >
                    <h3>5+</h3>
                    <p>Year Experience</p>
                </motion.div>
                <motion.div className='serviceBox2' whileInView={animations.whileInView} initial={animations.towAndthree} >
                    <AiFillIeCircle />
                    <span>Web Development</span>
                </motion.div>
                <motion.div className='serviceBox3' whileInView={animations.whileInView} transition={{
                    delay: 0.2
                }} initial={animations.towAndthree} >
                    <AiFillAndroid />
                    <span>App Development</span>
                </motion.div>
                <motion.div className='serviceBox4' whileInView={animations.whileInView} initial={animations.four} >
                    <AiFillWindows />
                    <span>Desktop Development</span>
                </motion.div>
            </section>
        </div>
    )
}

export default Services