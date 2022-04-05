import React from 'react'
import './blog.css'
import Header from '../Header/Header'
import Footer from '../footer/Footer'


export default function Blogs() {
    return (
        <div>
            <Header />

            <section>
                <div className='blogs'>
                    <h2>
                        What Is ContextApi?
                    </h2>
                    <p>
                        The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent <br /> to child to parent, and so on.Context API is a new feature added in version 16.3 of React that allows one to share state across the entire app lightly and with ease. React.createContext() <br /> is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children.Provider is a component that as it's names <br /> suggests provides the state to its children.
                        HTML or semantic markup is HTML that introduces meaning to the web page rather than just presentation
                    </p>
                    <h2>
                        What Is SemanticTag?
                    </h2>
                    <p>
                        Semantic HTML or semantic markup is HTML that introduces meaning to the web page rather than just presentation. For example, a p tag indicates that the enclosed text is a paragraph. <br />The benefit of writing semantic HTML stems from what should be the driving goal of any web page: the desire to communicate. By adding semantic tags to your document, you provide <br /> additional information about that document, which aids in communication. Although nearly every HTML4 tag and all the HTML5 tags have semantic meanings, some tags are primarily <br /> semantic. HTML5 tags have semantic meanings, some tags are primarily
                        semantic.
                        HTML5 tags have semantic meanings, some tags are primarily
                        semantic.
                    </p>
                    <h2>
                        The Defference Between Inline,Inline-Block,Block Element!!
                    </h2>
                    <div className='inline'>
                        <h3>
                            Display Inline
                        </h3>
                        <p>
                            Display Inline Here the width, height not respected and the element goes to side by side
                        </p>
                        <h3>
                            Display Inline-Block
                        </h3>
                        <p>
                            Display Inline Here the width, height padding are respected, and aslo the element goes to side by side
                        </p>
                        <h3>
                            Display Block
                        </h3>
                        <p>
                            Display Block Here again everything is respected, but the elements donot sit side by side.
                        </p>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}
