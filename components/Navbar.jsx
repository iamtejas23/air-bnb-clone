import React from 'react';
import styles from '../styles/Navbar.module.css';
import Image from 'next/image';
import logo from '../public/assets/logo.png';
import { TfiWorld } from "react-icons/tfi";
import { IoIosMenu } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import Link from 'next/link';


const Navbar = () => {
    return (
        <div className={styles.Navbar}>
                <div className={styles.logo}>
                <Image src={logo} alt="" />
                </div>

                <div className={styles.links}>
                    <Link href="#">Stays</Link>
                    <Link href="/about">Experiences</Link>
                    <Link href="/services">Online Experiences</Link>
                    </div>  

                <div className={styles.lastnav}>
                    <Link className={styles.first} href="/contact">Airbnb your home</Link>
                    <Link className={styles.second}  href="/login"><TfiWorld /></Link>
                    <Link className={styles.third} href="/signup"><IoIosMenu size={24} /> <FaUserCircle size={24} /></Link>
                </div>

        </div>
    )
}

export default Navbar;