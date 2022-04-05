import React, { useState } from 'react'
import './Header.css'
export default function Header() {
    const [state, setState] = useState(false);
    let url = "/";
    let reviews = "/reviews";
    let dashboard = "/dashboard";
    let blogs = "/blogs"
    return (
        <div>
            <header className='header'>
                <nav>
                    <div className='nav'>
                        <div className='logo'>
                            <h2> Tech-view</h2>
                        </div>
                        <div className='navigation'>
                            <ul>
                                <li>
                                    <a href={url} >Home </a>
                                </li>
                                <li>
                                    <a href={reviews} >Reviews</a>
                                </li>
                                <li>
                                    <a href={dashboard} >Dashboard</a>
                                </li>
                                <li>
                                    <a href={blogs} >Blogs</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}
