import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import logo from '../../assets/images/logo.png';
import styles from './NavBar.module.scss';
import { MdClose, MdMenu } from "react-icons/md";
import { FaRegUserCircle } from 'react-icons/fa';
const NavBar = () => {
    let location = useLocation();
    const [showBackground, setShowBackground] = useState(false)
    const [open, setOpen] = useState(false)
    const [activeTab, setActiveTab] = useState("home");
    const data = [
        { title: 'Home', id: "home" },
        { title: 'About us', id: "about-us" },
        { title: 'Services', id: "services" },
        // { title: 'Blog', id: "blog" },
        // { title: 'Help & Support', id: "help-support" },
    ]

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 2; // Adjust for middle of the screen

            // Check each section and set the active tab
            data.forEach((item) => {
                const section = document.getElementById(item.id);
                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;

                    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                        setActiveTab(item.id);
                    }
                }
            });

            // Background change on scroll
            // if (window.scrollY > 50) {
            //     setShowBackground(true);
            // } else {
            //     setShowBackground(false);
            // }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [data]);


    console.log({ open })
    return (
        // <div className={`${styles.navContainer} ${showBackground ? styles.navBackground : ''} `}>
        <div className={styles.navContainer}>
            <div className="ccontainer">
                <div>
                    <a href="#home" className={styles.logo}>
                        <img src={logo} alt="logo" />
                    </a>
                </div>
                <button className={styles.menuBtn} onClick={(p) => setOpen(p => !p)}><MdMenu /></button>
                {/* <div className={styles.navbar} style={{ transform: open ? 'translateX(0px) ' : 'translateX(100%)' }}> */}
                <div className={`${styles.navbar} ${open ? styles.open : ''}`}>
                    <div className={styles.closeBtn} onClick={() => setOpen(false)}>
                        <span><MdClose /></span>
                    </div>
                    <div className={styles.navTabs}>
                        {data.map((item) => {
                            return (
                                <a
                                    key={item.id}
                                    href={`#${item.id}`}
                                    className={`${styles.links} ${activeTab === item.id ? styles.active : ''}`}
                                >
                                    {item.title}
                                </a>
                            );
                        })}
                    </div>
                    {/* <div className={styles.usericon}>
                        <FaRegUserCircle />
                    </div> */}
                </div>
            </div>
        </div >
    )
}

export default NavBar;
