import React from 'react';
import styles from '../styles/Navbar.module.css';
import Image from 'next/image';
import logo from '../public/assets/logo.png';
import { TfiWorld } from "react-icons/tfi";
import { IoIosMenu } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";


const Navbar = () => {
    return (
        <div className={styles.Navbar}>
                <div className={styles.logo}>
                <Image src={logo} alt="" />
                </div>

                <div className={styles.links}>
                    <a href="#">Stays</a>
                    <a href="/about">Experiences</a>
                    <a href="/services">Online Experiences</a>
                    </div>  

                <div className={styles.lastnav}>
                    <a className={styles.first} href="/contact">Airbnb your home</a>
                    <a className={styles.second}  href="/login"><TfiWorld /></a>
                    <a className={styles.third} href="/signup"><IoIosMenu size={24} /> <FaUserCircle size={24} /></a>
                </div>

        </div>
    )
}

export default Navbar;