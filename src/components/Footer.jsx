import React from 'react'
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiOutlineArrowUp } from 'react-icons/ai'


const Footer = () => {
    return (
        <footer>
            <div>
                <img src="https://avatars.githubusercontent.com/u/2508652" alt="Founder" />
                <h2>
                    Nitin Kumar
                </h2>
                <p>Motivation is temporary, but disipline last forever</p>
            </div>
            <aside>
                <h2>Socal Media</h2>
                <article>
                    <a href="https://www.instagram.com/nitin_kumar_0201" target='_black'><AiFillInstagram /></a>
                    <a href="https://www.facebook.com/profile.php?id=100074141270094" target='_black'><AiFillFacebook /></a>
                    <a href="https://www.github.com/Nitin-kumar-yadav" target='_black'><AiFillGithub /></a>
                </article>
            </aside>
            <a href="#home"><AiOutlineArrowUp /> </a>
        </footer>
    )
}

export default Footer