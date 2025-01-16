import React from "react";
import "./Menu.css";
import bgImage from '../images/bg-img.jpg';
import Slider from "react-slick";
import { Link } from 'react-router-dom';


function Menu() {
    const sliderSettings1 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <>
            <div className="menus">
                {/* <h1>Our Menus</h1> */}
                <div className="menu-layout">
                    {/* Left Content */}
                    <div className="content">
                        <h1>Heart of Our Bistro</h1>
                        <p>
                            We take pride in creating an inviting atmosphere that feels like a home away
                            from home. Whether you’re here for a leisurely brunch, a romantic dinner, or
                            a glass of wine with friends, you’ll find that our warm, attentive service and
                            cozy ambiance make every visit special.
                        </p>
                        <h2>Bistro</h2>
                    </div>
                    {/* Right Video */}
                    <div className="video-container">
                        <video autoPlay loop muted playsInline>
                            <source src="/assets/menu.mp4" type="video/mp4" />
                            {/* Your browser does not support the video tag. */}
                        </video>
                    </div>
                </div>
            </div>
            {/* content-overlay  */}
            <div class="fixed-bg-section" style={{ backgroundImage: `url(${bgImage})` }}>
                <div class="content-overlay">
                    <h1>Enjoy in good taste and live life</h1>

                </div>
            </div>
            {/* content-overlay  */}
            <div class="menu-container">
                {/* <!-- Left Column (Starters) --> */}
                <div class="menu-section">
                    <h2>Starters</h2>
                    <ul>
                        <li>
                            <div class="menu-item">
                                <span>French Onion Soup</span>
                                <span>$10.00</span>
                            </div>
                            <p>Rich beef broth, caramelized onions, and melted Gruyère cheese, served with a crusty baguette.</p>
                        </li>
                        <li>
                            <div class="menu-item">
                                <span>Goat Cheese Salad</span>
                                <span>$9.00</span>
                            </div>
                            <p>Fresh mixed greens, warm goat cheese, roasted beets, walnuts, and a honey-balsamic vinaigrette.</p>
                        </li>
                        <li>
                            <div class="menu-item">
                                <span>Escargots de Bourgogne</span>
                                <span>$12.00</span>
                            </div>
                            <p>Traditional French snails baked in garlic parsley butter and served with toasted baguette slices.</p>
                        </li>
                        {/* <!-- Add 5 more options as per your choice --> */}
                    </ul>
                </div>

                {/* <!-- Right Column (Main Courses) --> */}
                <div class="menu-section">
                    <h2>Main Courses</h2>
                    <ul>
                        <li>
                            <div class="menu-item">
                                <span>Steak Frites</span>
                                <span>$20.00</span>
                            </div>
                            <p>Grilled ribeye steak served with crispy French fries and a side of peppercorn sauce.</p>
                        </li>
                        <li>
                            <div class="menu-item">
                                <span>Coq au Vin</span>
                                <span>$24.00</span>
                            </div>
                            <p>Tender chicken slow-cooked in red wine with mushrooms, onions, and bacon, served with creamy mashed potatoes.</p>
                        </li>
                        <li>
                            <div class="menu-item">
                                <span>Ratatouille</span>
                                <span>$26.00</span>
                            </div>
                            <p>A hearty and flavorful vegetable medley of eggplant, zucchini, tomatoes, and bell peppers.</p>
                        </li>
                        {/* <!-- Add 5 more options as per your choice --> */}
                    </ul>
                </div>
            </div>
            {/* Footer  */}
            <div className="footer">
                <div className="footer-column">
                    <div className="logo">
                        <img src="/assets/baliboo.png" alt="Logo" />
                    </div>
                    <p>For a truly memorable dining experience reserve in advance a table as soon as you can. Come and taste our remarkable food and wine.</p>
                    <div className="social-icons">
                        <i className="fa fa-facebook"></i>
                        <i className="fa fa-twitter"></i>
                        <i className="fa fa-instagram"></i>
                    </div>
                </div>

                <div className="footer-column">
                    <h1>Quick Links</h1>
                    <ul className="menu-links">
                    <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/menu">Menu</Link>
                        </li>
                        <li>
                            <Link to="/contactus">Contact Us</Link>
                        </li>
                        <li>
                            <Link to="/book-table">Book Table</Link>
                        </li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h1>Gallery</h1>
                    <div className="gallery">
                        <Slider {...sliderSettings1}>

                            <img src="/assets/gallery1.png" alt="Gallery 1" />
                            <img src="/assets/gallery2.png" alt="Gallery 2" />
                            <img src="/assets/gallery1.png" alt="Gallery 3" />
                        </Slider>
                        {/* Add slider functionality here */}

                    </div>
                </div>
            </div>
            {/* Footer  */}
        </>
    );
}

export default Menu;
