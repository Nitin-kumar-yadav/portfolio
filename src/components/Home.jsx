import React, { useRef } from 'react'
import { animate, motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs"
import logo from '../assets/logo.png'

const Home = () => {

    const clientCount = useRef(null);
    const projectCount = useRef(null);

    const animationClientCount = () => {
        animate(0, 100, {
            duration: 1,
            onUpdate: (v) => (clientCount.current.textContent = v.toFixed()),
        })
    }
    const animationProjectCount = () => {
        animate(0, 500, {
            duration: 1,
            onUpdate: (v) => (projectCount.current.textContent = v.toFixed()),
        })
    }


    const animation = {
        h1: {
            initial: {
                x: "-100%",
                opacity: 0,
            },
            whileInView: {
                x: 0,
                opacity: 1,
            },
        },
        button: {
            initial: {
                y: "-100%",
                opacity: 0,
            },
            whileInView: {
                y: 0,
                opacity: 1,
            },
        }
    }

    return (
        <div id='home' >
            <section>
                <div>
                    <motion.h1 {...animation.h1} >
                        Hi, I Am <br />  Nitin Kumar
                    </motion.h1>
                    <Typewriter options={{
                        strings: ["A Developer", "A Designer", "A Creator"],
                        autoStart: true,
                        loop: true,
                        cursor: "",
                        wrapperClassName: "typewriterpara",

                    }} />
                    <div>
                        <a href="mailto:nitinkumar94555206@gmail.com">
                            Hire Me
                        </a>
                        <a href="#work">
                            Projects <BsArrowUpRight />
                        </a>
                    </div>

                    <article>
                        <p>
                            +

                            <motion.span
                                whileInView={animationClientCount}
                                ref={clientCount}
                            ></motion.span>

                        </p>
                        <span>Client Worldwide</span>
                    </article>
                    <aside>
                        <article>
                            <p>
                                +

                                <motion.span
                                    ref={projectCount}
                                    whileInView={animationProjectCount}
                                >

                                </motion.span>

                            </p>
                            <span>Project Demo</span>
                        </article>
                        <article data-special>
                            <p>
                                Contact
                            </p>
                            <span>nitinkumar94555206@gmail.com</span>
                        </article>
                    </aside>
                </div>
            </section>
            <section>
                <img src={logo} alt="" />
            </section>
            <BsChevronDown />
        </div>
    )
}

export default Home