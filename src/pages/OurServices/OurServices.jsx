import React from 'react'
import styles from './OurServices.module.scss'

const OurServices = () => {

    const servicesdata = [
        { title: "1. Investment Strategy", content: "Our investment strategies are designed to achieve long-term growth and stability. We offer exposure to a diverse range of asset classes, including." },
        { title: "2. Wealth Management", content: "Our wealth management services are designed to cater to the specific financial needs of high-net-worth individuals and families. By developing personalized financial plans, we ensure that your wealth is preserved and grows sustainably over time. Our services include." },
        { title: "3. Risk Management", content: "We prioritize a robust risk management framework that integrates cutting-edge tools and methodologies to mitigate market volatility and safeguard your assets." },
        { title: "4. Global Asset Allocation", content: "Our global network allows us to tap into diverse investment opportunities across multiple geographies and sectors. By leveraging this international expertise, we help you capitalize on the best market opportunities available." },
    ]

    return (
        <div id="services" className={styles.ourServicesSection}>
            <div className='ccontainer'>
                <h2 className="title">Our Services</h2>
                <div className={styles.servicesCard}>
                    {servicesdata.map((item, index) => {
                        return (
                            <div>
                                <h5>{item.title}</h5>
                                <p>{item.content}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default OurServices