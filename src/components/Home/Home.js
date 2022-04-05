import React from 'react';
import './Home.css';
import HeroImg from '../../Assets/Images/hero-img.png'



const Home = () => {
    return (
        <>
            <section className='hero-area bg-light'>
                <div className='container'>
                    <div className='row align-items-center text-start'>
                        <div className='col-6'>
                            <div className='hero-content'>
                                <h1 className='title'>Trusted Effective Service and <span className='text-info'>Solutions</span></h1>
                                <p>Empowered Teams to Deliver Great Service Experience with Tech-view Service. Make ITSM Your Competitive Advantage With Tech-view Service Management. Start for Free Today!</p>

                                <button type="">View Demo</button>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='hero-img'>
                                <img src={HeroImg} className='img-fluid' alt="Hero-Img"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Home;