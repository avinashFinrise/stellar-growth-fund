import React from 'react'
import styles from './Home.module.scss'

const Home = () => {
    return (
        <div id="home" className={styles.homeSection}>
            <div className='ccontainer'>
                <div>
                    {/* <img src={img} alt="logo" /> */}
                    <h1 className='title'>Elevating Investment <br /> Excellence</h1>
                    <button className={`${styles.getStartedBtn} button`}>get Started</button>
                </div>
            </div>
            <div className={styles.gradient}></div>

        </div>
    )
}

export default Home