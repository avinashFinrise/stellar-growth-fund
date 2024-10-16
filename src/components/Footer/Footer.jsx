import React from 'react'
import styles from './Footer.module.scss'
import { NavLink } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaPinterestP } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';


const socialicons = [
    { icon: <FaPinterestP />, link: 'https://www.pinterest.com' },
    { icon: <FaInstagram />, link: 'https://www.instagram.com' },
    { icon: <FaXTwitter />, link: 'https://www.twitter.com' },
    { icon: <FaFacebookF />, link: 'https://www.facebook.com' },
]

const footerData = [
    {
        title: 'Our Links',
        links: [
            { name: 'Lorem Ipsum', id: '#' },
            { name: 'Lorem Ipsum', id: '#' },
            { name: 'Lorem Ipsum', id: '#' },
            { name: 'Lorem Ipsum', id: '#' },
            { name: 'Lorem Ipsum', id: '#' },
        ]
    },
    {
        title: 'Our Links',
        links: [
            { name: 'Lorem Ipsum', id: '#' },
            { name: 'Lorem Ipsum', id: '#' },
            { name: 'Lorem Ipsum', id: '#' },
            { name: 'Lorem Ipsum', id: '#' },
            { name: 'Lorem Ipsum', id: '#' },
        ]
    },
    {
        title: 'Our Links',
        links: [
            { name: 'Lorem Ipsum', id: '#' },
            { name: 'Lorem Ipsum', id: '#' },
            { name: 'Lorem Ipsum', id: '#' },
            { name: 'Lorem Ipsum', id: '#' },
            { name: 'Lorem Ipsum', id: '#' },
        ]
    },

];
const Footer = () => {

    return (
        <div className={styles.footerSection}>
            <div className="ccontainer">
                <div className={styles.conatctSection}>
                    <h3><NavLink to={`ops@stellargrowthfund.com`}>ops@stellargrowthfund.com</NavLink></h3>
                    <p>beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores </p>
                    <div className={styles.socialLinks}>
                        {socialicons.map(item => {
                            return <NavLink to={item.link}>{item.icon}</NavLink>
                        })}
                    </div>
                </div>
                <div className={styles.linkSecion}>
                    {footerData.map((section, index) => (
                        <div key={index}>
                            <h3>{section.title}</h3>
                            <ul >
                                {section.links.map((link, idx) => (
                                    <li key={idx}>
                                        <a
                                            href={link.id ? `#${link.id}` : link.url}
                                            style={{ color: '#fff', textDecoration: 'none' }}
                                            target={link.url ? "_blank" : ''}
                                            rel="noopener noreferrer"
                                        >
                                            <span >{link.name}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Footer