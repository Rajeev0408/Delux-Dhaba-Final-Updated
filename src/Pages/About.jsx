import React from 'react'
import aboutSushiTitleImage from '../assets/img/about-sushi-title.png';
import aboutImage from '../assets/img/img1.png';
import aboutLeafImage from '../assets/img/leaf-branch-1.png';
import  { useRef, useEffect } from 'react'
import ScrollReveal from 'scrollreveal';

const About = () => {
    const leftDivRef3 = useRef(null);
    const rightDivRef3 = useRef(null);
    useEffect(() => {
        
        if (leftDivRef3.current && rightDivRef3.current) {
            ScrollReveal().reveal(leftDivRef3.current, {
                origin: 'left', // Start the animation from the bottom
                duration: 1000,
                delay: 150,
                distance: '100px', // Distance to move
                easing: 'ease',
            });
    
            ScrollReveal().reveal(rightDivRef3.current, {
                origin: 'right', // Start the animation from the top
                duration: 1000,
                delay: 150,
                distance: '200px', // Distance to move
                easing: 'ease',
            });
        }
       

      

       
    }, []);

    return (
        <section className="about section" id="about">
            <div className="about__container container grid" ref={leftDivRef3}>
                <div className="about__data">
                    <span className="section__subtitle">About Us</span>
                    <h2 className="section__title about__title">
                        <div>
                            We Provide
                            <img src={aboutSushiTitleImage} alt="about" />
                        </div>
                        Healthy Food
                    </h2>
                    <p className="about__description">
                        Food comes to us from our relatives, whether they have wings or roots. This is how we consider food, it also has a culture. It has a history that passes from generation to generation. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, consectetur ut dignissimos quidem asperiores perspiciatis velit suscipit neque enim nisi amet. Soluta iste vitae eum, dicta neque laboriosam sint natus.
                    </p>
                </div>
                <img src={aboutImage} className="about__img" alt="about image" ref={rightDivRef3}/>
            </div>
            <img src={aboutLeafImage} className="about__leaf" alt="leaf branch" />
        </section>
    )
}

export default About