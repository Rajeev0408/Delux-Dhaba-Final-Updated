import React, { useRef, useEffect } from 'react'
import { ReactTyped } from "react-typed";
import About from './About';
import ScrollReveal from 'scrollreveal';

import img40 from '../assets/img/img40.png'
import leafBranch2 from "../assets/img/leaf-branch-2.png"
import leafBranch3 from '../assets/img/leaf-branch-3.png';
import leafBranch4 from "../assets/img/leaf-branch-4.png"
import homeSushiTitle from '../assets/img/home-sushi-title.png'
import spinachLeaf from '../assets/img/spinach-leaf.png';
import salad from '../assets/img/Salad.png';
import popular3 from '../assets/img/popular3.png';
import { Link } from 'react-router-dom';

const Home = () => {
    const leftDivRef = useRef(null);
    const rightDivRef = useRef(null);
    const leftDivRef2 = useRef(null);
    const rightDivRef2 = useRef(null);
    
    
   
    const newsletterRef = useRef(null);

    useEffect(() => {
        if (leftDivRef.current && rightDivRef.current) {
            ScrollReveal().reveal(leftDivRef.current, {
                origin: 'bottom', // Start the animation from the bottom
                duration: 1000,
                delay: 250,
                distance: '50px', // Distance to move
                easing: 'ease',
            });
    
            ScrollReveal().reveal(rightDivRef.current, {
                origin: 'top', // Start the animation from the top
                duration: 1000,
                delay: 250,
                distance: '150px', // Distance to move
                easing: 'ease',
            });
        }
        if (leftDivRef2.current && rightDivRef2.current) {
            ScrollReveal().reveal(leftDivRef2.current, {
                origin: 'left', // Start the animation from the bottom
                duration: 1000,
                delay: 150,
                distance: '100px', // Distance to move
                easing: 'ease',
            });
    
            ScrollReveal().reveal(rightDivRef2.current, {
                origin: 'right', // Start the animation from the top
                duration: 1000,
                delay: 150,
                distance: '200px', // Distance to move
                easing: 'ease',
            });
        }
       

      

        if (newsletterRef.current) {
            ScrollReveal().reveal(newsletterRef.current, {
                origin: 'top',
                duration: 2000,
                delay: 200,
                distance: '300px',
                scale: 1,
                easing: 'ease',
            });
        }
    }, []);

    return (

        <div className='flex flex-col justify-center'>
            <section className=" home section flex " id="home"   >
                <div className="home__container container grid  " ref={leftDivRef}>
                    <div className="home_container_img place-self-center md:place-self-auto" ref={rightDivRef}>
                        <img src={img40} alt="home image" className="home__img" />
                    </div>

                    <div className="home__data">
                        <h1 className="home__title">
                            Enjoy Delicious
                            <div>
                                <img src={homeSushiTitle} alt="home image" />

                                <ReactTyped strings={[
                                    "Indian Food",
                                    "Punjabi Food",
                                    "Italian Food",
                                    "Chinease Food",
                                    "French Food",
                                ]} typeSpeed={100}
                                    backDelay={1000}
                                    backSpeed={80}
                                    loop
                                />
                            </div>
                        </h1>
                        <p className="home__description ">
                            Enjoy a good dinner with the best dishes in the Restorant and improve your day.
                        </p>
                        <Link to="/Menu" className="button">
                            Order Now <i className="ri-arrow-right-line"></i>
                        </Link>

                    </div>
                </div>

                <img src={leafBranch2} alt="leaf branch" className="home__leaf-1 " />
                <img src={leafBranch4} alt="leaf branch" className="home__leaf-2" />
                <a href="#" className="scrollup" id="scroll-up">
                    <i className="ri-arrow-up-line"></i>
                </a>
            </section>
            {/* <About /> */}
            <section className="recently section flex justify-center" id="recently" >
                <div className="recently__container container grid " ref={leftDivRef2}>
                    <div className="recently__data">
                        <span className="section__subtitle">Recently Added</span>
                        <h2 className="section__title">Tandoori Chicken<br />Extra Smoky</h2>
                        <p className="recently__description">
                            Take a look at What's new. And do not deprive yourself of a good
                            meal, enjoy and be happy.
                        </p>
                        <a href="./menu.html" className="button">
                            Order Now <i className="ri-arrow-right-line"></i>
                        </a>
                        <img src={spinachLeaf} className="recently__data-img" alt="Spinach Leaf" />
                    </div>
                    <div ref={rightDivRef2}>
                         <img src={popular3} className="recently__img" alt="Recently Added Dish" />
                    </div>

                   
                </div>
                <img src={leafBranch2} className="recently__leaf-1" alt="Leaf Branch 1" />
                <img src={leafBranch3} className="recently__leaf-2" alt="Leaf Branch 2" />
            </section>
            <section className="newsletter section flex " ref={newsletterRef}>
                <div className="newsletter__container container">
                    <div className="newsletter__content grid">
                        <img src={salad} className="newsletter__img" alt="Salad Image" />
                        <div className="newsletter__data">
                            <span className="section__subtitle">Newsletter</span>
                            <h2 className="section__title">Suscribe For<br />More</h2>
                            <form action="" className="newsletter__form">
                                <input type="email" placeholder="Enter email" className="newsletter__input" />
                                <button className="button newsletter__button">
                                    Suscribe <i className="ri-send-plane-line"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                    <img src={spinachLeaf} className="newsletter__spinach" alt="Spinach Leaf" />
                </div>
            </section>
        </div>

    );
};

export default Home