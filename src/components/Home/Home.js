import React from 'react';
import './Home.css';
import HeroImg from '../../Assets/Images/hero-img.png'
import Review from '../Review/Review';
import { Link } from 'react-router-dom';



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

                                <button type="btn" className='btn-primary py-2 px-5'>View Demo</button>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='hero-img'>
                                <img src={HeroImg} className='img-fluid' alt="Hero-Img"/>
                            </div>
                        </div>
                    </div>

                    <div className='revew-container'>
                        <Review>
                            <Link to="/review">
                                <button>See More Review</button>
                            </Link>
                        </Review>
                    </div>
                </div>
            </section>

           

        </>
    );
};

export default Home;