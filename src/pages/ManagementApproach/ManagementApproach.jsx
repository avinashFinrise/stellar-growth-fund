import React from 'react'
import userimg from '../../assets/images/circle.png'
import styles from './ManagementApproach.module.scss'

const ManagementApproach = () => {

    const data = [
        {
            img: userimg,
            name: "Rachit Agarwal",
            title: "Director",
            description: "Mr. Rachit Agarwal is a visionary leader with 24 years of experience whose expertise spans beyond Business Administration into the world of innovative technologies. As a passionate tech enthusiast, he continually explores new advancements to integrate cutting-edge solutions within the trading and finance sectors, driving the firm towards greater efficiency and performance.",
            desc2: "Rachit is a firm advocate of leadership through action, upholding the core values of integrity, teamwork, entrepreneurship, and excellence. These principles shape the foundation of the culture at Stellar Growth Fund, where he has set a high standard of professionalism and innovation.",
            desc3: "Through his forward-thinking approach, Mr. Agarwal aims to redefine the future of finance by merging traditional business acumen with technological innovation.",

        },
        {
            img: userimg,
            name: "Devendra Seebaluck (Dave)",
            title: "Director",
            description: "Dave serves as an Independent Director at Stellar Growth Fund and brings over 15 years of extensive experience in the financial services sector. With a solid track record in investment and finance, he has developed expertise across equity markets, trading, asset management, wealth management, and portfolio construction. As a seasoned Fund Manager, Dave oversees portfolios with a primary focus on high-growth markets in India and Africa. His deep understanding of these regions allows him to navigate complex financial landscapes while delivering sustainable returns for investors.",
            desc2: "Dave holds a Master of Business Administration (MBA) and an MSc in Investment and Finance from Middlesex University, London. His academic foundation, combined with hands-on industry experience, makes him a pivotal leader in driving strategic growth for the fund."
        }
    ]
    return (
        <div className={styles.managementSection}>
            <div className='ccontainer'>
                <div className={styles.managementContent}>
                    <h2 className="title">Management Approach</h2>
                    <p>
                        At Stellar Growth Fund, our management philosophy is rooted in strategic foresight and agile decision-making. We pride ourselves on fostering a dynamic team of seasoned professionals with extensive expertise across global financial markets. Our leadership is committed to upholding the highest standards of corporate governance, ensuring transparency, accountability, and sustainability in every investment decision.
                        By leveraging cutting-edge financial technology and real-time market data, we empower our clients with informed, tactical strategies designed to maximize growth while managing risk.
                    </p>
                </div>
                {
                    data.map((item) => {
                        return (
                            <div className={styles.managementPerson}>
                                <div className={styles.imgSection}>
                                    <img src={item.img} alt="userimg" />
                                </div>
                                <div className={styles.contentSection}>
                                    <h4>{item.name} - {item.title}</h4>
                                    <p>{item.description}</p>
                                    {item.desc2 && <p>{item.desc2}</p>}
                                    {item.desc3 && <p>{item.desc3}</p>}

                                </div>
                            </div>
                        )
                    })
                }


            </div>
        </div>
    )
}

export default ManagementApproach