import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'

const Header = ({ setMenuOpen, menuOpen }) => {
    return (
        <>
            <nav>
                <NavContent setMenuOpen={setMenuOpen} />
            </nav>
            <button className='navBtn' onClick={() => setMenuOpen(!menuOpen)}>
                <AiOutlineMenu />
            </button>
        </>
    )
};

export const HeaderPhone = ({ menuOpen, setMenuOpen }) => {
    return (
        <div className={`navPhone ${menuOpen ? "navPhoneComes" : ""}`}>
            <NavContent setMenuOpen={setMenuOpen} />
        </div>
    )
}


const NavContent = ({ setMenuOpen }) => {

    return (
        <>
            <h2>Nitin</h2>
            <div>
                <a onClick={() => setMenuOpen(false)} href="#home">Home</a>
                <a onClick={() => setMenuOpen(false)} href="#work">Work</a>
                <a onClick={() => setMenuOpen(false)} href="#timeline">Experience</a>
                <a onClick={() => setMenuOpen(false)} href="#services">Services</a>
                <a onClick={() => setMenuOpen(false)} href="https://www.canva.com/design/DAGxtU7fPt0/br8Yq547mAJcULKC0f49dQ/view?utm_content=DAGxtU7fPt0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hf59d8bf415" target='_blank' >Resume</a>
                <a onClick={() => setMenuOpen(false)} href="#contact">Contact</a>
            </div>
            <a href="mailto:nitinkumar94555206@gmail.com">
                <button>Email</button>
            </a>
        </>
    )
}

export default Header
