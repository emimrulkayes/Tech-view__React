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
                    <h2> What Is ContextApi? </h2>
                    <p>
                        The Context API is a React structure that enables it to exchange unique details and assists in solving prop-drilling from all levels of application. It creates a context object. When React renders a component that subscribes to this context object, then it will read the current context value from the matching provider in the component tree.
                    </p>
                    <h2> What Is SemanticTag? </h2>
                    <p>
                        Semantic HTML tags provide information about the contents of those tags that goes beyond just how they look on a page. Text that is enclosed in the tag is immediately recognized by the browser as some type of coding language.
                    </p>
                    <h2>
                        The Defference Between Inline,Inline-Block,Block Element!!
                    </h2>
                    <div className='inline'>
                        <h3> display block: </h3>
                        <p>
                            It means that the element is displayed as a block, as paragraphs and headers have always been. A block has some whitespace above and below it and tolerates no HTML elements next to it.
                        </p>
                        <h3> display inline: </h3>
                        <p>
                            It means that the element is displayed inline, inside the current block on the same line. Only when it's between two blocks does the element form an 'anonymous block', which however has the smallest possible width.
                        </p>
                        <h3> display inline-block: </h3>
                        <p>
                        display inline-block:
                            Inline-block elements are similar to inline elements, except they can have padding and margins added on all four sides. have to declare display: inline-block in CSS code. One common use for using inline-block is for creating navigation links horizontally
                        </p>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}
