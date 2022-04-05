import React, { useState } from 'react'
import './sections.css'
import ImageUser from '../../dist/assets/1.avif'
export default function Section() {
    const [state, setState] = useState(false);
        let AllReview = "/reviews"
    return (
        <div>
            <section className='sections'>
                <div>
                    <h4>
                        FEEL THE MUSIC <br />
                        IN YOUR BONES
                    </h4>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />
                        Lorem Ipsum has been the industry's standard dummy text ever since the <br />
                        1500s, when an unknown printer took a galley of type and scrambled it to <br />
                        make a type specimen book. It has survived not only five centuries, but <br />
                        also the leap into electronic typesetting, remaining essentially
                    </p>
                    <button>Order Now</button>
                </div>
                <div>
                    <img src='https://www.pngplay.com/wp-content/uploads/7/Android-Mobile-Download-Free-PNG.png' />
                </div>
            </section>
            {/* Section Two Code Start Here */}
            <section className='section_two'>
                <div>
                    <div>
                        <h1>
                            All Customer Reviews
                        </h1>
                        <div className='line_throw'>
                            <div className='line'></div>
                        </div>
                        <div>
                            <div className='_paoao'>
                                <div className='boxed'>
                                    <div className='_padik'>
                                        <div>
                                            <img src={ImageUser} />
                                        </div>
                                        <div>
                                            <div className='stars'>
                                                <div>
                                                    <svg stroke="currentColor" fill="#ffc107" stroke-width="0" viewBox="0 0 576 512" className="text-warning" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                                                </div>
                                                <div>
                                                    <svg stroke="currentColor" fill="#ffc107" stroke-width="0" viewBox="0 0 576 512" className="text-warning" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                                                </div>
                                                <div>
                                                    <svg stroke="currentColor" fill="#ffc107" stroke-width="0" viewBox="0 0 576 512" className="text-warning" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                                                </div>
                                                <div>
                                                    <svg stroke="currentColor" fill="#ffc107" stroke-width="0" viewBox="0 0 576 512" className="text-warning" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                                                </div>
                                                <div>
                                                    <svg stroke="currentColor" fill="#ffc107" stroke-width="0" viewBox="0 0 576 512" className="text-warning" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                                                </div>
                                            </div>
                                            <div>
                                                <h6>
                                                    Leann Serrano
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <p>
                                            Product was in good packaging and condition. All the items were in the pouch. The token with QR c...
                                        </p>
                                    </div>
                                </div>
                                <div className='boxed'>
                                    <div className='_padik'>
                                        <div>
                                            <img src={ImageUser} />
                                        </div>
                                        <div>
                                            <div className='stars'>
                                                <div>
                                                    <svg stroke="currentColor" fill="#ffc107" stroke-width="0" viewBox="0 0 576 512" className="text-warning" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                                                </div>
                                                <div>
                                                    <svg stroke="currentColor" fill="#ffc107" stroke-width="0" viewBox="0 0 576 512" className="text-warning" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                                                </div>
                                                <div>
                                                    <svg stroke="currentColor" fill="#ffc107" stroke-width="0" viewBox="0 0 576 512" className="text-warning" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                                                </div>
                                                <div>
                                                    <svg stroke="currentColor" fill="#ffc107" stroke-width="0" viewBox="0 0 576 512" className="text-warning" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                                                </div>
                                                <div>
                                                    <svg stroke="currentColor" fill="#ffc107" stroke-width="0" viewBox="0 0 576 512" className="text-warning" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                                                </div>
                                            </div>
                                            <div>
                                                <h6>
                                                    Leann Serrano
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <p>
                                            Product was in good packaging and condition. All the items were in the pouch. The token with QR c...
                                        </p>
                                    </div>
                                </div>
                                <div className='boxed'>
                                    <div className='_padik'>
                                        <div>
                                            <img src={ImageUser} />
                                        </div>
                                        <div>
                                            <div className='stars'>
                                                <div>
                                                    <svg stroke="currentColor" fill="#ffc107" stroke-width="0" viewBox="0 0 576 512" className="text-warning" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                                                </div>
                                                <div>
                                                    <svg stroke="currentColor" fill="#ffc107" stroke-width="0" viewBox="0 0 576 512" className="text-warning" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                                                </div>
                                                <div>
                                                    <svg stroke="currentColor" fill="#ffc107" stroke-width="0" viewBox="0 0 576 512" className="text-warning" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                                                </div>
                                                <div>
                                                    <svg stroke="currentColor" fill="#ffc107" stroke-width="0" viewBox="0 0 576 512" className="text-warning" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                                                </div>
                                                <div>
                                                    <svg stroke="currentColor" fill="#ffc107" stroke-width="0" viewBox="0 0 576 512" className="text-warning" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                                                </div>
                                            </div>
                                            <div>
                                                <h6>
                                                    Leann Serrano
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <p>
                                            Product was in good packaging and condition. All the items were in the pouch. The token with QR c...
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='all_review'>

                                <a href={AllReview}>All Review</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
