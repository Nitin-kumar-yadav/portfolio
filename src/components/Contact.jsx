import React, { useState } from 'react'
import vg from '../assets/vg.png'
import toast from 'react-hot-toast'
import { motion } from 'framer-motion'
import { addDoc, collection } from 'firebase/firestore'
import { db } from "../firebase.js"

const Contact = () => {

    const animation = {
        form: {
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
            transition: {
                delay: 0.5,
            },
        },
    };

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [disableBtn, setDisableBtn] = useState(false);

    const submitHandler = async (e) => {
        e.preventDefault();
        setDisableBtn(true);
        try {
            await addDoc(collection(db, "contact"), {
                name,
                email,
                message,
            });
            setName("")
            setEmail("")
            setMessage("")
            toast.success("Message Sent Successfully")
            setDisableBtn(false);
        } catch (error) {
            toast.error("Error")
            console.error(error)
            setDisableBtn(false);
        }

    }

    return (
        <div id="contact">
            <section>
                <motion.form {...animation.form}>
                    <h2>Contact Me</h2>
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Name...' required />
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email...' required />
                    <input value={message} onChange={(e) => setMessage(e.target.value)} type="text" placeholder='Message...' required />

                    <motion.button className={disableBtn ? "disableBtn" : ""} disabled={disableBtn} {...animation.button} onClick={submitHandler} type='submit' >Submit</motion.button>
                </motion.form>
            </section>
            <aside>
                <img src={vg} alt="user" />
            </aside>
        </div>
    )
}

export default Contact