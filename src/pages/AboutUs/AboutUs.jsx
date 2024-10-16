import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import stellarimg from '../../assets/images/portrait-of-a-group-of-coworkers-sitting.jpg'
import styles from './AboutUs.module.scss'

const AboutUs = () => {

    const funddata = [
        { content: "Tailored investment strategies designed to meet your specific needs." },
        { content: "A comprehensive approach to risk management, ensuring your assets are safeguarded." },
        { content: "Global reach and local expertise, with a commitment to excellence." },
    ]

    return (
        <div id="about-us" className={styles.aboutSection}>
            <div className={`ccontainer ${styles.conatiner}`}>
                <div className={styles.introSection}>
                    <h2 className='title'>Introduction</h2>
                    <p>
                        At Stellar Growth Fund, we empower investors with bespoke financial solutions that unlock the potential for sustainable, long-term growth. Leveraging a wealth of expertise across a diverse range of asset classes—including equities, fixed income, and derivatives—our investment strategies are crafted to suit the unique goals of every client. Guided by a robust governance and risk management framework, we aim to provide seamless, transparent, and effective financial services that deliver measurable results.
                    </p>
                    <p>
                        Partner with us to navigate the complex financial landscape with clarity and precision. Whether you’re an individual investor seeking personal wealth management or an institution in need of strategic asset allocation, we offer world-class solutions designed to generate sustainable returns.
                    </p>
                </div>
                <div className={styles.whyChoose}>
                    <h2 className='title'>Why Choose <br />Stellar Growth Fund?</h2>
                    <div>
                        <div className={styles.contentSection}>
                            {
                                funddata.map(item => {
                                    return <div className={styles.singleContent}>
                                        <p className={styles.content}>{item.content}</p>
                                        <p className={styles.arrow}><FaArrowRightLong /></p>
                                    </div>
                                })
                            }
                        </div>
                        <div>
                            <img src={stellarimg} alt="stellarimg" />
                        </div>
                    </div>
                </div>
                <div className={styles.unlockYourFinancial}>
                    <h2 className="">Unlock your financial potential <br /> with  <span>Stellar Growth Fund</span>.</h2>
                    <h2 className=""><span>Contact us</span> now for a <br /> personalized consultation.</h2>
                    <button className="button">
                        Contact Us
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AboutUs